import fs from 'fs';
import {rawToCSV, rawToJSON} from '../../../helpers/dataParser';
// import path from 'path';
// import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();

export default async (req, res) => {
  const {
    query: { locale, id, format },
  } = req

  const file = `./data/${id}-${locale}.txt`;

  res.setHeader('Cache-Control', 's-maxage=31556952');

  try {
    const fileContent = fs.readFileSync(file, 'utf8');

    if (format === 'json') {
      
      res.json(await rawToJSON(fileContent, locale));

    } else if (format === 'csv') {
      

      res.setHeader('Content-disposition', `attachment; filename=${id}-${locale}.csv`);
      res.setHeader('Content-Type', 'text/csv')
      
      res.end(rawToCSV(fileContent, locale));

    } else {
      res.writeHead(400);
      res.end(`Invalid file format: ${format}.`);
    }

    
  } catch (e) {
    console.error(e);
    res.writeHead(400);
    res.end(`File not found: ${file}.`);
  }
}
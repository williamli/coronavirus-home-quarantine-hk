import fs from 'fs';
import {rawToCSV} from '../../../helpers/dataParser';
// import path from 'path';
// import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();

export default (req, res) => {
  const {
    query: { locale, id, format },
  } = req

  const file = `./data/${id}-${locale}.txt`;

  // const contents = fs.readFile(path.join(serverRuntimeConfig.PROJECT_ROOT, file));
  const csv = rawToCSV(fs.readFileSync(file, 'utf8'), locale);
  // const contents = "hi";
  res.end(`${csv}`);
}
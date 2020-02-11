# coronavirus-home-quarantine-hk

🦠List of home confinees under the 14-day home quarantine in Hong Kong due to Coronavirus in various comprehensible formats.

## PDF to CSV / JSON Data Parser

The Node.js based data parser for https://www.chp.gov.hk/files/pdf/list_of_buildings_tc.pdf (Traditional Chinese) and https://www.chp.gov.hk/files/pdf/list_of_buildings_en.pdf (English) can be found at [/helpers/dataParser.js](https://github.com/williamli/coronavirus-home-quarantine-hk/blob/master/helpers/dataParser.js).
The parser is accessed by a serverless function (AWS Lambda) at the https://coronavirus-home-quarantine-hk.now.sh/api/zh-HK/[file_id]/[format] endpoint where:

1. [file_id]: The filename of data files located [here](https://github.com/williamli/coronavirus-home-quarantine-hk/tree/master/data) (excluding .txt extension)
2. [format]: json or csv

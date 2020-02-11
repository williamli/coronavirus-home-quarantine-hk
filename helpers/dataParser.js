// import _ from 'lodash';
// import content from 'data/content';

String.prototype.removeHeadings = function (locale) {
  return this.replace(new RegExp(`${getHeadings(locale)}$\n`, 'gm'), '');
}

String.prototype.removeNumbers = function () {
  return this.replace(new RegExp(/^\d+\. /, 'gm'), '.');
}

String.prototype.tokenizeRecords = function () {
  return this.split(/^\./gm).slice(1);
}

String.prototype.formatTimestamp = function () {
  
  return this.replace(/^(.*)(\d\d+\/\d+\/\d\d\d\d)(.*)/, "$1 $3, $2");
}

String.prototype.removeLineBreaks = function () {
  
  return this.replace(/(\r\n|\n|\r)/gm, " ");
}

String.prototype.cleanupSpaces = function () {
  
  return this.replace(/  +/gm, ' ').replace(/ ,/gm, ',');
}

String.prototype.formatAddress = function (locale) {
  const formatter = new RegExp(`^(${getDistricts(locale)})(\\s+)(.*)(\\,\\s\\d\\d+\\\/\\d+\\\/\\d\\d\\d\\d)$`, "m")
  
  return this.replace(formatter, "\"$1\",\"$3\"$4");
}

const getDistricts = (locale) => {
  return locale === 'en-HK' ? "Central & Western|Eastern|Southern|Wan Chai|Sham Shui Po|Kowloon City|Kwun Tong|Wong Tai Sin|Yau Tsim Mong|Islands|Kwai Tsing|North|Sai Kung|Sai Hung|Sha Tin|Tai Po|Tsuen Wan|Tuen Mun|Yuen Long" : /Test/;
}

const getHeadings = (locale) => {
  return locale === 'en-HK' ? `District Name of Building End Date of Home
Quarantine` : `地區 大廈名稱 家居檢疫最後日期`;
}

const rawToCSV = (rawContent, locale) => {

  const records = rawContent.removeHeadings(locale).removeNumbers().tokenizeRecords().map((record, i)=>{

    return record.removeLineBreaks().formatTimestamp().cleanupSpaces().formatAddress(locale);

  })

  return records.join("\n\n");

}

export {rawToCSV};
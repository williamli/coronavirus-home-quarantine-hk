// import _ from 'lodash';
// import content from 'data/content';

String.prototype.removeHeadings = function (locale) {
  return this.replace(new RegExp(`${getHeadings(locale)}$\n`, 'gm'), '');
}

String.prototype.removeNumbers = function () {
  return this.replace(new RegExp(/^\d+\. /, 'gm'), '.');
}

const getHeadings = (locale) => {
  return locale === 'en-HK' ? `District Name of Building End Date of Home
Quarantine` : `地區 大廈名稱 家居檢疫最後日期`;
}

const rawToCSV = (rawContent, locale) => {

  

  return rawContent.removeHeadings(locale).removeNumbers();

}

export {rawToCSV};
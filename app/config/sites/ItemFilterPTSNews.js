const cheerio = require('cheerio')

const ArticleExtract = require('../../article/ArticleExtract.js')
const ArticleRemoveAttributes = require('../../article/ArticleRemoveAttributes.js')

let main = async function (item, options) {

  if (!item.content) {
    return item
  }

  const $ = cheerio.load(item.content)

  $('nav').remove()

  item.content = $('body').html()

  

  return item
}

module.exports = main
const cheerio = require('cheerio')

let main = async function (item, options) {

  if (!item.content) {
    return item
  }

  //console.log(content)
  //console.log(content.indexOf('p-80'))
  let $ = cheerio.load(item.content)
  
  let collection = $('td[width="50%"]')

  //console.trace(collection.length)
  let items = []
  for (let i = 1; i < collection.length; i++) {
    
    let item = collection.eq(i)


    let cells = []

    let tables = item.find('td').eq(0).children('table')
    for (let j = 0; j < tables.length; j++) {
      let h = tables.eq(j).find('td:last').html().trim()
      // if (h === '<br>') {
      //   continue
      // }
      cells.push(h)
    }
    // item.find('td').eq(0).children('table').eq(2).remove()

    // let aTag = item.find('a:last').parent().html()

    // // item.after(aTag)
    // item.find('td').eq(0).children('table').eq(3).remove()

    let html = cells.join('\n')
    while (html.indexOf('  ') > -1) {
      html = html.replace(/  /g, ' ')
    }
    html = html.split('<span></span>').join('')
    html = html.split('</div> <br>').join('</div>')
    
    while (html.indexOf('\n\n') > -1) {
      html = html.replace(/\n\n/g, '\n')
    }
    items.push(html)
  }

  if (items.length === 0) {
    return '(No data)'
  }

  // ----------------------------------------------------------------



  // ----------------------------------------------------------------
  
  item.content = items.join('\n<hr/>\n')

  return item
}

module.exports = main
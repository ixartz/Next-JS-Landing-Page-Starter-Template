const axios = require('axios')

const URL = 'https://api.notion.com/v1/databases/d3b32e8316a9434e9c436620e66d18e8'

const client = axios.create({
  baseURL: URL,
  timeout: 60000,
  headers: {
    'Authorization': `Bearer ${process.env.NOTIONKEY}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': "application/json"
  }
});


const unwrap = function (item) {
  const out = {}

  out.title = item.properties.title.title[0].plain_text
  out.description = item.properties.description.rich_text[0].plain_text
  out.language = item.properties.language.select.name
  out.level = item.properties.level.select.name
  out.author = item.properties.author.rich_text[0].plain_text
  out.content = item.properties.content.multi_select.map((item) => item.name)
  out.tags = item.properties.tags.multi_select.map((item) => item.name)
  out.category = item.properties.category.select.name
  out.source = item.properties.source.rich_text[0].plain_text
  out.type = item.properties.type.select.name
  
  return out
}


const query = async (start_cursor) => {
  const response = await client.post('/query', {
    filter: {
      and: []
    },
    start_cursor
  })
  return response
}

async function main () {

  let has_more = true
  let next_cursor = undefined
  const items = []
  let response
  while (has_more) {
    try {
      response = await query(next_cursor)
    }
    catch (error) {
      console.error(error)
    }

    for (const result of response.data.results) {
      const unwrapped = unwrap(result)
      items.push(unwrapped)
    }
    has_more = response.has_more
    next_cursor = response.next_cursor
  }

  console.log(JSON.stringify(items))
}

main()
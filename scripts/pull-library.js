const axios = require('axios')
require('dotenv').config({ path: '.env.local' })

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
  try {
    const out = {}

    // Safely get values with fallbacks
    out.title = item.properties.title?.title?.[0]?.plain_text || 'Untitled'
    out.description = item.properties.description?.rich_text?.[0]?.plain_text || 'No description'
    out.language = item.properties.language?.select?.name || 'Unknown'
    out.level = item.properties.level?.select?.name || 'Unspecified'
    out.author = item.properties.author?.rich_text?.[0]?.plain_text || 'Unknown'
    out.content = item.properties.content?.multi_select?.map((item) => item.name) || []
    out.tags = item.properties.tags?.multi_select?.map((item) => item.name) || []
    out.category = item.properties.category?.select?.name || 'Uncategorized'
    out.source = item.properties.source?.rich_text?.[0]?.plain_text || ''
    out.type = item.properties.type?.select?.name || 'Unknown'
    
    return out
  } catch (error) {
    console.error('Skipping item due to error:', error.message)
    return null
  }
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
  
  while (has_more) {
    try {
      const response = await query(next_cursor)
      
      for (const result of response.data.results) {
        const unwrapped = unwrap(result)
        if (unwrapped) {
          items.push(unwrapped)
        }
      }
      
      has_more = response.data.has_more
      next_cursor = response.data.next_cursor
    }
    catch (error) {
      console.error('Error fetching data:', error.message)
    }
  }

  console.log(JSON.stringify(items))
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
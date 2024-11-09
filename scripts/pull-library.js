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

/* Notion item reference

{
  object: 'page',
  id: '1395c08e-fb73-80c4-9734-fcc0e55ed7fc',
  created_time: '2024-11-09T18:03:00.000Z',
  last_edited_time: '2024-11-09T18:07:00.000Z',
  created_by: { object: 'user', id: '7c1c8b1a-2c21-46a2-8ef9-d01ac157409d' },
  last_edited_by: { object: 'user', id: '7c1c8b1a-2c21-46a2-8ef9-d01ac157409d' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: 'd3b32e83-16a9-434e-9c43-6620e66d18e8'
  },
  archived: false,
  in_trash: false,
  properties: {
    description: { id: 'I%7CHD', type: 'rich_text', rich_text: [Array] },
    source: { id: 'JhaE', type: 'rich_text', rich_text: [Array] },
    category: { id: 'ZCs%3C', type: 'select', select: [Object] },
    tags: { id: 'es%5Ey', type: 'multi_select', multi_select: [Array] },
    language: { id: 'fZPo', type: 'select', select: [Object] },
    author: { id: 'j__N', type: 'rich_text', rich_text: [Array] },
    content: { id: 'mVgj', type: 'multi_select', multi_select: [Array] },
    level: { id: 's%3C%5Br', type: 'select', select: [Object] },
    type: { id: '~%5Bw%3C', type: 'select', select: [Object] },
    title: { id: 'title', type: 'title', title: [Array] }
  },
  url: 'https://www.notion.so/Indiginews-Weekly-Cree-Lessons-1395c08efb7380c49734fcc0e55ed7fc',
  public_url: 'https://bony-carp-8ee.notion.site/Indiginews-Weekly-Cree-Lessons-1395c08efb7380c49734fcc0e55ed7fc'
}
  
 */

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
    out.created = item.created_time
    
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
import https from 'https'
import { allBlogs } from '../src/data/blogData.js'
import { allFlatKeywords, slugifyKeyword } from '../src/data/keywordsData.js'

const host = 'h-q-design-services.vercel.app'
const key = '8d7a42b109fc4d70835b3e1c9e2a5f71'
const keyLocation = `https://${host}/${key}.txt`

// Assemble high-priority indexing URL list
const staticRoutes = [
  '',
  'properties',
  'tools',
  'projects',
  'area-guides',
  'trends',
  'agents',
  'forum',
  'services',
  'portfolio',
  'case-studies',
  'blog',
  'about',
  'partners',
  'keywords-directory',
  'contact'
]

const urlList = [
  ...staticRoutes.map(r => r ? `https://${host}/${r}` : `https://${host}/`),
  ...allFlatKeywords.slice(0, 1000).map(kw => `https://${host}/keywords/${slugifyKeyword(kw)}`),
  ...allBlogs.slice(0, 1000).map(b => `https://${host}/blog/${b.slug}`)
]

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
})

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
}

console.log(`Submitting ${urlList.length} priority URLs to IndexNow API (Bing, Yandex, Seznam, Naver)...`)

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode} (${res.statusMessage})`)
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('Successfully submitted URLs to search engines via IndexNow!')
  } else {
    console.log(`IndexNow response code: ${res.statusCode}. Note: key file must be live on https://${host}/${key}.txt`)
  }
})

req.on('error', (e) => {
  console.error(`IndexNow submission error: ${e.message}`)
})

req.write(payload)
req.end()

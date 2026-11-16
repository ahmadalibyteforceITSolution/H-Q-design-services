import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const host = process.env.SITE_HOST || 'www.hqdesignservices.com'
const key = '8d7a42b109fc4d70835b3e1c9e2a5f71'
const keyLocation = `https://${host}/${key}.txt`

// Read all verified unique URLs directly from public/sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml')
let urlList = []
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
  urlList = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
}


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

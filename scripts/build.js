import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

console.log('Generating sitemap...')
try {
  execSync('node scripts/generate-sitemap.js', { stdio: 'inherit', cwd: projectRoot })
} catch (error) {
  console.error('Sitemap generation failed:', error)
  process.exit(1)
}

console.log('Compiling Vite production build...')
try {
  execSync('node node_modules/vite/bin/vite.js build', { stdio: 'inherit', cwd: projectRoot })
} catch (error) {
  console.error('Vite build failed:', error)
  process.exit(1)
}

console.log('Build completed successfully!')

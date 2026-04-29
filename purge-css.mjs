import { PurgeCSS } from 'purgecss'
import { writeFileSync, statSync, readdirSync } from 'fs'
import { join } from 'path'

// Recursively find all .css files under a directory
function findCss(dir) {
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) results.push(...findCss(full))
    else if (entry.isFile() && entry.name.endsWith('.css')) results.push(full)
  }
  return results
}

const content = ['./public/**/*.html']

// Safelist: classes injected by JS plugins or toggled dynamically
const safelist = {
  standard: [
    'show', 'active', 'disabled', 'fade', 'in',
    'collapse', 'collapsing',
    'modal-open', 'open', 'dropup',
  ],
  greedy: [
    /^slick-/,
    /^mfp-/,
    /^lb-/,
    /^lightbox/,
    /^bs-/,
    /^chroma/,
    /^ln-/,
    /^lnt/,
    /^hl/,
  ],
}

const cssFiles = findCss('./public')
console.log(`PurgeCSS: found ${cssFiles.length} CSS files in public/\n`)

let totalSaved = 0
let skipped = 0

for (const file of cssFiles) {
  try {
    const before = statSync(file).size
    const results = await new PurgeCSS().purge({
      content,
      css: [file],
      safelist,
      fontFace: false,   // keep @font-face (needed for nerd-fonts, slick)
      keyframes: false,  // keep @keyframes
      variables: false,  // keep CSS custom properties
    })
    if (!results[0]) continue
    writeFileSync(file, results[0].css)
    const after = Buffer.byteLength(results[0].css)
    const saved = before - after
    totalSaved += saved
    const pct = before > 0 ? Math.round((saved / before) * 100) : 0
    if (saved > 100) {
      console.log(`  ${file.replace('public/', '')}`)
      console.log(`    ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB  (-${(saved / 1024).toFixed(1)}KB, ${pct}%)\n`)
    }
  } catch (err) {
    console.warn(`  [skip] ${file.replace('public/', '')}: ${err.reason ?? err.message}\n`)
    skipped++
  }
}

console.log(`Total saved: ${(totalSaved / 1024).toFixed(1)}KB${skipped > 0 ? `  (${skipped} file(s) skipped)` : ''}`)

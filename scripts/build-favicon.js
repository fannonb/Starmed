const sharp = require('sharp')
const fs = require('fs')

async function main() {
  const src = 'public/starmed-favicon-src.webp'

  await sharp(src).resize(32, 32).png().toFile('app/icon.png')
  await sharp('public/apple-icon.png').toFile('app/apple-icon.png')

  const png = await sharp(src).resize(64, 64).png().toBuffer()
  const b64 = png.toString('base64')
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">',
    `<image width="64" height="64" xlink:href="data:image/png;base64,${b64}"/>`,
    '</svg>',
  ].join('')
  fs.writeFileSync('public/icon.svg', svg)

  console.log('ok')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

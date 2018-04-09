const DatArchive = require('.')

const contents = `
<title>Gateway Test</title>
<p>Hello World!</p>
`

run()

async function run () {
  console.log('Creating new archive')

  const archive = await DatArchive.create({
    title: 'Gateway test',
    description: 'This is testing out creating new archives through the dat-gateway'
  })

  console.log(`Opened, ${archive.url}`)

  await archive.writeFile('index.html', contents)

  console.log('Wrote index.html')

  const dir = await archive.readdir('/')

  console.log('Read dir:', dir)

  const readContents = await archive.readFile('/index.html')

  console.log('Read contents', readContents)
}

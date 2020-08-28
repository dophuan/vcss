const fs = require('fs')
const defaultConfig = require('./defaultConfig')

const fsRender = (inputPath, outputPath, log = 'Your file has been' +
    ' compiled') => {

    fs.readFile(inputPath, 'utf8', (err, data) => {


        if (err) {
            return console.log('No such input file')
        }

        const isVcss = /\.(vcss)/.test(inputPath)

        if (!isVcss) {
            return console.log('Your input file doesn’t have the .vcss extension')
        }


        if (!outputPath) {
            return console.log('No such output file')
        }

        const isCSSFile = /\.(css)/.test(outputPath)

        if (!isCSSFile) {
            return console.log('Your output file doesn’t have the .css extension')
        }


        const vcssStylesheet = data

        fs.readFile('./vcfile.json', 'utf8', (err, data) => {

            const config = (err)
                ? defaultConfig
                : JSON.parse(data)

            const vc = require('../src/index.js')(config)
            const cssStylesheet = vc.render(vcssStylesheet, inputPath)
            fs.writeFile(outputPath, cssStylesheet, function (err) {
                if (err) throw err
                console.log('Saved!')
            })
            console.log(log)
        })

    })

}

module.exports = fsRender
#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const pkg = require('../package.json')
const fsRender = require('./fsRender.js')
const watcherFsRender = require('./fsRenderWatcher')

let inputPath
let outputPath

program
    .version(pkg.version)
    .description(pkg.description)
    .option('-o, --out', 'output to <dir> when passing files')
    .option('-w, --watch', 'watch for changes')
    .arguments('<inputFile> [outputFile...]')
    .action((inputFile, outputFile = inputFile) => {
        inputPath = inputFile.toString()
        outputPath = outputFile.toString()
    })
    .parse(process.argv)

// Resolve default output path
const basePath = path.dirname(inputPath)
const baseName = path.basename(inputPath).replace(/\.vcss/g, '.css')
const defaultOutputPath = basePath + '/' + baseName

// execute the program with corresponding option
if (program.watch && program.out) {
    watcherFsRender(inputPath, outputPath)
} else if (program.watch) {
    watcherFsRender(inputPath, defaultOutputPath)
} else if (program.out) {
    fsRender(inputPath, outputPath)
} else {
    fsRender(inputPath, defaultOutputPath)
}
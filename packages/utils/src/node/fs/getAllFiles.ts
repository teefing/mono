import fs from 'fs'
import path from 'path'

const getDirsInFolder = (dirPath) => {
  return fs
    .readdirSync(dirPath)
    .filter(d => fs.lstatSync(path.resolve(dirPath, d)).isDirectory())
    .map(d => path.resolve(dirPath, d))
}

const getFilesInFolder = (dirPath) => {
  return fs
    .readdirSync(dirPath)
    .filter(d => fs.lstatSync(path.resolve(dirPath, d)).isFile())
    .map(d => path.resolve(dirPath, d))
}

export const getAllFilesInFolder = (dirPath) => {
  const files = getFilesInFolder(dirPath)
  const dirs = getDirsInFolder(dirPath)
  const innerFiles = dirs.map(d => getAllFilesInFolder(d)).flat()
  return [...files, ...innerFiles]
}

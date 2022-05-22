import { readFile, appendFile, writeFile } from './helpers.js'


export const createItems = async (fileName, item) =>{
    await appendFile(fileName, `${item}\r\n`)
    return await readFile(fileName)
}

export const readItems = async (fileName, index) =>{
    return await readFile(fileName, index)
}

export const updateItems = (fileName, targetItem, newItem) =>{

}

console.log(await readItems('animals'))

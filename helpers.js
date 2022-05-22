import fs from 'fs/promises'

// CREATE
export const appendFile = (fileName, item) => {
    if(!fileName) throw 'This fileName is missing!'
    if(!item) throw 'The item is missing!'
    return fs.appendFile(`./data/${fileName}.csv`, item)
}

// READ
export const readFile = async (fileName, index) => {
    if(!fileName) throw 'The file name is missign.'
    const data = await fs.readFile(`./data/${fileName}.csv`, 'utf8')
    if(index >= 0){
        const dataItems = data.split('\n')
        return dataItems[index]
    }
    return data; 
}
 
// UPDATE
export const writeFile = () => {

}
// DELETE

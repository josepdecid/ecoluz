import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.10/src/json.ts';

const filename = 'rates.json'
const json = await readJSON(filename)

const date = json.PVPC[0].Dia.split('/');
let day = date[0]
const month = date[1]
const year = date[2]

const filteredData = json.PVPC.map(({ Hora, PCB, CYM }) => {
    return {
        hour: Hora.split('-')[0],
        price: {
            PCB: parseFloat(PCB.replace(',', '.')) / 1000,
            CYM: parseFloat(CYM.replace(',', '.')) / 1000
        }
    }
})

const newFilename = day + '_' + month + '_' + year + '.json'
await writeJSON('data/processed/' + newFilename, filteredData)
await writeJSON('data/raw/' + newFilename, json)
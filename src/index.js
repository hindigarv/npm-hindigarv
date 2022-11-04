import {} from "nukta-remover"
import {readCsv} from "./csv-reader.js";
import {generateValuesFromRegex} from "regex-val-gen";

const words = await readCsv()

function getRoops(word) {
    let roops = word.roops;
    roops.push(word.shabda)
    generateValuesFromRegex(word.regex).forEach(v => roops.push(v))
    return [...new Set(roops)]
}

const shabdakosha = words
    .filter(w => w != null)
    .reduce((acc, word) => {
        getRoops(word).forEach(roop => acc[roop] = word)
        return acc;
    }, {})

const find = (str) => {
    return str.split(" ")
        .map(token => token.trim())
        .map(token => shabdakosha[token])
        .filter(token => token != null)
}
export default {
    shabdakosha,
    find
}
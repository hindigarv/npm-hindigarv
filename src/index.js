import {} from "nukta-remover"
import {readCsv} from "./csv-reader.js";

const words = await readCsv()
const shabdakosha = words
    .filter(w => w != null)
    .reduce((acc, word) => {
        acc[word.shabda] = word;
        return acc;
    }, {})
// TODO add the roops and regex generated values to the keys in shabdakosha

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
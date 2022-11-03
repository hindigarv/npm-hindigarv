import {parse} from "csv-parse";
import fs from "fs";
import {} from "nukta-remover"


class Word {
    constructor(shabda, mool, paryaya) {
        this.shabda = shabda;
        this.mool = mool;
        this.paryaya = paryaya;
    }
}

const toWord = (row) => {
    const shabda = row[0].trim().removeNukta();
    const mool = row[1].trim();
    const paryaya = row[2].trim();
    const roop = row[4].trim().removeNukta().split(",")
    if ("शब्द" === shabda || shabda === "" || mool === "" || paryaya === "") {
        return null;
    }
    return new Word(shabda, mool, paryaya);
}

const readCsv = () => {
    const data = []
    return new Promise((resolve, reject) => {
        fs.createReadStream("./शब्दकोश.tsv")
            .pipe(parse({delimiter: '\t'}))
            .on("data", (row) => data.push(toWord(row)))
            .on("end", () => resolve(data))
            .on('error', reject);
    });
}

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
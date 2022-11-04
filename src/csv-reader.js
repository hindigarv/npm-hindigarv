import fs from "fs";
import {parse} from "csv-parse";
import {Word} from "./model.js";

const toWord = (row) => {
    const shabda = row[0].trim().removeNukta();
    const mool = row[1].trim();
    const paryaya = row[2].trim();
    if ("शब्द" === shabda || shabda === "" || mool === "" || paryaya === "") {
        return null;
    }
    const roops = row[4].removeNukta().split(",").map(r => r.trim());
    const regex = row[5].trim();
    return new Word(shabda, mool, paryaya, roops, regex);
}

export const readCsv = () => {
    const data = []
    return new Promise((resolve, reject) => {
        fs.createReadStream("./शब्दकोश.tsv")
            .pipe(parse({delimiter: '\t'}))
            .on("data", (row) => data.push(toWord(row)))
            .on("end", () => resolve(data))
            .on('error', reject);
    });
}
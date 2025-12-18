import { tokenize } from "./lib/tokenizer.js"

let sourceResp = await fetch("test/input1.js")
let source = await sourceResp.text()

console.log(source)
let tokensList = tokenize(source)
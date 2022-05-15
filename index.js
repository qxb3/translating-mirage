const translate = require('translate-google');

const fs = require('fs');
const textsToTranslate = new Map();

const bundle = fs.readFileSync('./bundle.properties', 'utf-8').split('\n');
bundle.forEach((v) => {
  const [key, txt] = v.split('=');
  textsToTranslate.set(key, txt);
});

const targetLanguage = 'tl';
const fileName = 'bundle_ph.properties';

//Translating part
(async () => {
  let done = 0
  for (const x of textsToTranslate) {
    const [k, v] = x
    const translated = await translate(v, { from: 'en', to: targetLanguage })
    textsToTranslate.set(k, translated)
    done++
    console.log(`Done: ${done}`)
  }
})()

// Saving the translated version to a file
let fullTranslatedString = ''
textsToTranslate.forEach((v, k) => {
  fullTranslatedString += `${k}=${v}\n`
})
fs.writeFileSync(fileName, fullTranslatedString)

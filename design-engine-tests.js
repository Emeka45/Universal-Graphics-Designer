const fs = require('fs');
const source = fs.readFileSync('app.js','utf8');
if (!source.includes('AUTOSAVE_KEY')) throw new Error('autosave foundation missing');
if (!source.includes('hydrateAll')) throw new Error('image hydration missing');
if (!source.includes('letterSpacing')) throw new Error('letter spacing missing');
if (!source.includes('locked')) throw new Error('locking support missing');
if (!source.includes('visible')) throw new Error('visibility support missing');
console.log('Universal Graphics Designer foundation checks passed');

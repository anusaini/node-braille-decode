const deBrailleCodePoint = chCode => chCode - 0x2800

const deBraille = ch => deBrailleCodePoint(ch.charCodeAt(0))

const isBraille = ch => {
  return !(deBraille(ch) > 127)
}

const decodeChar = ch => isBraille(ch) ? String.fromCharCode(deBraille(ch)) : ch

const decode = (str, separator) => str.split(separator || '').map(decodeChar).join(separator || '')

const brailleAlphabet = '⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚'

const decodeCharCode = chCode => isBraille(String.fromCodePoint(chCode)) ? String.fromCodePoint(deBrailleCodePoint(chCode)) : undefined

const brailleMap = () => {
  const map = []
  for (let i = 32 + 0x2800; i <= 127 + 0x2800; i++) {
    map.push({
      code: i,
      braille: String.fromCharCode(i),
      ascii: decodeCharCode(i)
    })
  }
  return map
}

module.exports = {
  deBrailleCodePoint,
  deBraille,
  isBraille,
  decodeChar,
  decode,
  brailleAlphabet,
  decodeCharCode,
  brailleMap,
  brailleMap
}

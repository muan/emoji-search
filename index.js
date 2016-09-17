const emoji = require('emojilib')
const lib = emoji.lib
const buildIndex = () => {
  const map = {}
  Object.keys(lib).forEach(key => {
    if (!lib[key]["char"]) { return }

    const words = lib[key]["keywords"]
    words.push(key)

    words.forEach(word => {
      if (map[word]) {
        map[word].push(key)
      } else {
        map[word] = [key]
      }
    })
  })

  return map
}
const map = buildIndex()
const keys = Object.keys(map)

const search = keyword => {
  var result = []
  keys.forEach(k => {
    if (k.indexOf(keyword) !== -1) {
      result = result.concat(map[k])
    }
  })

  result.sort((a, b) => {
    return emoji.ordered[a] - emoji.ordered[b]
  })

  // Move exact match to the first
  if (result.indexOf(keyword) !== -1) {
    result.splice(result.indexOf(keyword), 1)
    result.unshift(keyword)
  }

  return [...new Set(result.map(k => lib[k]["char"]))]
}

module.exports = search

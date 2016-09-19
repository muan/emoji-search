const es = require('./')
const test = require('tape')

test('result test', function (t) {
  // Result match
  t.deepEqual(es('panda'), ['🐼', '🎍'])
  // Exact match comes first
  t.equal(es('v')[0], '✌️')
  t.end()
})

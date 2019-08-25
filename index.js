const { router, get } = require('microrouter')

const makeSad = (count) => `（${'；＿'.repeat(count * 6 > 268435440 ? 44739240 : count).slice(0, -1)}）`

const parsePositiveInt = (str) => Math.abs(parseInt(str, 10))

const semi = async (req, res) => {
  res.setHeader('Content-type', 'text/plain; charset=UTF-8')
  res.end(makeSad(parsePositiveInt(req.params.count) || 2))
}

module.exports = router(get('/:count', semi), get('/*', semi))

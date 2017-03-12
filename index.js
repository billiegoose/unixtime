const cors = require('micro-cors')({
  allowMethods: ['GET', 'OPTIONS'],
  allowHeaders: ['Cache-Control']
})
const handler = (req, res) => ((new Date()).valueOf() / 1000).toFixed(0)
module.exports = cors(handler)


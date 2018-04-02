const params = function (url) {
  url = url.split('?')[1].split('&')
  url = url.reduce(function (acc, cur) {
    let key = cur.split('=')[0]
    let val = cur.split('=')[1]
    acc[key] = val
    return acc
  }, {})
  return url
}
module.exports = params
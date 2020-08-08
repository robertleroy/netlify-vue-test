// module.exports = {
//   publicPath: '/netlify-vue-test/'
// }
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/netlify-vue-test/'
    : '/'
}
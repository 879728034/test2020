const filters = {
  imageUrl: function (url) {
    if (url) return '/d' + url;
  },
  httpImgUrl: function (url) {
    if (url) return 'http://127.0.0.23'+url
  }
}
export default filters
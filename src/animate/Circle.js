// Canvas manipulation
function Circle (width, height, ctx) {
  var _this = this;

  // constructor
  (function () {
    _this.pos = {}
    init()
  })()

  function init () {
    _this.pos.x = Math.random() * width
    _this.pos.y = height + Math.random() * 100
    _this.alpha = 0.1 + Math.random() * 0.3
    _this.scale = 0.1 + Math.random() * 0.3
    _this.velocity = Math.random()
  }

  this.draw = function () {
    if (_this.alpha <= 0) {
      init()
    }
    _this.pos.y -= _this.velocity
    _this.alpha -= 0.0005
    ctx.beginPath()
    ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')'
    ctx.fill()
  }
}
export default Circle

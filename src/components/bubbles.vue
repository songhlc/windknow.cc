<template>
  <canvas id="demo-canvas">

  </canvas>
</template>
<script>
  import animationframe from '../animate/animationframe'
  import Circle from '../animate/Circle'
  var width
  var height
  var largeHeader
  var canvas
  var ctx
  var circles
  var animateHeader = true

  export default {
    name: 'bubbles',
    components: {
      animationframe
    },
    mounted () {
      this.initHeader()
      this.addListeners()
    },
    methods: {
      initHeader () {
        width = window.innerWidth
        height = window.innerHeight

        largeHeader = document.getElementById('bg')
        largeHeader.style.height = height + 'px'

        canvas = document.getElementById('demo-canvas')
        canvas.width = width
        canvas.height = height
        ctx = canvas.getContext('2d')

        // create particles
        circles = []
        for (var x = 0; x < width * 0.5; x++) {
          var c = new Circle(width, height, ctx)
          circles.push(c)
        }
        this.animate()
      },
      addListeners () {
        window.addEventListener('scroll', this.scrollCheck)
        window.addEventListener('resize', this.resize)
      },
      scrollCheck () {
        if (document.body.scrollTop > height) {
          animateHeader = false
        } else {
          animateHeader = true
        }
      },
      resize () {
        width = window.innerWidth
        height = window.innerHeight
        largeHeader.style.height = height + 'px'
        canvas.width = width
        canvas.height = height
      },
      animate () {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height)
          for (var i in circles) {
            circles[i].draw()
          }
        }
        window.requestAnimationFrame(this.animate)
      }
    }
  }
</script>

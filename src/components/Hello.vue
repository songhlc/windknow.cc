<template>
  <div id="bg" class="hello" @mousemove="mousemove">
    <bubbles></bubbles>
    <div>me</div>
  </div>
</template>
<script>
  import bubbles from '../components/bubbles.vue'

  export default {
    name: 'Hello',
    components: {
      bubbles
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {
    },
    methods: {
      mousemove (e) {
        let el = document.getElementById('bg')
        let width = el.offsetWidth
        let height = 600
        let distanceY = (height / 2 - (e.pageY - el.offsetTop)) / 15 - 50
        let distanceX = (width / 2 - (e.pageX - el.offsetLeft)) / 100
        el.style.backgroundPosition = distanceX + 'px ' + distanceY + 'px'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .hello{
    background-image: url(../assets/treebg.jpg);
    background-color: rgb(255, 255, 255);
    height: 600px;
    background-position: 0 -50px;
    background-size: cover;
  }
</style>

<template>
  <div id="bg" class="home" @mousemove="mousemove">
    <bubbles></bubbles>
    <category>
          <h5 class="text-center m-t-lg animated fadeInDown">菩提本无树 明镜亦非台 本来无一物 何处惹尘埃</h5>
    </category>
    <foot>

    </foot>
  </div>
</template>
<script>
  import bubbles from '../components/bubbles.vue'
  import category from '../components/category.vue'
  import foot from '../components/foot.vue'

  export default {
    components: {
      bubbles,
      category,
      foot
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
  .home{
    background-image: url(../assets/treebg.jpg);
    background-color: rgb(255, 255, 255);
    height: 600px;
    background-position: 0 -50px;
    background-size: cover;
  }
</style>

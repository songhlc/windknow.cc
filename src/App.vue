<template>
  <div id="app">
    <!--<navigate></navigate>-->
    <router-view></router-view>
  </div>
</template>
<script>
  import navigate from 'components/navigate.vue'

  export default {
    components: {
      navigate
    },
    beforeCreate () {
      console.log('欢迎来到风知的世界!')
      console.log('菩提偈[唐][惠能]')
      console.log('菩提本无树，明镜亦非台。')
      console.log('佛性常清净，何处有尘埃！')
      console.log('心是菩提树，身为明镜台。')
      console.log('明镜本清净，何处染尘埃！')
      console.log('菩提本无树，明镜亦非台。')
      console.log('本来无一物，何处惹尘埃！')
      console.log('菩提只向心觅，何劳向外求玄？')
      console.log('听说依此修行，西方只在目前！')
    }

  }
</script>

<style lang="less">
@import 'css/common.less';
</style>

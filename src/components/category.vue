<template>
  <div class="category">
    <nav id="nav" role='navigation'>
      <a class="clickr fontawesome-reorder"></a>
      <ul>
        <li class="active"><a href="#home">首页</a></li>
        <li><a href="https://github.com/songhlc" target="_blank">Github</a></li>
        <li>
          <a target="_blank" href="https://github.com/yonyouyc/blog/issues">团队博客</a>
        </li>
        <li><a href="https://www.zhihu.com/people/windknow" target="_blank">关于我</a></li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    methods: {
      aboutme () {
        window.alert('正在努力开发中!')
      }
    }
  }
</script>
<style lang="less">
  .category{
    position: absolute;
    top:20%;
    left:50%;
    width: 100%;
    height: 120px;
    text-align: left;
    padding:10px;
    color: #FFF;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    #nav {
      width: 60%;
      max-width:1000px;
      background: rgba(49, 49, 49, 0.85);
      margin: 0 auto;
      margin-top: 2em;
      border-radius: .25em;
      overflow: auto;
      ul {
        display: flex;
        align-items: stretch;
        margin: 0;
        padding: 0;
        flex-direction: row;
      }
      li {
        list-style: none;
        align-items: stretch;
        flex: 1;
        text-align: center;
        a {
          color: #cccccc;
          /*text-transform: uppercase;*/
          text-decoration: none;
          text-shadow: 0px 1px 1px #000;
          font-weight: 200;
          padding: 1em 0;
          display: block;
          border-right: 1px solid rgba(0, 0, 0, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        a:hover {
          background: rgba(34, 34, 34, 0.55);
          border-bottom: 1px solid tomato;
          font-weight:bold;
        }
      }
      li.active a {
        background: rgba(34, 34, 34, 0.55);
        border-bottom: 1px solid teal;

      }
    }
  }


</style>

<template>
  <div id="app" v-on:contextmenu="openMenu" oncontextmenu="return false;" onselectstart="return false;">
    <!-- <router-view></router-view> -->
    <right-menu></right-menu>
  </div>
</template>

<script>
import RightMenu from './components/RightMenu.vue'
  export default {
    name: 'app',
    components: {
      'right-menu': RightMenu
    },
    methods: {
      openMenu: function(e){
        var target_rect = e.currentTarget.getBoundingClientRect();
        console.log("target_rect.top = "+target_rect.top+", target_rect.left = "+target_rect.left);
        var y = target_rect.top;
        var x = target_rect.left;
        this.$emit('openMenu',e,y,x)
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    border: 2px solid #000000;
  }
</style>

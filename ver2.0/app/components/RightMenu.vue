<template>
  <div class="hello">
    <router-link to="/hello">
    <h1 ref="title" onselectstart="return false;">{{ msg }}</h1></router-link>
    <context-menu class="right-menu" 
        :target="contextMenuTarget" 
        :show="contextMenuVisible" 
        @update:show="(show) => contextMenuVisible = show">
        <a href="javascript:;" @click="copyMsg">複製</a>
        <a href="javascript:;" @click="quoteMsg">引用</a>
        <a href="javascript:;" @click="deleteMsg">削除</a>
    </context-menu>
    <button @click="buttonTapped">contextMenuTarget</button>
  </div>
</template>

<script>
import { component as VueContextMenu } from '@xunlei/vue-context-menu'
  export default {
    name: 'right-menu',
    data() {
      return {
        msg: 'Right click here to activate the menu',
        contextMenuTarget: null,
        contextMenuVisible: false,
      }
    },
    methods: {
        copyMsg () {
            alert('copy')
            this.contextMenuVisible = false
        },
        quoteMsg () {
            alert('quote')
            this.contextMenuVisible = false
        },
        deleteMsg () {
            alert('delete')
            this.contextMenuVisible = false
        },
        buttonTapped(){
			this.contextMenuTarget = this.$refs.title
			console.log("this.contextMenuTarget = ")
			console.log(this.contextMenuTarget)
           	// var rect = this.contextMenuTarget.getBoundingClientRect();
    		// console.log("contextMenuTarget.left = "+rect.left);   // x座標(絶対座標)
			// console.log("contextMenuTarget.top = "+rect.top);    // y座標(絶対座標)
			// console.log("contextMenuTarget.width = "+rect.width);  // 幅
			// console.log("contextMenuTarget.height = "+rect.height); // 高さ
        }
	},
	mounted(){
		this.contextMenuTarget = this.$refs.title
		console.log(this.$refs.title)
	},
    components: {
        'context-menu': VueContextMenu
    }
  }

</script>
<style>
body {
  height: 100%;
  font-size: 14px;
}
#app {
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #333;
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, .2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: 75px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
html,
body {
    height: 100%;
}
.right-menu {
    border: 1px solid #eee;
    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,.1);
    border-radius: 1px;
}
a {
    text-decoration: none;
}
.right-menu a {
    padding: 2px;
}
.right-menu a:hover {
    background: #42b983;
}
</style>

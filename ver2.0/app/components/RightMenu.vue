<template>
  <div class="hello">
    <router-link to="/hello">
    <h1 ref="title" onselectstart="return false;">{{ msg }}</h1></router-link>
    <context-menu class="right-menu" 
        :target="contextMenuTarget" 
        :show="contextMenuVisible" 
        @update:show="(show) => contextMenuVisible = show">
        <a href="javascript:;" @click="copyMsg" @mouseenter="rightTwoMenuHide">複製</a>
        <a href="javascript:;" @click="quoteMsg" @mouseenter="rightTwoMenuShow" ref="rightTwoMenu" id="rightTwoMenu">引用</a>
        <a href="javascript:;" @click="deleteMsg" @mouseenter="rightTwoMenuHide">削除</a>
    </context-menu>
    <div class="right-two-menu" v-bind:style="rightTwoMenuStyle">
      <context-menu class="right-menu" 
        :target="rightTwoMenuTarget" 
        :show="rightTwoMenuVisible" 
        @update:show="(show) => rightTwoMenuVisible = show">
        <a href="javascript:;" @click="copyMsg">複製</a>
        <a href="javascript:;" @click="quoteMsg">引用</a>
        <a href="javascript:;" @click="deleteMsg">削除</a>
    </context-menu>
    </div>
    <button @click="buttonTapped">contextMenuTarget</button>
  </div>
</template>

<script>
import { component as VueContextMenu } from "@xunlei/vue-context-menu";
export default {
  name: "right-menu",
  data() {
    return {
      msg: "Right click here to activate the menu",
      contextMenuTarget: null,
      contextMenuVisible: false,
      rightTwoMenuTarger: null,
      rightTwoMenuVisible: false,
      rightTwoMenuStyle: {
        top: "0px",
        left: "0px"
      }
    };
  },
  methods: {
    copyMsg() {
      alert("copy");
      this.contextMenuVisible = false;
      this.rightTwoMenuVisible = false;
    },
    quoteMsg() {
      alert("quote");
      this.contextMenuVisible = false;
      this.rightTwoMenuVisible = false;
    },
    deleteMsg() {
      alert("delete");
      this.contextMenuVisible = false;
      this.rightTwoMenuVisible = false;
    },
    buttonTapped() {
      this.contextMenuTarget = this.$refs.title;
      console.log("this.contextMenuTarget = ");
      console.log(this.contextMenuTarget);
      // var rect = this.contextMenuTarget.getBoundingClientRect();
      // console.log("contextMenuTarget.left = "+rect.left);   // x座標(絶対座標)
      // console.log("contextMenuTarget.top = "+rect.top);    // y座標(絶対座標)
      // console.log("contextMenuTarget.width = "+rect.width);  // 幅
      // console.log("contextMenuTarget.height = "+rect.height); // 高さ
    },
    rightTwoMenuHide() {
      this.rightTwoMenuVisible = false;
    },
    rightTwoMenuShow() {
      console.log(this.$refs.rightTwoMenu);
      var target_rect = this.$refs.rightTwoMenu.getBoundingClientRect();
      this.rightTwoMenuStyle.left =
        target_rect.left + this.$refs.rightTwoMenu.offsetWidth + "px";
      this.rightTwoMenuStyle.top = target_rect.top + "px";
      this.rightTwoMenuVisible = true;
    }
  },
  mounted() {
    this.contextMenuTarget = this.$refs.title;
    console.log(this.$refs.title);
    this.rightTwoMenuTarger = this.$refs.rightTwoMenu;
  },
  components: {
    "context-menu": VueContextMenu
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
body {
  height: 100%;
  font-size: 14px;
}
#app {
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
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
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: 100px;
  height: 28px;
  line-height: 28px;
  text-align: left;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
.right-menu {
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);
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
.right-two-menu {
  position: fixed;
  z-index: 999; //一番手前にする
}
.right-two-menu .right-menu a {
  width: 75px;
}
//矢印を作る
#rightTwoMenu {
  position: relative;
  display: inline-block;
}

#rightTwoMenu::before {
  content: "";
  width: 6px;
  height: 6px;
  border: 0px;
  border-top: solid 2px #5bc0de;
  border-right: solid 2px #5bc0de;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: 0px;
}
</style>

<template>
    <div id="demo">
        <h1 class="center">
        Right click anywhere to bring up a menu.
        </h1>
        <ul id="right-click-menu" tabindex="-1" v-if="viewMenu" v-on:blur="closeMenu" ref="right" v-bind:style="{top:top, left:left}">
            <li>First list item</li>
            <li>Second list item</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "rightmenu",
  data() {
    return {
      viewMenu: false,
      top: "0px",
      left: "0px"
    };
  },

  methods: {
    setMenu: function(top, left) {
      console.log("top = " + top + ", left = " + left);

      var largestHeight =
        window.innerHeight - this.$refs.right.offsetHeight - 25;
      var largestWidth = window.innerWidth - this.$refs.right.offsetWidth - 25;

      console.log(
        "this.$refs.right.offsetHeight = " + this.$refs.right.offsetHeight
      );
      console.log(
        "this.$refs.right.offsetWidth = " + this.$refs.right.offsetWidth
      );

      if (top > largestHeight) top = largestHeight;

      if (left > largestWidth) left = largestWidth;

      this.top = top + "px";
      this.left = left + "px";
      console.log("this.top = " + this.top + ", this.left = " + this.left);
    },

    closeMenu: function() {
      this.viewMenu = false;
    },

    openMenu: function(e, y, x) {
      this.viewMenu = true;
      this.$nextTick(
        function() {
          console.log(this.$refs.right);
          console.log("e.y-y = " + (e.y - y) + ", e.x-x = " + (e.x - x));
          this.$refs.right.focus();

          this.setMenu(e.y, e.x);
        }.bind(this)
      );
      e.preventDefault();
    }
  },
  created: function() {
    this.$parent.$on("openMenu", this.openMenu);
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 3em;
}

.center {
  text-align: center;
}

#demo {
  width: 100%;
  height: 100%;
}

#right-click-menu {
  background: #fafafa;
  border: 1px solid #bdbdbd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 250px;
  z-index: 999999;
}

#right-click-menu li {
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 35px;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #1e88e5;
  color: #fafafa;
}
</style>


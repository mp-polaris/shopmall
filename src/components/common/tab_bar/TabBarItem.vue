<template>
  <div class="tab-bar-item" :style="activeStyle" @click="handleClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
      path: {
          type: String,
          default: () => ''
      },
      activeColor: {
        type: String,
        default: () => 'sandybrown'
      }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
      handleClick() {
        this.isActive = true
        if(this.$route.path != this.path) {
          this.$router.push(this.path)
        }
      }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  border-right: 1px solid rgba(100, 100, 100, 0.1);
}
.item-text {
  margin-top: 0;
  font-size: 14px;
}
</style>

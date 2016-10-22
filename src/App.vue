<template>
  <div id="wrapper">
    <navi></navi>
    <router-view></router-view>
  </div>
</template>
<script>
import store from './vuex/store'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    navi: NavBar
  },
  store: store
}
</script>
<style>
.page-header{
  font-size: 24px;
  font-family: "Microsoft YaHei";
}
.mb20{
  margin-bottom: 20px;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: -5px;
}
.device {
  width: 180px;
  height: 80px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  margin: 5px;
  color: #fff;
  background-color: rgb(0,180,220);
  border-radius: 10px;
  cursor: pointer;
}
.selected {
  background-color: rgb(0,220,180);
}
.option {
  font-size: 24px;
  border-radius: 50%;
  padding: 0;
}
</style>

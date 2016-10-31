<template>
    <!--导航-->
    <div class="container">
      <div class="row">
          <div class="span6">
              <ul class="nav nav-tabs">
                  <li><a>&lt;&lt;返回</a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li class="pull-right"><a href="#" @click="logout">退出</a></li>
              </ul>
          </div>
      </div>
    </div>
</template>
<script>
import * as actions from '../vuex/actions'
import router from '../router'

export default {
  created () {
    if (this.logininfo) {
    }
  },
  computed: {
    info: {
      get () {
        return this.userinfo
      }
    }
  },
  data () {
    return {
      disabled: false,
      errormsg: ''
    }
  },
  methods: {
    logout () {
      this.PostLogout()
      router.go('/')
    },
    back () {
      router.back()
    }
  },
  vuex: {
    getters: {
      userinfo: state => state.userinfo,
      logininfo: state => state.logininfo
    },
    actions: actions
  }
}
</script>
<style>
.navbar-brand {
  font-family: "Microsoft YaHei"
}
</style>

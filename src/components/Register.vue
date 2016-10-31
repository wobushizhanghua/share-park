<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="login-panel panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">易停车注册</h3>
        </div>
        <div class="panel-body">
          <div class="alert alert-danger" v-if="errormsg">
            <p>{{ errormsg }}</p>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="手机号" type="number" autofocus v-model="info.phone">
          </div>
          <div class="form-group">
            <label>密码</label>
            <input class="form-control" placeholder="密码" type="password" v-model="info.pwd">
          </div>
          <div class="form-group">
            <label>确认密码</label>
            <input class="form-control" placeholder="确认密码" type="password" v-model="info.cfm_pwd">
          </div>
          <div class="form-group">
            <label>您的身份</label>
            <select class="form-control" v-model="info.job" number>
              <option value="1">车主</option>
              <option value="2">车位主</option>
              <option value="3">小区管理员</option>
            </select>
          </div>
          <div class="form-group" v-if="info.job == 1">
            <label>您车牌号</label>
            <input class="form-control" placeholder="车牌号" v-model="info.license">
          </div>
          <button class="btn btn-lg btn-success btn-block" @click="register" :disabled="disabled">注册</button>
        </div>
      </div>
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
    register () {
      var vm = this
      this.disabled = true
      this.PostRegister().then(({success, errormsg}) => {
        vm.disabled = false
        if (success) {
          console.log(this.userinfo)
          if (this.userinfo.job === 1) {
            router.go('park/list')
          } else if (this.userinfo.job === 2) {
            router.go('park/show')
          } else {
            router.go('park/manager')
          }
        } else {
          vm.errormsg = errormsg
        }
      })
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

<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="login-panel panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">易停车登录</h3>
        </div>
        <div class="panel-body">
          <div class="alert alert-danger" v-if="errormsg">
            <p>{{ errormsg }}</p>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="手机号" type="number" autofocus v-model="info.phone">
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="密码" type="password" v-model="info.pwd">
          </div>
          <button class="btn btn-lg btn-success btn-block" @click="login" :disabled="disabled">登录</button>
          <button class="btn btn-lg btn-success btn-block" @click="register" :disabled="disabled">注册</button>
        </div>
      </div>
    </div>
  </div>
</div>
<modal-job v-ref:job_modal></modal-job>
</template>
<script>
import * as actions from '../vuex/actions'
import router from '../router'
import ModalJob from '../components/ModalJob.vue'
import apputil from '../apputil'

export default {
  components: {
    ModalJob: ModalJob
  },
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
      errormsg: '',
      show_modal: false
    }
  },
  methods: {
    async login () {
      try {
        this.disabled = true
        var {success, errormsg, code} = await this.PostLogin()
        this.disabled = false

        if (success) {
          apputil.login_sucess()
        } else if (code === -1) {
          await this.$refs.job_modal.show()
          await this.PostJob()
          apputil.login_sucess()
        } else {
          this.errormsg = errormsg
        }
      } catch (e) {

      }
    },
    register () {
      router.go('register')
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

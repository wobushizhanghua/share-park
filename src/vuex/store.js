
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userinfo: {
    phone: null,
    pwd: null,
    job: 1
  },
  logininfo: null,
  errormsg: ''
}

const mutations = {
  set_errormsg (state, msg) {
    state.errormsg = msg
  },
  set_logininfo (state, info) {
    state.logininfo = info
    localStorage.setItem('logininfo', JSON.stringify(info))
  },
  set_job (state, job) {
    state.userinfo.job = job
  },
  rm_logininfo (state) {
    state.logininfo = null
    localStorage.removeItem('logininfo')
  },
  to_storage (state) {
    localStorage.setItem('logininfo', JSON.stringify(state.logininfo))
    localStorage.setItem('userinfo', JSON.stringify(state.userinfo))
  },
  rm_storage (state) {
    localStorage.removeItem('userinfo')
    localStorage.removeItem('logininfo')
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

var localinfo = localStorage.getItem('logininfo')
if (localinfo) {
  try {
    store.dispatch('set_logininfo', JSON.parse(localinfo))
  } catch (e) {
    console.log('解析json 格式错误')
  }
}
export default store

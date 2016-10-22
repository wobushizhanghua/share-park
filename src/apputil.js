import store from './vuex/store'
import router from './router'

export default {
  login_sucess () {
    switch (store.state.userinfo.job) {
      case 1: router.go('/park/list'); break
      case 2: router.go('/part/show'); break
      case 3: router.go('/park/manager'); break
    }
  }
}

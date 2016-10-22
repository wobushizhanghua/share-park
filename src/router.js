import Vue from 'vue'
import AgentInfo from './components/AgentInfo.vue'
import NewDevice from './components/NewDevice.vue'
import Devices from './components/Devices.vue'
import DevicesStatus from './components/DevicesStatus.vue'
import NewAgent from './components/NewAgent.vue'
import Agents from './components/Agents.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ParkList from './components/ParkList.vue'
import ParkShow from './components/ParkShow.vue'
import ParkManager from './components/ParkManager.vue'
// import store from './vuex/store'
import Router from 'vue-router'
Vue.use(Router)

var router = new Router()

router.map({
  '/': {
    name: 'login',
    component: Login
  },
  '/register': {
    name: 'register',
    component: Register
  },
  '/park/list': {
    name: 'parklist',
    component: ParkList
  },
  '/park/show': {
    name: 'parkshow',
    component: ParkShow
  },
  '/park/manager': {
    name: 'parkmanager',
    component: ParkManager
  },
  '/devices/new': {
    component: NewDevice
  },
  '/devices/status': {
    component: DevicesStatus
  },
  '/devices/list/:id': {
    name: 'devices',
    component: Devices
  },
  '/agents/new': {
    name: 'newagent',
    component: NewAgent
  },
  '/agents/list': {
    component: Agents
  },
  '/agent/detail/:id': {
    name: 'agentinfo',
    component: AgentInfo
  }
})
router.redirect({
  '*': '/'
})
// router.beforeEach(function (transition) {
//   console.log(transition)
//   if (store.state.logininfo) {
//     transition.next()
//   } else {
//     transition.next()
//     router.go('login')
//   }
// })
export default router

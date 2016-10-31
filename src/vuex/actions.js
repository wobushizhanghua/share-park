import config from '../config'
import util from '../util'
import AV from 'leancloud-storage'

AV.init({
  appId: config.lean_appid,
  appKey: config.lean_appkey
})

var Usercls = AV.Object.extend('user')
var Parkcls = AV.Object.extend('park')

const api = config.api

export const PostRegister = ({ dispatch, state }) => {
  return util.zpost(api.register, {
    appkey: config.appkey,
    phone: state.userinfo.phone,
    password: state.userinfo.pwd,
    confirm_password: state.userinfo.cfm_pwd,
    captcha: 8888
  })
    .then((response) => {
      dispatch('set_logininfo', response)
      dispatch('set_errormsg', '注册')
      dispatch('to_storage')

      var user = new Usercls()
      user.set('job', state.userinfo.job)
      user.set('account_id', response.account_id)

      return user.save().then(function (resp) {
        return { success: true, errormsg: '注册成功' }
      })
    },
    (response) => {
      return { success: false, errormsg: response.msg }
    })
}

export const PostJob = ({dispatch, state}) => {
  var user = new Usercls()
  try {
    user.set('job', state.userinfo.job)
    user.set('account_id', state.logininfo.account_id)
  } catch (e) {
    console.log(e)
  }

  return user.save().then(function (resp) {
    return { success: true, errormsg: '注册成功' }
  })
}

export const PostAddPark = async ({dispatch, state}, parkinfo) => {
  try {
    var user = new Parkcls()
    user.set('account_id', state.logininfo.account_id)
    user.set('name', parkinfo.name)
    user.set('addr', parkinfo.addr)
    var resp = await user.save()
    console.log(resp)
    return true
  } catch (e) {
    console.log('PostPark Error', e)
    return false
  }
}

export const PostLogin = async ({ dispatch, state }) => {
  try {
    var response = await util.zpost(api.login, {
      appkey: config.appkey,
      phone: state.userinfo.phone,
      password: state.userinfo.pwd
    })
  } catch (e) {
    return { success: false, errormsg: e.msg }
  }

  dispatch('set_logininfo', response)

  try {
    var query = new AV.Query(Usercls)
    query.equalTo('account_id', response.account_id)
    var result = await query.find()
    if (!result[0]) {
      return { success: false, errormsg: '当前帐号未绑定职业', code: -1 }
    }
  } catch (e) {
    return { success: false, errormsg: '获取用户信息出错，请重试' }
  }

  return { success: true }
}

export const PostLogout = ({ dispatch, state }) => {
  dispatch('rm_logininfo')
  dispatch('rm_storage')
}

export const GetParkList = async ({ dispatch, state }) => {
  try {
    var query = new AV.Query(Parkcls)
    query.equalTo('account_id', state.logininfo.account_id)
    return await query.find()
  } catch (e) {
    console.log(e)
    return null
  }
}

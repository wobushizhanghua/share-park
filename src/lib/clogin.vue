<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="login-panel panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{ title }}</h3>
        </div>
        <div class="panel-body">
          <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="手机号" type="number" autofocus v-model="username">
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="密码" type="password" v-model="pwd">
          </div>
          <button class="btn btn-lg btn-success btn-block" @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "clogin",
  data: {
    title,
    error,
    username,
    pwd
  },
  computed: {
    info: {
      get () {
        return this.userinfo
      }
    }
  },
}
</script>

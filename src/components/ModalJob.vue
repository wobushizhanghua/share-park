<template>
	<div class="modal fade in" style="display:{{is_show? 'block' : 'none'}}" role="dialog" id="myModal" tabindex="-1" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="myModalLabel">登录成功</h4>
          <h4>你还没有设置身份，请设置身份</h4>
				</div>
				<div class="modal-body">
          <div class="form-group">
            <label>您的身份</label>
            <select class="form-control" v-model="info.job">
              <option value="1">车主</option>
              <option value="2">车位主</option>
              <option value="3">小区管理员</option>
            </select>
          </div>
          <div class="form-group" v-if="info.job == 1">
            <label>您车牌号</label>
            <input class="form-control" placeholder="车牌号" v-model="info.license">
          </div>
				</div>
				<div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="done">确定</button>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    done () {
      this.is_show = false
      this.resolve()
    },
    show () {
      var vm = this
      this.is_show = true
      return new Promise((resolve, reject) => {
        vm.resolve = resolve
      })
    }
  },
  data () {
    return {
      is_show: false
    }
  },
  vuex: {
    getters: {
      info: state => state.userinfo,
      logininfo: state => state.logininfo
    }
  }
}
</script>

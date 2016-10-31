<template>
	<div class="modal fade in" style="display:{{is_show? 'block' : 'none'}}" role="dialog" id="myModal" tabindex="-1" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="myModalLabel">添加小区信息</h4>
				</div>
				<div class="modal-body">
          <div class="form-group">
            <label>小区名称</label>
            <input class="form-control" placeholder="小区名称" v-model="parkinfo.name">
          </div>
          <div class="form-group">
            <label>地址</label>
            <input class="form-control" placeholder="地址" v-model="parkinfo.addr">
          </div>				</div>
				<div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="done">确定</button>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import * as actions from '../vuex/actions'
export default {
  methods: {
    async done () {
      var resp = await this.PostAddPark(this.parkinfo)
      console.log(resp)
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
      is_show: false,
      parkinfo: {
        name: '',
        addr: ''
      }
    }
  },
  vuex: {
    actions: actions
  }
}
</script>

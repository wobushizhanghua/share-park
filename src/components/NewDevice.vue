<template>
  <div id="page-wrapper">
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">入库设备</h1>
    </div>
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">设备SN</h3>
        </div>
        <div class="panel-body">
          <div class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-12">
                <textarea class="form-control" v-model="devices" rows="10" placeholder="1行1个设备SN，以换行为分隔"></textarea>
                <p class="help-block">添加设备数量：{{ devicesSplit.length }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <div class="row">
            <div class="col-lg-12">
              <button class="btn btn-primary btn-lg" @click="saveDevice($index)">确定</button>
              <button class="btn btn-default btn-lg">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      devices: ''
    }
  },
  methods: {
    saveDevice (index) {
      const vm = this
      let flag = true
      for (let i in vm.devicesSplit) {
        if (vm.devicesSplit[i].length !== 14) {
          flag = false
          window.alert('设备SN存在错误，请检查修改')
          return
        }
      }
      if (flag) {
        console.log('submit!')
      }
    }
  },
  computed: {
    devicesSplit () {
      this.devices = this.devices.toUpperCase()
      return this.devices.split('\n')
    }
  }
}
</script>

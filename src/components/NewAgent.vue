<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">添加代理商</h1>
      </div>
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">代理商基本信息</h3>
          </div>
          <div class="panel-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>代理商名称：</label>
                    <input type="text" class="form-control" :value="agent.name">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>代理商地址：</label>
                    <input type="text" class="form-control" :value="agent.address">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>联系人：</label>
                    <input type="text" class="form-control" :value="agent.people.name">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>联系电话：</label>
                    <input type="text" class="form-control" :value="agent.people.phone">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>代理账户：</label>
                    <input type="text" class="form-control" :value="agent.admin.username">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>初始密码：</label>
                    <input type="text" class="form-control" :value="agent.admin.password">
                  </div>
                </div>
              </div>
              <div class="row mb20">
                <div class="col-lg-12">
                  <label>库存可分配</label>
                  <div class="flexbox p20">
                   <div class="device" v-for="device in store.devices" @click="toAgent($index)">
                     {{ device.sn }}
                     <span class="option">+</span>
                   </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <label>已分配</label>
                  <div class="flexbox p20">
                   <div class="device selected" v-for="device in agent.devices" @click="toStore($index)">
                     {{ device.sn }}
                     <span class="option">-</span>
                   </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="col-lg-12">
                <button class="btn btn-primary btn-lg">确定</button>
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
  methods: {
    toAgent (index) {
      this.agent.devices.push(this.store.devices[index])
      this.store.devices.splice(index, 1)
    },
    toStore (index) {
      this.store.devices.push(this.agent.devices[index])
      this.agent.devices.splice(index, 1)
    }
  },
  data () {
    return {
      agent: {
        name: '',
        address: '',
        people: {
          name: '',
          phone: ''
        },
        admin: {
          username: '',
          password: ''
        },
        devices: []
      },
      store: {
        devices: [{
          sn: 'LHFH1GMA550001'
        }, {
          sn: 'LHFH1GMA550002'
        }, {
          sn: 'LHFH1GMA550003'
        }, {
          sn: 'LHFH1GMA550004'
        }, {
          sn: 'LHFH1GMA550005'
        }, {
          sn: 'LHFH1GMA550006'
        }, {
          sn: 'LHFH1GMA550007'
        }, {
          sn: 'LHFH1GMA550008'
        }, {
          sn: 'LHFH1GMA550009'
        }, {
          sn: 'LHFH1GMA550010'
        }, {
          sn: 'LHFH1GMA550011'
        }, {
          sn: 'LHFH1GMA550012'
        }]
      }
    }
  }
}
</script>

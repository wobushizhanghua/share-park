<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">{{ agent.name }} 信息修改</h1>
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
                    <input type="text" class="form-control" :value="agent.name" :disabled="disabled">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>代理商地址：</label>
                    <input type="text" class="form-control" :value="agent.address" :disabled="disabled">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>联系人：</label>
                    <input type="text" class="form-control" :value="agent.people.name" :disabled="disabled">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>联系电话：</label>
                    <input type="text" class="form-control" :value="agent.people.phone" :disabled="disabled">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>代理账户：</label>
                    <input type="text" class="form-control" :value="agent.admin.username" :disabled="disabled">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>初始密码：</label>
                    <input type="password" class="form-control" :value="agent.admin.password" :disabled="disabled">
                  </div>
                </div>
              </div>
              <div class="row mb20" v-if="disabled === false">
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
                  <div class="flexbox p20" v-if="disabled === true">
                     <div class="device selected" v-for="device in agent.devices">
                     {{ device.sn }}
                   </div>
                  </div>
                  <div class="flexbox p20" v-if="disabled === false">
                   <div class="device selected" v-for="device in agent.devices" @click="toStore($index)" >
                     {{ device.sn }}
                     <span class="option">-</span>
                   </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <label>运行状态</label>
                  <select class="form-control" v-model="agent.status" :disabled="disabled">
                    <option v-for="option in agent.options" :value="option.value">{{ option.text }}</option>
                  </select>
                </div>
              </div>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="col-lg-12">
                <button class="btn btn-primary btn-lg" v-if="disabled===false">确定</button>
                <button class="btn btn-primary btn-lg" v-if="disabled===true" @click="changeStatus">修改</button>
                <button class="btn btn-default btn-lg" v-if="disabled===false" @click="changeStatus">取消</button>
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
    changeStatus () {
      if (this.disabled === false) {
        this.disabled = true
      } else {
        this.disabled = false
      }
    },
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
      disabled: true,
      store: {
        devices: [{
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
      },
      agent: {
        id: 1,
        name: '柏橙医疗',
        address: '江苏省南京市白下路242号',
        status: 'open',
        people: {
          name: '陈停龙',
          phone: '1352023367'
        },
        admin: {
          username: '1352023367',
          password: '123456'
        },
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
        }],
        options: [{
          text: '运营中',
          value: 'open'
        }, {
          text: '停运',
          value: 'close'
        }]
      }
    }
  }
}
</script>

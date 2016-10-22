<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">{{ agent.name }}设备明细</h1>
      </div>
    </div>
    <p class="alert alert-info" v-if="agent.devices.length === 0">该机构无设备</p>
    <div class="flexbox p20" v-if="agent.devices.length > 0">
       <div class="device" v-for="device in agent.devices" >
         {{ device.sn }}
       </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'devices',
  data () {
    return {
      agent: {
        id: 1,
        name: '柏橙医疗',
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

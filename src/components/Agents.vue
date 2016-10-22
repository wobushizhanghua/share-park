<template>
  <div id="page-wrapper">
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">代理商</h1>
    </div>
  </div>
    <div class="row">
      <div class="col-lg-4" v-for="agent in agents">
        <div class="panel">
          <div :class="['panel', agent.status === 'open' ? 'panel-success' : 'panel-default']">
            <div class="panel-heading">
              <h3 class="panel-title">{{ agent.name }}</h3>
            </div>
            <div class="panel-body">
              <p class="col-sm-6">设备数：{{ agent.devices.count}}</p>
              <p class="col-sm-6">状态：<span v-if="agent.status==='open'" class="text-success">运营中</span><span v-if="agent.status==='close'" class="text-danger">停运</span></p>
            </div>
            <div class="panel-footer" v-link="{ name:'agentinfo', params:{id: agent.id} }">
              详细信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'agents',
  data () {
    return {
      agents: [{
        id: 0,
        name: '柏橙医疗',
        status: 'open',
        devices: {
          count: 2
        }
      }, {
        id: 1,
        name: '杭州灵孩儿',
        status: 'open',
        devices: {
          count: 2
        }
      }, {
        id: 1,
        name: '张星屿',
        status: 'close',
        devices: {
          count: 2
        }
      }]
    }
  }
}
</script>

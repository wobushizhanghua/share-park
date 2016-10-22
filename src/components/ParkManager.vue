<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-4" v-for="store in stores">
        <div :class="['panel', store.id===0 ? 'panel-info' : 'panel-success']">
          <div class="panel-heading">
            <h3 class="panel-title">{{ store.name }}</h3>
          </div>
          <div class="panel-body">
            {{ store.count }}
          </div>
          <div class="panel-footer" v-link="{ name:'devices', params:{id: store.id} }">
            设备明细
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
      stores: [{
        id: 0,
        name: '库存',
        count: 32
      }, {
        id: 1,
        name: '南京红十字医院',
        count: 2
      }, {
        id: 2,
        name: '扬子医院',
        count: 2
      }]
    }
  }
}
</script>


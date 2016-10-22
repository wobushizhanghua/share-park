<template>
  <div id="page-wrapper">
    <!--导航-->
    <div class="container">
      <div class="row">
          <div class="span6">
              <ul class="nav nav-tabs">
                  <li><a href="#"><<返回</a></li>
                  <li><a href="#">Practice Editor </a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">退出</a></li>
              </ul>
          </div>
      </div>
    </div>
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


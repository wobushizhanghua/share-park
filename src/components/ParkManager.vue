<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="form-group">
        <label>当前状态：</label>
        <button class="btn btn-lg btn-success" @click="AddPark">添加我的小区</button>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4" v-for="park in parklist">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">我的小区</h3>
          </div>
          <div class="panel-body">
            名称：{{park.attributes.name}}
          </div>
                    <div class="panel-body">
            名称：{{park.attributes.name}}
          </div>
          <div class="panel-footer">
            地址：{{park.attributes.addr}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-add-park v-ref:m-add-park></modal-add-park>
</template>
<script>
import ModalAddPark from './ModalAddPark'
import * as actions from '../vuex/actions'

export default {
  components: {
    ModalAddPark: ModalAddPark
  },
  async created () {
    this.parklist = await this.GetParkList()
    console.log('parklist:', this.parklist)
  },
  methods: {
    async AddPark () {
      await this.$refs.mAddPark.show()
      this.parklist = await this.GetParkList()
    }
  },
  data () {
    return {
      parklist: []
    }
  },
  vuex: {
    actions: actions
  }
}
</script>


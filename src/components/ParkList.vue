<template>
	<div id="page-wrapper">
		<div class="row">
			<h3>所有小区列表</h3>
		</div>
		<div class="row">
			<div class="col-lg-4" v-for="park in parklist">
				<div class="panel panel-info">
					<div class="panel-heading">
						名称：{{park.attributes.name}}
					</div>
					<div class="panel-body">
						地址：{{park.attributes.addr}}
					</div>
					<div class="panel-footer">
            <button class="btn btn-primary" @click="upload($index)">上传车位信息</button>
					</div>
				</div>
			</div>
		</div>

    <div class="row">
			<h3>我的车位</h3>
		</div>
		<div class="row">
			<div class="col-lg-4" v-for="park in parklist">
				<div class="panel panel-info">
					<div class="panel-heading">
						名称：{{park.attributes.name}}
					</div>
					<div class="panel-body">
						地址：{{park.attributes.addr}}
					</div>
					<div class="panel-footer">
            <button class="btn btn-primary" @click="upload($index)">上传车位信息</button>
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

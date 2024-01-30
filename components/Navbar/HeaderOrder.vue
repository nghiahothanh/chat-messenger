<template>
	<div>
		<div>
			<div class="NewHeader-module__title">
				<navbar-order />
			</div>
			<div class="NewHeader-module__filters">
				<v-tabs v-for="(status, index) in dataCatalog" :key="index" v-model="tab" class="text-btn" :transition="false">
					<v-tab v-for=" (name , value ) in status.Status" :key="value" class="rounded">
						{{ value }} {{ name }}
					</v-tab>
				</v-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"NavbarHeader",
	props:{
		dataCatalog:{
			type:String,
			required:true
		}
	},
	data: () => ({
		tab: null
		

	})
};
</script>

<style lang="scss" scoped>
.heading_oder {
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  color: #1e2732;
  letter-spacing: normal;
  font-style: normal;
  font-weight: 600;
  padding: 12px 0 0px;
}
.NewHeader-module__title,
.NewHeader-module__filters {
  display: flex;
  width: 100%;
  padding: 14px 32px;
  border-bottom: 1px solid rgba(30, 39, 50, 0.12);
  align-items: center;
  color: #485c66;
}
.NewHeader-module__filters button {
  margin-right: 10px;
  height: 32px;
  padding: 4px 8px;
  display: inline-flex;
  background-color: rgba(30, 39, 50, 0.04);
}
.NewHeader-module__filters span {
  cursor: pointer;
  font-family: inherit;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
.NewHeader-module__filters .v-tab--selected {
  background-color: rgba(30, 39, 50, 0.7);
  color: #fff;
  border: none;
}
.btn span.v-btn__content {
  text-transform: initial !important;
}
</style>
<template>
	<div class="NewHeader-module__title">
		<h1 class="heading_oder">
			Order items
		</h1>
		<v-text-field
			v-model="search"
			clearable
			density="compact"
			hide-details
			placeholder="Search"
			prepend-inner-icon="mdi-magnify"
			style="max-width: 280px; height: 28px; margin-left: auto"
			variant="outlined"
		/>
	</div>
</template>

<script>
export default {
	name:"NavbarSearch",
	
	data() {
		return {
			search:[]
		};
	}
};
</script>

<style scoped>

.NewHeader-module__title {
  display: flex;
  width: 100%;
  padding: 14px 32px;
  border-bottom: 1px solid rgba(30, 39, 50, 0.12);
  align-items: center;
  color: #485c66;

}

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

</style>
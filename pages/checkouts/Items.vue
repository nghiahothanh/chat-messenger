<template>
	<div>
		<CheckoutSidebar />
		<NavbarSearch />
		
		<NavbarHeaderItem />
		<v-checkbox label="0 selected" />
  
		<MainContentAsset title="This is where you will see your 3D modeling requests" content="Start by requesting a quote for the items you want to be 3D modeled." button-text="Request" />
		<SupportMessenger />
	</div>
</template>
  
  
<script>
  
export default {
	name:"PageItem",
	data() {


		return {};
	}
};
  
</script>
  
  <style scoped>
  
  </style>
<template>
	<v-container>
		<div>
			<CheckoutSidebar />
			<stepper-CheckoutStepper />
			<MainContentProduct />
			<Table />
		</div>
		<Table-Footer />
		<chatMessenger/>
		<SupportMessenger />
	</v-container>
</template>
<script>
export default {
	name: "IndexCheckouts",
	data() {
		return {
		
		};
	},
	
	methods: {

	}
};
</script>
<style scoped>

</style>
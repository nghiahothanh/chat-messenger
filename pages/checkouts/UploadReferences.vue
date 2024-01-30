<template>
	<div class="main_container">
		<CheckoutSidebar />
		<navbar-Order />
		<!-- Stepper Header -->
		<stepper-CheckoutStepper complete />
		<UpLoadProduct />
	</div>
</template>

<script>
export default {
	data() {
		return {
			stepTwo:true
		};
	}
};
</script>

<style scoped>
/* Notice */

</style>
<template>
	<div class="main_container">
		<CheckoutSidebar />
		<navbar-Order />
		<!-- Stepper Header -->
		<stepper-CheckoutStepper complete complete3 />
		<div class="d-flex">
			<CardPreview />
			<CardOrderSummaryCard />
		</div>
	</div>
</template>
<script>
export default {
	name:"RequestTestimatePage",
	data() {


		return {};
	}
};
</script>


<style scoped>



</style>
<template>
	<div>
		<v-card class="notice-outline rounded-lg d-flex align-center pa-2">
			<div class="notice__icon">
				<v-icon color="#007aff">
					mdi-alert-circle-outline
				</v-icon>
			</div>
			<v-card-text>
				To continue with your order, please provide a <b>Product URL</b> that
				contains a title, images, and dimensions, or manually fill out the
				fields below.
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	name:"CardUploadReferCard"
};
</script>

<style lang="scss" scoped>

</style>
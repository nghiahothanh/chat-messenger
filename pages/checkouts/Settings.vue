<template>
	<div class="px-8 py-10">
		<CheckoutSidebar />
		<!-- Form members -->
		<CardMember />
		<!-- Form Workspaces -->
		<CardWorkspace />
		<!-- Form API Token -->
		<CardGenerateToken />
	</div>
	<!-- Mess -->
	<SupportMessenger />
</template>

<script>
export default {
	name:"SettingPage",
	data() {


		return {};
	}
};
</script>

<style scoped>



</style>
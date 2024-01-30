<template>
	<div class="navbar_container d-flex align-center justify-space-between">
		<div class="d-flex align-center py-4">
			<v-btn variant="outlined" prepend-icon="mdi-arrow-left" to="/checkouts" />
			<h3 class="ml-6">
				Order {{ orderValue }}
			</h3>
		</div>
		<div class="dropdown d-flex align-center">
			<v-btn class="ml-3" variant="outlined" prepend-icon="mdi-dots-horizontal" />
		</div>
	</div>
</template>

<script>
export default {
	name: "NavbarOrder",
	methods: {
		BackHistory() {
			window.history.back();
		}
	}
};
</script>

<style scoped>
.navbar_container {
    border-bottom: 1px solid rgba(30, 39, 50, 0.12);
    background-color: #fff;
    width: 100%;
    padding: 0 24px;
    height: 68px;
}

.dropdown {
    border-left: 1px solid rgba(30, 39, 50, 0.12);
    position: relative;
    height: 100%;
}
</style>
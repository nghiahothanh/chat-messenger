<template>
	<div>
		<div class="d-flex  justify-space-between mx-8">
			<div class="d-flex align-center ">
				<label class="text-grey-lighten-1" for="">Per page:</label>
				<v-select
					class="mx-2 EmptyList-select"
					label="10"
					:items="['10', '20', '50', '100']"
					variant="outlined"
				/>
				<span class="text-grey-lighten-1">1 - 0 of 0 items</span>
			</div>
			<div class="d-flex align-center">
				<span class="text-grey-lighten-1">Page</span>
				<div class="w-auto">
					<v-select
						class="mx-2 EmptyList-select"
						label="Select"
						:items="['']"
						variant="outlined"
					/>
				</div>
				<span class="text-grey-lighten-1">of 0</span>
				<v-pagination
					style="cursor: pointer;"
					variant="outlined"
					:length="0"
					prev-icon="mdi-arrow-left"
					next-icon="mdi-arrow-right"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"PaginationPage",
	data() {


		return {};
	}
};
</script>

<style lang="scss" scoped>

</style>
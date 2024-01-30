<template>
	<div>
		<div class="NewHeader-module__filters">
			<div class="d-flex align-center mx-2 text-grey-lighten-1" style="max-height: 20px;">
				<v-checkbox class="mt-5" disabled />
				<v-divider vertical :thickness="2" class="mx-2" />
				<span>0 selected</span>
				<v-divider vertical :thickness="2" />
			</div>
			<div>
				<v-btn
					v-for="(b, index) in isbutton"
					:key="index"
					:class="{ 'active-btn': index === 0, 'inactive-btn': index !== 0 }"
					variant="outlined"
					:style="{
						border: '1px solid rgba(30,39,50,.12)',
						backgroundColor: 'transparent',
						color: 'rgba(30,39,50,.8)',
						cursor: index === 0 ? 'pointer' : 'not-allowed'
					}"
					@click="index === 0 ? handleBtnClick(b) : null"
				>
					<v-icon>{{ b.icon }}</v-icon>{{ b.name }}
					<v-tooltip
						activator="parent"
						location="top"
						style="border-radius: 0;"
					>
						{{ b.tooltip }}
					</v-tooltip>
				</v-btn>
			</div>
			<v-select
				variant="underlined"
				:items="items"
				label="Sort by:"
				style=" max-width: 180px; margin-left: auto;"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name:"NavbarHeaderAsset",
	data: () => ({
		search: "",
		items: ["New first", "Old first", "Title A-Z", "SKU", "Batch ID"],
		isbutton: [
			{ name: "Upload files", icon: "mdi-upload", tooltip: "Upload files" },
			{ name: "Download files", icon: "mdi-download", tooltip: "Download all select" },
			{ name: "Export data", icon: "mdi-file-export", tooltip: "Export product data as scv" },
			{ name: "Order Services", icon: "mdi-plus-circle", tooltip: "Add Order Services" },
			{ name: "Delete", icon: "mdi-delete", tooltip: "Delete all select" }
		]
	})
};
</script>

<style lang="scss" scoped>
.NewHeader-module__title,
  .NewHeader-module__filters {
    display: flex;
    width: 100%;
    padding: 14px 32px;
    align-items: center;
    color: #485c66;
  }
  .NewHeader-module__filters span {
    margin-right: 10px;
  }
  .NewHeader-module__filters button {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 10px;
    height: 24px;
    padding: 4px;
    display: inline-flex;
    background-color: rgba(30, 39, 50, 0.04);
  }
</style>
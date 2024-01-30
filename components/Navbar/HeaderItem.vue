<template>
	<div>
		<div>
			<v-row cols="12">
				<v-col cols="6">
					<v-row cols="12" class="pt-6">
						<v-tabs v-model="tab" selected-class="tab_selected">
							<v-tab :value="1">
								Ready for review 0
							</v-tab>
							<v-tab :value="2">
								In progress 0
							</v-tab>
							<v-tab :value="3">
								Finished 0
							</v-tab>
							<v-tab :value="4">
								All 0
							</v-tab>
						</v-tabs>
					</v-row>
					<v-row cols="12">
						<v-list class="d-flex">
							<v-list-item v-for="(item, index) in favorites " :key="item">
								<v-chip v-if="chip" class="ma-2" closable @click:close="CloseItem($event, index)">
									{{ item }}
								</v-chip>
							</v-list-item>
						</v-list>
					</v-row>
				</v-col>
			 
				<v-col cols="2" class="pt-7">
					<v-select
						v-model="selectedView"
						clearable
						:items="viewOptions"
						label="Status"
						multiple
						persistent-hint
						@update:model-value="updateQuery"
					/>
				</v-col>
				<v-col cols="2" class="pt-7">
					<v-select
						v-model="favorites"
						:items="percents"
						label="Select"
						multiple
						@update:model-value="updateQuery"
					/>
				</v-col>
				<v-col cols="2" class="pt-7">
					<v-select
						v-model="modelType"
						:items="viewModelType"
						label="Model Type"
						multiple
						persistent-hint
						@update:model-value="updateQuery"
					/>
				</v-col>
			</v-row>
			<v-divider />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const tab = ref([]);
const router = useRouter();
const favorites = ref([]);
const chip = ref(true);
const percents = ["Low-poly", "High-poly", "Rendering"];

const selectedView = ref([]);
const viewOptions = ["Ready For Review", "Some Other View"];
const modelType = ref([]);
const viewModelType = ["Main model", "Variations"];
const updateQuery = () => {
	try {
		console.log(selectedView.value);


		const queryValue = `${selectedView.value}+${favorites.value}+${modelType.value}`;


		router.push({ query: { view: "Ready For Review", query: queryValue }});
		console.log(router.fullPath);
	} catch (error) {

		console.error("Error while updating query:", error);
	}
};
const CloseItem = (event, index) => {
	console.log(index);
	chip.value = false;
	favorites.value.splice(index, 1);
	console.log(favorites.value);
	chip.value = true;
	updateQuery();
};

</script>

<style lang="scss" scoped>
.tab_selected {
	background-color: rgba(30, 39, 50, 0.7);
	color: #fff;
	border: none;
}
</style>
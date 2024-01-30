<template>
	<!-- Stepper Header -->
	<div class="CheckoutsNew_header">
		<v-stepper class="elevation-0">
			<v-stepper-header>
				<v-stepper-item
					:complete="complete"
					title="Select a service"
					value="1"
					class="step_bar"
				/>
				<v-stepper-item
					:complete="complete"
					title="Upload References"
					value="2"
					class="step_bar"
				/>
				<v-stepper-item
					:complete="complete3"
					class="step_bar"
					title="Review & Request Estimate"
					value="3"
				/>
			</v-stepper-header>
		</v-stepper>
	</div>
</template>

<script>
export default {
	props: {
		complete: {
			type: Boolean,
			default: false
		},
		complete3: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			
		};
	}
};
</script>

<style scoped>
.CheckoutsNew_header {
  padding: 12px 0;
  margin-bottom: 20px;
  font-size: 12px;
}
.v-stepper.v-sheet {
    border-radius: 0px !important;
}
.step_bar.v-stepper-item--selected,
.step_bar.v-stepper-item--complete {
  border-top: 4px solid #19bcc9;
}
.v-stepper-item.v-stepper-item--complete{
    opacity: 1;
}

</style>
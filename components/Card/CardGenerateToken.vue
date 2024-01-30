<template>
	<div>
		<v-sheet class="settings_main" :elevation="1">
			<div class="mt-2 pa-12">
				<div class="d-flex justify-space-between mb-6">
					<h3>API Token</h3>
					<v-btn
						:class="{ 'buttonPrimary': !generatedToken }"
						prepend-icon="mdi-database-outline"
						variant="outlined"
						@click="generateNewToken"
					>
						Generate New Token
					</v-btn>
				</div>
				<v-row no-gutters class="pb-4 align-center justify-space-between">
					<v-col style="max-width: 20%; margin-left: 20px">
						<p>Workspace Name</p>
						<input id="workspace-id" type="text" readonly value="11486">
					</v-col>
					<v-col style="max-width: 60%; margin-left: 20px">
						<p>API Token</p>
						<input
							id="workspace-id"
							type="text"
							readonly
							:value="generatedToken"
							placeholder="Generated API token"
						>
					</v-col>
					<v-btn
						class="mt-6 ml-4"
						variant="outlined"
						:class="{ 'buttonPrimary': generatedToken }"
						:disabled="!generatedToken"
						@click="CopyToken = true"
					>
						Copy Token
					</v-btn>
					<!-- Event click Copy Token -->
					<v-snackbar v-model="CopyToken">
						API Token is copied!
						<template #actions>
							<v-icon @click="CopyToken = false">
								mdi-close
							</v-icon>
						</template>
					</v-snackbar>
				</v-row>
				<v-divider />
				<div class="mt-2">
					<a style="color: #19bcc9" target="_bank">
						<v-icon color="#19bcc9">mdi-database-outline</v-icon> API
						Documentation</a>
				</div>
			</div>
		</v-sheet>
	</div>
</template>

<script>
export default {
	name:"CardCardGenerateToken",
	data(){
		return {
			isButtonPrimary: true,
			generatedToken: "",
			CopyToken: false
		};
	},
	methods: {
		generateNewToken() {
			const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			let token = "";

			for (let i = 0; i < 24; i++) {
				const randomIndex = Math.floor(Math.random() * characters.length);

				token += characters.charAt(randomIndex);
			}

			// Update the input field value
			this.generatedToken = token;
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
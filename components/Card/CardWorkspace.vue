<template>
	<div>
		<v-sheet class="settings_main" :elevation="1">
			<div class="mt-2 pa-12">
				<div class="d-flex justify-space-between mb-6">
					<h3>Workspaces</h3>
					<v-btn
						class="buttonPrimary"
						prepend-icon="mdi-plus"
						variant="tonal"
						@click="dialogNewWordspace = true"
					>
						New Workspace
					</v-btn>
					<v-dialog v-model="dialogNewWordspace">
						<v-card class="edit-user_content">
							<div class="d-flex justify-space-between mb-6 mt-3">
								<span>Create your workspace</span>
								<v-icon block @click="dialogNewWordspace = false">
									mdi-close
								</v-icon>
							</div>
							<v-divider />
							<div class="my-3">
								<p>Enter your company details to create a workspace.</p>
								<label class="label_caption_title">Workspace name *</label>
								<input id="workspace-id" v-model="workspaceName" variant="outlined" placeholder="abc">
								<label class="label_caption_title">Reference code in external system (Optional)</label>
								<input
									id="workspace-id"
									v-model="referenceCode"
									variant="outlined"
									placeholder="4fgfdgfd"
								>
							</div>
							<v-divider />
							<v-card-actions class="justify-end">
								<v-btn :class="{ 'buttonPrimary': isValid }" :disabled="!isValid" variant="tonal">
									Create Workspace
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</div>
				<p class="mb-4">
					You can find all of the workspaces you belong to listed here. Click on
					the <b>New Workspace</b> button to create a new company workspace. If
					you wish to join an existing workspace, contact the responsible person
					in the company and ask for an invite.
				</p>
				<v-row no-gutters class="pb-4">
					<v-col>
						<p class="px-6">
							Workspace Name
						</p>
					</v-col>
					<v-col>
						<p>Role</p>
					</v-col>
				</v-row>
				<v-row
					no-gutters
					style="border: 1px solid #ccc; max-height: 80px"
					class="py-4 px-3 align-center"
				>
					<v-col>
						<p>duy <i>(Currently Active)</i></p>
					</v-col>
					<v-col class="d-flex align-center justify-space-between">
						<span>Admin</span>
						<v-menu transition="scale-transition">
							<template #activator="{ props }">
								<v-btn
									class="mx-8"
									variant="text"
									icon="mdi-dots-vertical"
									v-bind="props"
								/>
							</template>
							<v-list>
								<v-list-item>
									<v-btn prepend-icon="mdi-pencil">
										Edit workspace info
									</v-btn>
									<v-dialog v-model="dialogEditWorkspace" activator="parent">
										<v-card class="edit-user_content">
											<div class="d-flex justify-space-between mb-6 mt-3">
												<span>Edit workspace info</span>
												<v-icon block @click="dialogEditWorkspace = false">
													mdi-close
												</v-icon>
											</div>
											<v-divider />
											<div class="my-3">
												<label class="label_caption_title">Workspace name *</label>

												<input id="workspace-id" variant="outlined" type="text" value="abc">
												<label class="label_caption_title">Reference code in external system (Optional)</label>
												<input id="workspace-id" variant="outlined" type="text" value="dfdfdf">
											</div>
											<v-divider />
											<v-card-actions class="justify-end">
												<v-btn
													variant="outlined"
													@click="dialogEditWorkspace = false"
												>
													Cancel
												</v-btn>
												<v-btn
													class="buttonPrimary"
													variant="tonal"
												>
													Save changes
												</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-list-item>
								<v-list-item>
									<v-btn prepend-icon="mdi-account-minus">
										Leave workspace
									</v-btn>
								</v-list-item>
								<v-dialog v-model="dialogLeaveWorkspace" activator="parent">
									<v-card class="edit-user_content">
										<div class="d-flex justify-space-between mb-6 mt-3">
											<span>Do you want to leave duy workspace?</span>
											<v-icon block @click="dialogLeaveWorkspace = false">
												mdi-close
											</v-icon>
										</div>
										<v-divider />
										<div class="my-3">
											<p>Are you sure you want to do this? Please confirm your action.</p>
										</div>
										<v-divider />
										<v-card-actions class="justify-end">
											<v-btn variant="outlined" @click="dialogLeaveWorkspace = false">
												Cancel
											</v-btn>
											<v-btn class="buttonPrimary" variant="tonal">
												Leave Workspace
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</v-list>
						</v-menu>
					</v-col>
				</v-row>
			</div>
		</v-sheet>
	</div>
</template>

<script>
export default {
	name:"CardCardWorkspace",
	data(){
		return {
			dialogEditWorkspace: false,
			dialogLeaveWorkspace: false,
			dialogNewWordspace: false,
			workspaceName: "",
			referenceCode: ""
		};
	},
	computed: {
		
		isValid() {
			return this.workspaceName.trim() !== "" || this.referenceCode.trim() !== "";
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
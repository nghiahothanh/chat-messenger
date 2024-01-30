<template>
	<div>
		<v-sheet class="settings_main" :elevation="1">
			<div class="mt-2 pa-12">
				<div class="d-flex justify-space-between mb-6">
					<h3>duy <span>1 members</span></h3>
					<v-btn
						class="buttonPrimary"
						prepend-icon="mdi-account-plus"
						variant="tonal"
						@click="dialogMembers = true"
					>
						Invite Members
					</v-btn>
					<v-dialog v-model="dialogMembers">
						<v-card class="edit-user_content">
							<div class="d-flex justify-space-between mb-6 mt-3">
								<span>Invite Members</span>
								<v-icon block @click="dialogMembers = false">
									mdi-close
								</v-icon>
							</div>
							<v-divider />
							<div class="my-3">
								<v-row v-for="i in 6" :key="i">
									<v-col cols="8">
										<input
											id="workspace-id"
											type="text"
											placeholder="johnsmith@gmail.com"
										>
									</v-col>
									<v-col cols="4">
										<v-select
											variant="outlined"
											type="text"
											placeholder="Observer"
											:items="['Admin', 'QA', 'Observer', 'Vendor', 'External QA',]"
										/>
									</v-col>
								</v-row>
							</div>
							<v-divider />
							<v-card-actions class="justify-end">
								<v-btn
									variant="outlined"
									@click="dialogMembers = false"
								>
									Cancel
								</v-btn>
								<v-btn disabled variant="tonal">
									Save changes
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</div>
				<v-row no-gutters class="pb-4">
					<v-col>
						<p class="px-6">
							Username
						</p>
					</v-col>
					<v-col>
						<p>Email</p>
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
						<p>thaivduy01 <i>(You)</i></p>
					</v-col>
					<v-col>
						<p>thaivduy01@gmail.com</p>
					</v-col>
					<v-col class="d-flex align-center">
						<v-select
							disabled
							chips
							label="Admin"
							:items="['']"
							variant="outlined"
						/>
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
										Edit user info
									</v-btn>
									<v-dialog v-model="dialogEditinfo" activator="parent">
										<v-card class="edit-user_content">
											<div class="d-flex justify-space-between mb-6 mt-3">
												<span>Edit uer info</span>
												<v-icon
													block
													@click="dialogEditinfo = false"
												>
													mdi-close
												</v-icon>
											</div>
											<v-divider />
											<div class="my-3">
												<label class="label_caption">Email</label>
												<input id="workspace-id" variant="outlined" type="text" value="abc@gmail.com" readonly>
												<label class="label_caption">Username</label>
												<input id="workspace-id" v-model="usernameValue" variant="outlined" type="text">
											</div>
											<v-divider />
											<v-card-actions class="justify-end">
												<v-btn
													variant="outlined"
													@click="dialogEditinfo = false"
												>
													Cancel
												</v-btn>
												<v-btn :class="{ 'buttonPrimary': shouldAddClass }" variant="tonal">
													Save changes
												</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-list-item>
								<v-list-item>
									<v-btn
										disabled
										variant="plain"
										prepend-icon="mdi-delete"
									>
										Delete
									</v-btn>
								</v-list-item>
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
	name:"CardCardMember",
	data(){
		return {
			dialogMembers: false,
			dialogEditinfo: false,
			usernameValue: "abc"
		};
	},
	computed: {
		shouldAddClass() {
			return this.usernameValue != "abc";
		}
		
	}
};
</script>

<style lang="scss" scoped>
.settings_main {
  margin-bottom: 32px;
}
.settings_main i {
  color: rgba(30, 39, 50, 0.32);
  font-size: 16px;
  font-weight: 400;
}
.v-list {
  padding: 0;
}

.edit-user_content {
  max-width: 576px;
  width: 90%;
  height: auto;
  padding: 12px;
  border-radius: 16px !important;
  margin: 0 auto;
}
.edit-user_content span {
  font-size: 14px;
  font-weight: 600;
}

.label_caption {
  margin: 0 12px 8px;
  color: rgba(30, 39, 50, 0.4);
  font-size: 12px;
  font-weight: 600;
}
.label_caption_title {
  margin: 0 12px 8px;
  color: rgb(30, 39, 50);
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

</style>
<template>
	<div>
		<v-dialog v-model="dialogUploadAssets" activator="parent">
			<v-card class="Upload-assets">
				<div class="d-flex justify-space-between mb-6 mt-3">
					<h3>Upload Assets</h3>
					<v-icon block @click.stop="dialogUploadAssets = false">
						mdi-close
					</v-icon>
				</div>
				<v-divider />
				<div class="my-3">
					<p class="text-center my-4">
						Upload your product assets to our digital asset management system.
					</p>
					<div class="d-flex">
						<div class="w-50 pa-4 border-upload mx-2">
							<div class="text-center mb-6">
								<v-icon class="color-primary my-10" size="50">
									mdi-file-plus-outline
								</v-icon>
								<p class="mb-4 font-weight-bold">
									Single Product
								</p>
								<p class="mb-10">
									Upload files of a single SKU.
								</p>
							</div>
							<v-btn style="width: 100%;" variant="outlined">
								Continue
							</v-btn>
						</div>
						<div class="w-50 pa-4 border-upload mx-2">
							<div class="text-center mb-6">
								<v-icon class="color-primary my-10" size="50">
									mdi-file-multiple-outline
								</v-icon>
								<p class="mb-4 font-weight-bold">
									Single Product
								</p>
								<p class="mb-10">
									Upload files of a single SKU.
								</p>
							</div>
							<v-btn style="width: 100%;" variant="outlined">
								Continue
							</v-btn>
						</div>
					</div>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>

export default {
    
	name: "DialogUpload",
    
	data () {
		return {
			dialogUploadAssets: false
		};
	}


};
</script>

<style scoped>
.Upload-assets {
  max-width: 964px;
  width: 90%;
  height: auto;
  padding: 12px;
  border-radius: 16px !important;
  margin: 0 auto;
}
.border-upload {
    border: 1px solid rgba(30,39,50,.12);
}
</style>
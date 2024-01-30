<template>
	<div>
		<div>
			<h5 class="mb-4">
				Upload your Product References
			</h5>
			<CardUploadReferCard />
			<v-card
				v-if="items.length === 0"
				class="notice-tonal rounded-lg d-flex align-center text-center my-6"
				variant="tonal"
			>
				<v-card-text>
					Click the "Add new product" or "Import Bundle" button below to add
					your product information to your order
				</v-card-text>
			</v-card>
			<!-- Add product -->
			<div v-else>
				<div class="CreateRequest my-4">
					<v-row no-gutters class="justify-end">
						<v-col class="col-1 ml-4" />
						<v-col cols="2.2">
							<span>Images (min 3) and other files</span>
							<v-icon>mdi-help-circle-outline</v-icon>
						</v-col>

						<v-col cols="2.2">
							<span>Item name</span>
							<v-icon>mdi-help-circle-outline</v-icon>
						</v-col>
						<v-col cols="2.2">
							<span>Dimensions</span>
							<v-icon>mdi-help-circle-outline</v-icon>
						</v-col>
						<v-col cols="2.2">
							<span>Product SKU</span>
							<v-icon>mdi-help-circle-outline</v-icon>
						</v-col>
						<v-col cols="2.2">
							<span>Product URL</span>
							<v-icon>mdi-help-circle-outline</v-icon>
						</v-col>
					</v-row>
					<v-row v-for="(item, index) in items" :key="index" no-gutters class="CreateRequest_item justify-end">
						<v-col class="col-1">
							<div>
								<v-btn
									:disabled="isRemoveButtonDisabled"
									prepend-icon="mdi-delete"
									variant="outlined"
									class="btn-size"
									@click="removeContent(index)"
								/>
							</div>
						</v-col>
						<v-col cols="2.2">
							<div class="d-flex justify-start">
								<template v-if="!dialogAddImages == false ? '' : showSavedImages">
									<div v-for="item1 in preview_list" :key="item1">
										<v-img :src="item1" height="32" width="32" class="bg-grey-lighten-2 mr-2" />
									</div>
								</template>
								<v-btn
									class="buttonPrimary btn-size"
									prepend-icon="mdi-image-plus"
									@click="dialogAddImages = true"
								/>
								<!-------------- Add images Dialog ------------->
								<v-dialog v-model="dialogAddImages">
									<v-card class="w-auto pa-2 rounded-xl mx-auto">
										<div class="d-flex justify-space-between mb-6 mt-3">
											<span class="ml-2 font-weight-bold" style="font-size: 16px">
												Add images
											</span>
											<v-icon block @click="dialogAddImages = false">
												mdi-close
											</v-icon>
										</div>
										<v-divider />
										<div class="dropzone d-flex align-center justify-center flex-column my-4">
											<div class="">
												<v-icon>mdi-image-outline</v-icon>
											</div>
											<div class="d-flex align-center flex-column mt-4 mx-16">
												<span>Drag and drop your image files to upload</span>
												<p>Your images should be larger than 500x500px</p>
												<div class="text-center mt-4">
													<label class="file-upload "> Select File
														<input
															class="select-file"
															name="Select file"
															type="file"
															accept="image/*"
															@change="previewMultiImage"
														>
													</label>
												</div>
											</div>
										</div>
										<!-- Add images -->
										<template v-if="preview_list.length">
											<v-card
												v-for="(item1, index1) in preview_list"
												:key="index1"
												class="mb-4 py-2 px-4"
												:elevation="3"
											>
												<div class="d-flex justify-space-between">
													<div class="d-flex">
														<v-img
															:src="item1"
															height="40"
															width="40"
															class="bg-grey-lighten-2 mr-4"
														/>
														<div>
															<h5>{{ image_list[index].name }}</h5>
															<div>{{ image_list[index].size / 1024 }} KB</div>
														</div>
													</div>
													<v-btn variant="text" class="btn-size" @click="deleteimg(index1)">
														<v-icon class="text-grey-lighten-1" size="15">
															mdi-delete-outline
														</v-icon>
													</v-btn>
												</div>
											</v-card>
										</template>

										<v-divider />
										<v-card-actions class="justify-end">
											<v-btn
												class="font-weight-bold"
												variant="outlined"
												@click="dialogAddImages = false"
											>
												<span class="mx-4">Cancel</span>
											</v-btn>
											<v-btn
												:disabled="isRemoveButtonDisabled"
												class="buttonPrimary"
												variant="tonal"
												@click="saveImage(index); resetView(index)"
											>
												<span class="mx-4">Save</span>
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</div>
						</v-col>
						<v-col cols="2.2">
							<input id="workspace-id" type="text" placeholder="Red Automatic Coffee Maker 250C5WA560">
						</v-col>
						<v-col cols="2.2">
							<div class="d-flex">
								<div id="workspace-id" class="d-flex align-center">
									<input name="length" type="text">
									<span>L</span>
								</div>
								<div id="workspace-id" class="d-flex align-center mx-2">
									<input name="length" type="text">
									<span>W</span>
								</div>
								<div id="workspace-id" class="d-flex align-center">
									<input name="length" type="text">
									<span>H</span>
								</div>
							</div>
						</v-col>
						<v-col cols="2.2">
							<input id="workspace-id" type="text" placeholder="250C5WA560">
						</v-col>
						<v-col cols="2.2">
							<input id="workspace-id" type="text" placeholder="http://...">
						</v-col>
					</v-row>
				</div>
			</div>


			<!-- button Add/import product -->
			<div>
				<!-- Add new product -->
				<v-menu transition="slide-y-transition">
					<template #activator="{ props }">
						<v-btn :class="{ buttonPrimary: !isAddNewProduct }" class="mr-4" variant="outlined" v-bind="props">
							<v-icon>mdi-plus</v-icon>
							<span class="mx-2">Add new product</span>
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item>
							<v-list-item-title @click="addToContent(1)">
								1 product
							</v-list-item-title>
							<v-list-item-title @click="addToContent(5)">
								5 products
							</v-list-item-title>
							<v-list-item-title @click="addToContent(10)">
								10 products
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>

				<!-- Import Bundle -->
				<v-btn variant="outlined" @click="dialogImportBundle = true">
					<v-icon>mdi-file-import-outline</v-icon>
					<span class="ml-2">Import Bundle</span>
				</v-btn>
				<v-dialog v-model="dialogImportBundle">
					<v-card class="dialog_content pa-2">
						<div class="d-flex justify-space-between mb-6 mt-3">
							<div class="d-flex align-center">
								<v-icon>mdi-file-import</v-icon>
								<span class="ml-2" style="color: rgba(30, 39, 50, 0.8); font-size: 24px">
									Import Products
								</span>
							</div>
							<v-icon block @click="dialogImportBundle = false">
								mdi-close
							</v-icon>
						</div>
						<v-divider />
						<div class="d-flex">
							<div class="UploadImg">
								<div class="dropzone d-flex align-center justify-center flex-column">
									<div class="">
										<v-icon>mdi-image-outline</v-icon>
									</div>
									<div class="d-flex flex-column mt-4">
										<span>Drag and drop your CSV file to upload</span>
										<div class="text-center">
											<v-btn label="File input" variant="outlined">
												Select File
											</v-btn>
										</div>
									</div>
								</div>
							</div>
							<div class="UploadInfo">
								<v-stepper alt-labels>
									<v-stepper-header>
										<v-stepper-item value="1">
											<div class="ml-2 text-start">
												<h4>Uploading a CSV file</h4>
												<div>
													<a href="">Download</a><span>
														the CSV template and update it with your data. You
														can also update your modeling quote request by
														reuploading the same file with additional data at
														any time.</span>
												</div>
												<a href="">Learn More</a>
											</div>
										</v-stepper-item>
										<v-stepper-item value="2">
											<div class="ml-2 text-start">
												<h4>Uploading image folders</h4>
												<div>
													<span>Create folders for each product and add reference
														images. Ensure the folder title matches the product
														SKU number.</span>
												</div>
												<a href="">Learn More</a>
											</div>
										</v-stepper-item>
									</v-stepper-header>
								</v-stepper>
								<div>
									<img
										style="max-height: 330px; margin-left: 50px"
										src="https://wildcat-static.cgtrader.com/packs/media/Images/modelry/files_upload_requests_structure-8410686518b58f949ade1038a864c0d9.png"
										alt=""
									>
								</div>
								<p class="text-subtitle-2">
									Remember that you don't need to upload all the information at
									once. We will create modeling quote drafts using product SKU
									numbers. You can later update the drafts in batch via CSV or
									folder upload.
								</p>
							</div>
						</div>
						<v-divider />
						<v-card-actions class="justify-space-between">
							<v-btn class="font-weight-bold" variant="outlined" @click="dialogImportBundle = false">
								Cancel
							</v-btn>
							<div>
								<v-btn class="font-weight-bold" variant="outlined">
									Skip CSV Upload
								</v-btn>
								<v-btn disabled variant="tonal">
									Next
								</v-btn>
							</div>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</div>
			<div class="d-flex justify-end">
				<v-btn variant="outlined">
					<span class="px-2">Back</span>
				</v-btn>
				<v-btn
					class="ml-4"
					:class="{ buttonPrimary: isAddNewProduct }"
					:disabled="!isAddNewProduct"
					to="/checkouts/Requestestimate"
				>
					<span class="px-2">Save & Continue</span>
					<v-icon>mdi-arrow-right</v-icon>
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			model: 2,
			orderValue: "13756",
			dialogImportBundle: false,
			selectedProductCount: 0,
			items: [],
			isRemoveButtonDisabled: false,
			// isAddNewProduct: false,
			dialogAddImages: false,
			showSavedImages: false,
			preview: null,
			image: null,
			preview_list: [],
			image_list: []
		};
	},
	computed: {
		isAddNewProduct() {
			return this.items.some((item) => true);
		}
	},
	methods: {
		addToContent(count) {
			this.selectedProductCount += count;
			const newItems = Array.from({ length: count }, (_, index) => ({
				id: this.selectedProductCount - count + index,
				data: {}
			}));

			this.items = [...this.items, ...newItems];
		},
		removeContent(index) {
			this.isRemoveButtonDisabled = true;

			setTimeout(() => {
				this.items.splice(index, 1);
				this.isRemoveButtonDisabled = false;
			}, 300);
		},
		previewImage: function (event) {
			var input = event.target;

			if (input.files) {
				var reader = new FileReader();

				reader.onload = (e) => {
					this.preview = e.target.result;
				};
				this.image = input.files[0];
				reader.readAsDataURL(input.files[0]);
			}
		},
		previewMultiImage: function (event) {
			var input = event.target;
			var count = input.files.length;
			var index = 0;

			if (input.files) {
				while (count--) {
					var reader = new FileReader();

					reader.onload = (e) => {
						this.preview_list.push(e.target.result);
					};
					this.image_list.push(input.files[index]);
					reader.readAsDataURL(input.files[index]);
					index++;
				}
			}
		},
		deleteimg(index) {
			this.preview_list.splice(index, 1);
			this.image_list.splice(index, 1);
		},
		saveImage(index) {
			if (!this.showSavedImages) {
				this.isRemoveButtonDisabled = true;

				setTimeout(() => {
					this.isRemoveButtonDisabled = false;
					this.dialogAddImages = false;
					this.showSavedImages = true;
				}, 350);
			}
		},
		resetView(index) {
			this.showSavedImages = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.notice-outline {
	box-shadow: 0 4px 4px rgba(30, 39, 50, 0.04), 0 1px 8px rgba(30, 39, 50, 0.04),
		0 2px 4px rgba(30, 39, 50, 0.04), 0 0 0 4px rgba(0, 122, 255, 0.1),
		inset 0 0 0 1px rgba(0, 122, 255, 0.4);
}

.notice-tonal {
	min-height: 100px;
	color: rgba(30, 39, 50, 0.4);
}

/* Upload */
.UploadImg,
.UploadInfo {
	width: 50%;
	padding: 12px;
}

.dropzone {
	height: 100%;
	border: 2px dashed rgba(30, 39, 50, 0.24);
	border-radius: 16px;
	background: #fff;
	padding: 40px 0;
}

/* Content */
.v-stepper--alt-labels .v-stepper-item {
	flex-direction: row;
}

s .UploadInfo .v-stepper-item {
	padding: 8px;
	align-items: start !important;
	border-left: 5px solid rgba(30, 39, 50, 0.12);
	margin-bottom: 25px;
}

.UploadInfo .v-stepper-item.v-stepper-item--selected {
	border-left: 5px solid #19bcc9;
}

.UploadInfo a {
	color: #19bcc9;
}

.v-avatar {
	top: 10px;
}

.v-stepper-item--selected .v-stepper-item__avatar.v-avatar {
	background-color: #19bcc9;
}

.v-stepper.v-sheet {
	box-shadow: none;
	border-radius: 0;
}

/* Create Product */
.CreateRequest span {
	color: #1e2732;
	font-size: 12px;
	margin-right: 4px;
}

.CreateRequest .v-icon--size-default {
	font-size: 16px !important;
	color: rgba(30, 39, 50, 0.6);
}

.CreateRequest_item .v-col {
	border: 1px solid rgba(30, 39, 50, 0.06);
	padding: 8px 12px !important;
}

.col-1 {
	max-width: 60px;
}

#workspace-id {
	height: 32px;
	font-size: 12px;
	padding-right: 8px;
	padding-left: 8px;
}

#workspace-id input {
	flex-grow: 1;
	order: 4;
	width: 20px;
	border: none;
	outline: none;
}

#workspace-id span {
	order: 7;
	cursor: text;
	color: rgba(30, 39, 50, 0.32);
	user-select: none;
}

.v-list-item-title {
	cursor: pointer;
	padding: 8px 12px;
	color: #1e2732;
	font-size: 16px;
	font-weight: 400;
	list-style-type: none;
	width: 100%;
}

.v-list-item-title:hover {
	background: #ccc;
}

input[type="file"] {
	display: none;
}

.file-upload {
	height: 32px;
	padding: 8px 12px;
	font-size: 16px;
	line-height: 20px;
	border: 1px solid rgba(30, 39, 50, .12);
	background-color: transparent;
	color: rgba(30, 39, 50, .8);
	cursor: pointer;
}
</style>
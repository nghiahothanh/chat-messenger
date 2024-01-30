<template>
	<div>
		<div class="Review-container">
			<div class="d-flex align-center space-between mb-6">
				<div class="Review-container_header">
					<h5>Review & Request estimate</h5>
					<span>Your quote should arrive within 1 day. You will be able to review
						the estimate before being charged.</span>
				</div>
				<v-btn prepend-icon="mdi-pencil" variant="outlined" @click="BackHistory">
					<span class="font-weight-bold mx-2">Edit products</span>
				</v-btn>
			</div>
			<v-card class="rounded-lg pa-2">
				<div class="d-flex">
					<div class="item-card__preview">
						<div class="d-flex align-center justify-center">
							<v-img
								src="https://wildcat.cgtrader.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSVZHTGdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--48baaeef231aeeeff74c8e11ea82f84d5b051594/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDam9MWm05eWJXRjBPZ2h3Ym1jNkVHRjFkRzlmYjNKcFpXNTBWRG9NWjNKaGRtbDBlVG9MWTJWdWRHVnlPZ3R5WlhOcGVtVkpJZ3d4TlRCNE1UVXdCam9HUlZRNkNXTnliM0JKSWhBeE5UQjRNVFV3S3pBck1BWTdDMVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--faa5e4bc640d336b5f178100ae6fa7c740b0403c/cafe.webp"
								cover
								class="bg-grey-lighten-2 rounded-lg"
							/>
						</div>
					</div>
					<div class="py-4">
						<h5 class="mb-2">
							{{ title }}
						</h5>
						<div class="d-flex">
							<span class="font-weight-bold" style="color: rgba(30, 39, 50, 0.4)">SKU
								<span class="ml-5" style="color: rgba(30, 39, 50, 0.8)">{{
									isSKU
								}}</span></span>
							<v-divider :thickness="2" class="mx-6" vertical />
							<span class="font-weight-bold" style="color: rgba(30, 39, 50, 0.4)">Dimensions
								<span class="ml-5" style="color: rgba(30, 39, 50, 0.8)">6 x 6 x 6 cm</span></span>
						</div>
					</div>
				</div>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "name",
			isSKU: "28329"
		};
	}

};
</script>

<style lang="scss" scoped>

.item-card__preview {
	width: 112px;
	min-width: 112px;
	height: 80px;
	margin-right: 16px;
	border-radius: 4px;
	box-shadow: inset 0 0 0 1px rgba(30, 39, 50, 0.12);
	-o-object-fit: cover;
	object-fit: cover;
}

</style>
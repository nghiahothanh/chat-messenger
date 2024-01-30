<template>
	<v-footer app height="70px">
		<v-container>
			<v-row>
				<v-col cols="2">
					<div>
						Need something more specific? <span> Contact us</span>
					</div>
				</v-col>
				<v-col cols="5">
					<div>
						<v-btn flat="" color="#19bcc9" to="/checkouts/UploadReferences" width="100%">
							Select interactive 3D model + AR
						</v-btn>
					</div>
				</v-col>
				<v-col cols="5">
					<div>
						<v-btn flat color="#19bcc9" to="/checkouts/UploadReferences" width="100%" class="mr-4">
							Select interactive 3D model + AR
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script>
export default {
	name: "TableFooter",
	data() {
		return {

			showDiv: true
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;

			this.showDiv = !isBottom;
		}

	}
};
</script>

<style lang="scss" scoped>

</style>
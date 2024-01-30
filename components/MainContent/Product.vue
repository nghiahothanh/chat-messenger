<template>
	<div>
		<v-row>
			<v-col cols="2">
				<div>
					<h3>
						Please select a service
					</h3>
					<p>
						Submit your order for a custom 3D model within minutes! Choose the
						3D model type that best suits your use case to get started.
					</p>
				</div>
			</v-col>
			<v-col cols="5">
				<div>
					<div class="dimensionImg">
						<img
							src="https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg"
							alt=""
						>
					</div>
					<h4>6 Photorealistic Product Images for E-commerce</h4>
					<p>
						This option will replace your product photography and will provide
						you with 6 images from all sides to use on your e-commerce website,
						as well as the underlying high-resolution 3D model and a 360 spinner
						that is made from these images. Please note: This model is NOT for
						use in augmented reality and similar interactive applications.
					</p>
				</div>
			</v-col>
				
			<!-- Carousels img -->
			<v-col cols="5">
				<div>
					<div>
						<v-sheet>
							<v-slide-group v-model="activeIndex" selected-class="is_active">
								<!-- Slide img -->
								<v-slide-group-item v-for="(item, i) in items" :key="i" v-slot="{ toggle, selectedClass }">
									<v-img
										:src="item.src"
										:class="['ma-2 rounded', selectedClass]"
										width="72"
										height="50"
										cover
										@click="selectedImage(toggle, item.src, i)"
									/>
								</v-slide-group-item>
							</v-slide-group>
							<!-- Slide img click -->
							<v-expand-transition>
								<v-sheet>
									<div class="d-flex justify-center align-center ">
										<v-img
										
											class="roundeds outlined"
											cover
											width="420"
											height="350"
											:src="chooseImg"
										>
											<v-btn
											
												class="btn-size ma-4 float-right"
												prepend-icon="mdi-crop-free"
												variant="outlined"
												@click="dialogCarousels = true"
											/>
										</v-img>
									</div>
								</v-sheet>
							</v-expand-transition>
						</v-sheet>
						<v-dialog v-model="dialogCarousels">
							<v-card class="">
								<div class="ma-4 outlined">
									<v-btn
										class=" ma-4 float-right"
										size="40"
										variant="outlined"
										@click="dialogCarousels = false"
									>
										<v-icon size="40">
											mdi-close
										</v-icon>
									</v-btn>
									<v-carousel hide-delimiters>
										<v-carousel-item :key="i" :src="chooseImg" />
									</v-carousel>
									<div>
										<v-slide-group
											v-model="model"
											selected-class="is_active"
											class="pa-4"
											center-active
											show-arrows
										>
											<v-slide-group-item
												v-for="(item, i) in items"
												:key="i"
												v-slot="{ toggle, selectedClass }"
											>
												<v-img
													:src="item.src"
													:class="['ma-2 rounded', selectedClass]"
													class="ma-2"
													height="50"
													width="80"
													@click="selectedImage(toggle, item.src)"
												/>
											</v-slide-group-item>
										</v-slide-group>
									</div>
								</div>
							</v-card>
						</v-dialog>
					</div>
					<h4>6 Photorealistic Product Images for E-commerce</h4>
					<p>
						This option will replace your product photography and will provide
						you with 6 images from all sides to use on your e-commerce website,
						as well as the underlying high-resolution 3D model and a 360 spinner
						that is made from these images. Please note: This model is NOT for
						use in augmented reality and similar interactive applications.
					</p>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	name:"MainContentProduct",
	data() {


		return {
			items: [
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0001.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0028.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0009.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0025.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0017.jpg"
				},
				{
					src: "https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14275/assets/1668506907/4%20Egg_lounge_chair_360_45FOV_580_0001.jpg"
				}
			],
			chooseImg: "",
			dialogCarousels: false,
			activeIndex: 0,
			model:1
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		this.chooseImg="https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg";
	},
	methods:{
		created() {
			// Set the default active index and chooseImg when the component is created
			this.activeIndex = 0;
		},
		selectedImage(toggle, src, index) {
			toggle();
			this.chooseImg = src; // Update the image source
			this.activeIndex = index; // Update the active index
		},
		openDialog() {
			this.dialog = true;
			const imageUrl = this.$refs.imageRef.src;

			this.dialogImg = imageUrl;
			console.log(this.dialogImg);
			// Do something with the imageUrl, e.g., update state or use it directly in the dialog
		}
	}
};
</script>

<style lang="scss" scoped>


.dimensionImg {
	height: 420px;
	min-width: 300px;
}

.dimensionImg img {
	width: 100%;
	height: 100%;
	border: 1px solid rgba(30, 39, 50, .12);
	/* min-width: 300px; */
}

/* img  */




</style>
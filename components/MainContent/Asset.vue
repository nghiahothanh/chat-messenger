<template>
	<div>
		<div class="mt-5 mb-5  text-center mx-8">
			<v-sheet :elevation="1">
				<div class="dimensionImg pa-8">
					<img
						src="//wildcat-static.cgtrader.com/packs/media/Pods/Customer/Images/no-files-acbdd841492121ab40ac73ed92ed7509.png"
						alt=""
					>
					<div class="my-2">
						<b>{{ title }}</b>
					</div>
					<p class="my-4">
						{{ content }}
					</p>
					<v-btn class="buttonPrimary text-none elevation-0">
						<span>{{ buttonText }}</span>
					</v-btn>
				</div>
			</v-sheet>
		</div>
	</div>
</template>

<script>


export default {
	name: "MainContentAsset",
	props: {

		title: {
			type:String,
			required:true,
			default:""
		},
		 content: {
			type:String,
			required:false,
			default:""
		 },
		 buttonText: {
			type:String,
			required:false,
			default:""
		 }
		
		


	}
};
</script>

<style lang="scss" scoped>
.dimensionImg img {
	max-width: 400px;
	max-height: 200px;
}
</style>
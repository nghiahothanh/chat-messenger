<template>
	<v-btn
		elevation="0"
		:color="color"
		class=""
	>
		<v-icon color="while">
			{{ icon }}
		</v-icon>
		<p class="mb-0 text-subtitle-2" style="color: while;">
			{{ name }}
		</p>
	</v-btn>
</template>

<script>
export default {
	name: "ButtonPrimary",
	props: {
		icon: {
			type: String,
			default:""
		},
		name: {
			type: String,
			default:""
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},

	setup () {
		return {};
	}
};
</script>

<style scoped>
.buttonPrimary {
    background-color: #19bcc9 !important;
    transition: 0.25s;
}
.buttonPrimary:hover {
    background-color: #159ca9;
}
</style>
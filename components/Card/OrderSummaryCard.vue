<template>
	<div>
		<v-card class="Review-summary pa-4">
			<div>
				<h4>Order Summary</h4>
				<v-divider class="my-4" />
				<h5>What's included</h5>
				<div
					style="
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 16px;
              margin-top: 10px;
            "
				>
					<span style="color: rgba(30, 39, 50, 0.4); font-size: 12px">What you will receive</span>
					<div class="Workflow">
						<div v-for="(u, i) in OrderReceive" :key="i" class="Workflow_tag">
							<span class="tag__text">{{ u.text }}</span>
							<v-icon size="17">
								mdi-help-circle-outline
							</v-icon>
							<v-tooltip
								class="Workflow_tooltip"
								style=" font-size: 12px;"
								activator="parent"
								location="top"
							>
								{{ u.tooltip }}
							</v-tooltip>
						</div>
					</div>
					<v-divider class="mt-2 mb-2" />
					<span style="color: rgba(30, 39, 50, 0.4); font-size: 12px">What you will receive</span>
					<div class="Workflow">
						<div v-for="(u, i) in OrderAvailable" :key="i" class="Workflow_tag">
							<span class="tag__text">{{ u.text }}</span>
							<v-icon size="17">
								mdi-help-circle-outline
							</v-icon>
							<v-tooltip
								class="Workflow_tooltip"
								style=" font-size: 12px;"
								activator="parent"
								location="top"
							>
								{{ u.tooltip }}
							</v-tooltip>
						</div>
					</div>
				</div>
				<div class="d-flex justify-end mt-4">
					<v-btn class="buttonPrimary">
						Request Estimate
					</v-btn>
				</div>
			</div>
		</v-card>
	</div>
</template>

<script>
export default {
	name:"CardOrderSummary",
	data() {
		return {
			
			OrderReceive: [
				{ text: "Source files", tooltip: "You will receive .fbx file as it was modeled by our artist" },
				{ text: ".gltf", tooltip: "You will receive model in .gltf file that is used on web viewers and for AR in Android devices." },
				{ text: ".glb", tooltip: "You will receive model in .glb file that is used on web viewers and for AR in Android devices." },
				{ text: ".usdz", tooltip: "You will receive .usdz file that is used on Apple devices" },
				{ text: "Real World Scale", tooltip: "All our models are created exactly to the dimensions you provide." },
				{ text: "Preview before delivery", tooltip: "You can review your models and ask for fixes, reach out to our support team if you have any questions." }
			],
			OrderAvailable: [
				{ text: "Web 3D Viewer", tooltip: "A 3D viewer on desktop devices and a preview image with AR icon on mobile. Clicking on icon wil lead to AR experience" },
				{ text: "AR wrapper", tooltip: "A script that wraps an image or other object on web and makes it clickable. A click on that object would link to AR experience (mobile device) or 3D viewer on desktop devices" },
				{ text: "View in my room button", tooltip: "A script that wraps an image or other object on web and makes it clickable. A click on that object would link to AR experience (mobile device) or 3D viewer on desktop devices" },
				{ text: "QR code", tooltip: "Script generates a QR code that can be scanned with mobile camera for AR experience, or clicked to open a 3D viewer(on desktop devices) or AR viewer (on mibile devices)" },
				{ text: "Facebook & Instagram Publishing", tooltip: "ARsenal has direct integration with Facebook and Instagram platforms to publish your models directly to your Facebook Business Catalogs." },
				{ text: "Managed assets", tooltip: "You can manage all your files and embeddable viewers within ARsenal after delivery" }
			]
		};
	}

};
</script>

<style lang="scss" scoped>
.Review-summary {
	width: 320px;
	min-width: 320px;
	margin-left: 24px;
	border-radius: 24px;
}

.Workflow {
	display: flex;
	margin-bottom: 3px;
	row-gap: 4px;
	column-gap: 8px;
	flex-wrap: wrap;
}

.Workflow_tag {
	background-color: rgba(25, 188, 201, 0.1);
	color: #19bcc9;
	margin-top: 4px;
	padding: 4px;
	height: 24px;
	width: auto;
	min-width: 24px;
	font-size: 12px;
	place-content: center;
	vertical-align: middle;
	cursor: default;
	border-radius: 12px;
}

.tag__text {
	justify-content: center;
	margin: 0 4px;
	white-space: nowrap;
}

:global(.v-overlay__content~.Workflow_tooltip) {
	max-width: 208px !important;
	background-color: #1e2732 !important;
	padding: 4px 8px !important;
}
</style>
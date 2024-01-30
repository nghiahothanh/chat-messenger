<template>
	<!-- Component template -->
	<CheckoutSidebar />
	<NavbarHeaderOrder :data-catalog="data" />
	<MainContentAsset v-if="data.dataCatalog.Status.Action===0" :title="title" :content="content" :button-text="buttonText" />
	<TableOder v-else :data-catalog="data" />
	<!-- Mess -->
	<SupportMessenger />
</template>
  
<script>
export default {
	name: "PageOrders",
	data() {


		return {
			title: "This is where you will see your 3D modeling requests",
			content: "Start by requesting a quote for the items you want to be 3D modeled.",
			buttonText: "Request",
			data: {
				"dataCatalog": {
					"Status": {
						"Action": "2",
						"Complete": "0",
						"Draft": "2"
					},
					"Media": "",
					"CreatedAt": "Jan 26 , 2024",
					"UpdateAt": "",
					"Sku": "",
					"Properties": {
						"name": "Frozen Yogurt",
						"Request": 1,
						"Status":"Waiting",
						"dimension": "",
						"description": "",
						"Price":""

					}
				}
			}

		};
	}
};
</script>
  
<style scoped></style>
  
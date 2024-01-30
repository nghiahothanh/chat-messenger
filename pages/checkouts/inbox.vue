<template>
	<div>
		<CheckoutSidebar />
	</div>
	<div>
		<div class="NewHeader-module__title">
			<h1 class="heading_oder">
				Inbox
			</h1>
		</div>
	</div>



	<div class="modal__message">
		<div style=" height: 100vh;background-color: rgb(246,246,246);">
			<v-select
				v-model="value"
				:items="items"
				label="Statuses"
				multiple
				class="selectItem"
				:menu="true"
			>
				<template #selection="{ index }">
					<span v-if="index > 0" />
				</template>
			</v-select>

			<div class="message ">
				<p style="font-size: 3rem; margin-left: 3rem;">
					<span class="mdi mdi-email-outline" />
				</p>
				<p class="ml-50">
					There are no messages
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:"InboxPage",
	data() {
		return {
			value: [],
			items: [
				"Ready for review", "In progress", "Finished"
			]
		};
	}
};
</script>

<script setup>

</script>

<style lang="scss" scoped>
.heading_oder {
    font-size: 20px;
    line-height: 28px;
    margin: 0;
    color: #1e2732df;
    letter-spacing: normal;
    font-style: normal;
    font-weight: 500;
    padding: 12px 0 0px;
}

.NewHeader-module__title,
.NewHeader-module__filters {
    display: flex;
    width: 100%;
    padding: 14px 32px;
    border-bottom: 1px solid rgba(30, 39, 50, 0.12);
    align-items: center;
    color: #485c66;
}

.modal__message {
    position: relative;
}

.message {
    position: absolute;
    left: 60%;
    top: 30%;
    transform: translate(-50%, -50%);
}

.selectItem {
    width: 13rem;
    padding-top: 3rem;
    margin-left: 3rem;
}

.v-field__input {
    display: none;
}

.v-field__input.v-select__selection {
    display: none !important;
}

.v-select .v-select__selection {
    display: none !important;
}
</style>
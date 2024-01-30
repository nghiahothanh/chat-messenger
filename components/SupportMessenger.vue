<template>
	<div class="support-messenger-trigger">
		<v-icon size="16" class="pr-1">
			mdi-help-circle-outline
		</v-icon>
		Help
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.support-messenger-trigger {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12px;
    display: block;
    position: fixed;
    top: calc(50% + 94px);
    right: -20px;
    z-index: 453;
    height: 28px;
    border-radius: 0 0 4px 4px;
    background: #0065d6;
    padding: 0 10px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgba(0,101,214,.3);
    line-height: 28px;
    transform: rotate(90deg);
    
}
</style>
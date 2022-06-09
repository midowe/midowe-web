<template>
	<div class="worspace">
		<ThisHeader />
		<div class="main-container">
			<slot />
		</div>
		<ThisFooter />
	</div>
</template>

<style scoped>
.worspace {
	min-height: 100vh;
}
.main-container {
	min-height: calc(100vh - 146px);
}
</style>
<script setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Midowe` : "Midowe - Doar para ajudar";
	},
});
</script>

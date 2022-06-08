<template>
	<div>
		<ThisHeader />
		<div class="main-container">
			<slot />
		</div>
		<ThisFooter />
	</div>
</template>

<script setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Midowe` : "Midowe - Doar para ajudar";
	},
});
</script>

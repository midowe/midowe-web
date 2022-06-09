<template>
	<section>
		<donate-header :campaign="campaign" />
		<donate-form :campaign="campaign" />
	</section>
</template>

<style scoped>
section {
	padding: 0 0 10px 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { getCampaign } from "~~/clients/campaign-client";

export default defineComponent({
	async setup() {
		const route = useRoute();
		const campaign = await getCampaign(route.params.campaignSlug);
		return { campaign };
	},
});
</script>

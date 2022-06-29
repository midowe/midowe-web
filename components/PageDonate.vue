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

<script lang="ts" setup>
import { getCampaign } from "~~/clients/campaign-client";

const config = useRuntimeConfig();
const route = useRoute();

const campaign = await getCampaign(
	config.public.endpointCms,
	route.params.campaignSlug
);
</script>

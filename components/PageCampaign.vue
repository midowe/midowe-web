<template>
	<section>
		<div class="container">
			<div class="mb96 mb-xs-48">
				<campaign-header :campaign="campaign" />

				<campaign-action-bar :campaign="campaign" />

				<campaign-description :campaign="campaign" />

				<campaign-pictures :campaign="campaign" />

				<campaign-contributions :campaign="campaign" />
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	padding: 50px 0;
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

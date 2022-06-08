<template>
	<div class="row">
		<div
			v-for="campaign in props.campaigns"
			:key="campaign.id"
			class="col-sm-4 mb-40"
		>
			<card-campaign :campaign="campaign" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";

interface Props {
	campaigns: Campaign[];
}

const props = defineProps<Props>();
</script>

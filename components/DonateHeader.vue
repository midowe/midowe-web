<template>
	<div class="row mb16 mb-xs-0 bg-secondary">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
			<div
				class="campaign-image"
				:style="`background: url('${campaign.attributes.images.data[0].attributes.formats.small.url}')`"
			></div>
			<h5>
				Apoiar a
				{{ campaign.attributes.fundraiser.data.attributes.full_name }}
			</h5>
			<h4>
				<NuxtLink :to="`/${campaign.attributes.slug}`">{{
					campaign.attributes.title
				}}</NuxtLink>
			</h4>
		</div>
	</div>
</template>

<style scoped>
.campaign-image {
	width: 90px;
	height: 90px;
	border-radius: 50%;
	background-size: cover !important;
	margin: 20px auto;
}
h5 {
	margin: 0;
}
h4 a {
	font-size: 20px;
	font-weight: 400;
}
</style>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();
const campaign = props.campaign;

useHead({
	title: campaign.attributes.title,
});
</script>

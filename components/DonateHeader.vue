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
	meta: [
		{
			hid: "og:title",
			property: "og:title",
			content: campaign.attributes.title,
		},
		{
			hid: "og:type",
			property: "og:type",
			content: "article",
		},
		{
			hid: "og:image",
			property: "og:image",
			content: campaign.attributes.images.data[0].attributes.url,
		},
		{
			hid: "og:url",
			property: "og:url",
			content: `https://midowe.co.mz/${campaign.attributes.slug}`,
		},
		{
			hid: "twitter:card",
			name: "twitter:card",
			content: campaign.attributes.images.data[0].attributes.url,
		},
		{
			hid: "og:description",
			property: "og:description",
			content: campaign.attributes.fundraiser.data.attributes.full_name,
		},
		{
			hid: "og:site_name",
			property: "og:site_name",
			content: "Midowe",
		},
	],
});
</script>

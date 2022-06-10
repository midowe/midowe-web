<template>
	<div class="row mb16 mb-xs-0">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
			<h6 class="uppercase mb16 mb-xs-8">
				<NuxtLink
					:to="`/explore?category=${campaign.attributes.category.data.id}`"
				>
					{{ campaign.attributes.category.data.attributes.description }}
				</NuxtLink>
			</h6>
			<h3>
				{{ campaign.attributes.title }}
			</h3>
		</div>
	</div>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<img
				alt=""
				class="mb-xs-16 cast-shadow"
				:src="campaign.attributes.images.data[0].attributes.formats.medium.url"
			/>
		</div>
	</div>
</template>

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
			name: "og:title",
			content: campaign.attributes.title,
		},
		{
			hid: "og:type",
			name: "og:type",
			content: "article",
		},
		{
			hid: "og:image",
			name: "og:image",
			content: campaign.attributes.images.data[0].attributes.url,
		},
		{
			hid: "og:url",
			name: "og:url",
			content: `https://midowe.co.mz/${campaign.attributes.slug}`,
		},
		{
			hid: "twitter:card",
			name: "twitter:card",
			content: campaign.attributes.images.data[0].attributes.url,
		},
		{
			hid: "og:description",
			name: "og:description",
			content: campaign.attributes.fundraiser.data.attributes.full_name,
		},
		{
			hid: "og:site_name",
			name: "og:site_name",
			content: "Midowe",
		},
	],
});
</script>

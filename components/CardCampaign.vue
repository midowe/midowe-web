<template>
	<NuxtLink :to="`/c/${props.campaign.id}`">
		<div class="card-campaign">
			<div
				class="image fadeIn"
				:style="`background: url('${mainImage}')`"
			></div>
			<h1>{{ props.campaign.attributes.title }}</h1>
			<p>
				{{
					formatPercent(
						props.campaign.attributes.target_amount,
						props.campaign.attributes.total_amount
					)
				}}
				- Meta: {{ formatMoney(props.campaign.attributes.target_amount) }}
			</p>
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.card-campaign {
	.image {
		height: 200px;
		background-size: cover !important;
		border-radius: 15px;
	}

	h1 {
		font-size: 14pt;
		margin: 10px 0 0 0;
		line-height: 30px;
	}

	p {
		color: #3f13b9ae;
	}
}
</style>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";
import { formatMoney, formatPercent } from "~~/helpers/formatter";

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();

let mainImage: string = "";
if (
	props.campaign.attributes.images.data.length > 0 &&
	props.campaign.attributes.images.data[0].attributes.formats.small != undefined
) {
	mainImage =
		props.campaign.attributes.images.data[0].attributes.formats.small.url;
}
</script>

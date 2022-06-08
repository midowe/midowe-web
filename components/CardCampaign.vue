<template>
	<NuxtLink :to="`/${props.campaign.attributes.slug}`">
		<div class="card-campaign">
			<div
				class="image fadeIn"
				:style="`background: url('${mainImage}')`"
			></div>
			<div class="text">
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
				<div v-if="props.campaign.attributes.category != undefined">
					<span class="tag">
						{{ props.campaign.attributes.category.data.attributes.name }}
					</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.card-campaign {
	background-color: white;
	.image {
		height: 200px;
		background-size: cover !important;
	}

	.text {
		padding: 0 15px 25px 15px;
	}

	h1 {
		font-size: 12pt;
		margin: 10px 0 0 0;
		line-height: 30px;
		display: -webkit-box;
		max-width: 200px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	p {
		color: #3f13b9ae;
		margin-bottom: 10px;
	}
}
.tag {
	background-color: rgb(236, 236, 236);
	padding: 5px 10px;
	color: #404040ae;
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

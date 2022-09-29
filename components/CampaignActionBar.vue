<template>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<div class="row">
				<div class="col-sm-5">
					<div class="fundraiser">
						<img
							:alt="campaign.attributes.fundraiser.data.attributes.full_name"
							:src="
								campaign.attributes.fundraiser.data.attributes.picture.data
									.attributes.formats.small != undefined
									? campaign.attributes.fundraiser.data.attributes.picture.data
											.attributes.formats.small.url
									: campaign.attributes.fundraiser.data.attributes.picture.data
											.attributes.url
							"
						/>
						<div class="description">
							<span class="full-name">{{
								campaign.attributes.fundraiser.data.attributes.full_name
							}}</span>
							<span class="headline">{{
								campaign.attributes.fundraiser.data.attributes.headline
							}}</span>
						</div>
					</div>
				</div>
				<div class="col-sm-7 call-to-action">
					<div class="row">
						<div class="col-md-6">
							<campaign-share :campaign="campaign" />
						</div>
						<div class="col-md-6">
							<NuxtLink :to="`/${campaign.attributes.slug}/donate`">
								<a class="btn btn-lg btn-filled" href="#"
									>Apoiar <i class="ti-heart"></i>
								</a>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
			<div class="row stats-area">
				<div class="col-sm-12">
					<hr />
					<ul class="stats">
						<li>Contribuições: {{ campaign.attributes.total_donations }}</li>
						<li v-if="!campaign.attributes.hide_donated_amount">
							Angariado: {{ formatMoney(campaign.attributes.total_amount) }}
							<span class="hide-sm" v-if="campaign.attributes.target_amount > 0"
								>({{
									formatPercent(
										campaign.attributes.target_amount,
										campaign.attributes.total_amount
									)
								}})</span
							>
						</li>
						<li v-if="campaign.attributes.target_amount > 0">
							Meta: {{ formatMoney(campaign.attributes.target_amount) }}
						</li>
						<li v-if="campaign.attributes.target_date">
							Prazo: {{ campaign.attributes.target_date }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.fundraiser {
	display: flex;

	img {
		width: 70px;
		height: 70px;
	}
	.description {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		justify-content: center;
	}
	.description .full-name {
		font-size: 15px;
		font-weight: bold;
	}
}
.call-to-action {
	display: flex;
	gap: 20px;
	justify-content: flex-end;

	padding-top: 7px;
	.btn {
		margin-bottom: 0;
	}
	.btn-lg {
		min-width: -webkit-fill-available;
	}
}
.stats-area {
	margin-top: 20px;
}
.stats {
	display: flex;
	gap: 10px;
	justify-content: center;

	li {
		background-color: rgb(236, 236, 236);
		padding: 5px 10px;
		color: #404040ae;
		font-size: 11px;
	}
}

@media all and (max-width: 767px) {
	.stats {
		flex-wrap: wrap;
		li {
			width: 45%;
		}
	}
	.hide-sm {
		display: none;
	}
	.call-to-action {
		justify-content: center;
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
const campaign = props.campaign;
if (campaign.attributes.total_amount == undefined) {
	campaign.attributes.total_amount = 0;
}
if (campaign.attributes.total_donations == undefined) {
	campaign.attributes.total_donations = 0;
}
</script>

<template>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<h6 class="title uppercase text-center">
				Contribuições recebidas ({{ campaign.attributes.total_donations }})
			</h6>
			<hr />
			<div v-if="state.loading" class="row masonry-loader">
				<div class="col-sm-12 text-center">
					<div class="spinner"></div>
				</div>
			</div>
			<ul v-if="!state.loading">
				<li
					class="contribution-item"
					v-for="donation in state.donations"
					:key="donation.id"
				>
					<h4>{{ formatMoney(donation.attributes.amount) }}</h4>
					<div>
						<h5>
							{{ formatFullDate(donation.attributes.createdAt) }}
							<span
								>-
								<em>{{
									donation.attributes.donor_name !== ""
										? donation.attributes.donor_name
										: "Anônimo"
								}}</em></span
							>
						</h5>
						<p v-if="donation.attributes.donor_message !== ''">
							{{ donation.attributes.donor_message }}
						</p>
					</div>
				</li>
				<!-- TODO: LOAD MORE -->
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contribution-item {
	display: flex;
	margin-bottom: 10px;
	align-items: flex-start;
	font-weight: bolder;
	h4 {
		color: white;
		background-color: #3e13b9;
		padding: 1px 10px;
		margin: 0;
		font-size: 13px;
		text-align: center;
		min-width: 85px;
	}

	div {
		margin-left: 20px;
		border-bottom: 1px solid #ebebeb;
		padding-bottom: 10px;
		flex: 1;
		h5 {
			margin: 0;
			font-size: 14px;
		}
		p {
			margin: 0;
		}
	}
}
</style>

<script lang="ts" setup>
import { Campaign } from "~~/clients/campaign-client";
import { getDonations } from "~~/clients/donation-client";
import { formatMoney, formatFullDate } from "~~/helpers/formatter";

const config = useRuntimeConfig();

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();

const state = reactive({ loading: true, donations: [] });

onMounted(() => {
	getDonations(config.public.endpointCms, props.campaign.id, 1, 12).then(
		(data) => {
			state.loading = false;
			state.donations = data;
		}
	);
});
</script>

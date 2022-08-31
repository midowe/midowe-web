<template>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<h6 class="title uppercase text-center">
				Contribuições recebidas ({{ campaign.attributes.total_donations }})
			</h6>
			<hr />
			<ul v-if="state.donations.length > 0">
				<li
					class="contribution-item"
					v-for="donation in state.donations"
					:key="donation.id"
				>
					<h4>
						<span v-if="campaign.attributes.hide_donated_amount"
							>+1 <i class="ti-heart"></i
						></span>
						<span v-if="!campaign.attributes.hide_donated_amount">{{
							formatMoney(donation.attributes.amount)
						}}</span>
					</h4>
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
			</ul>
			<div v-show="state.loading" class="row">
				<div class="col-sm-12 text-center">
					<div class="spinner"></div>
				</div>
			</div>

			<div v-show="!state.loading && state.isMore" class="text-center">
				<button class="btn" @click="loadMore">Mais</button>
			</div>
			<!-- TODO: LOAD MORE -->
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

const state = reactive({
	loading: true,
	donations: [],
	isMore: false,
	pageNumber: 1,
});

const pageSize = 12;

const loadMore = () => {
	state.loading = true;

	getDonations(
		config.public.endpointCms,
		props.campaign.id,
		state.pageNumber,
		pageSize
	)
		.then((data) => {
			state.donations = [...state.donations, ...data];
			state.isMore = data.length === pageSize;
			state.pageNumber = state.pageNumber + 1;
		})
		.finally(() => {
			state.loading = false;
		});
};

onMounted(() => {
	loadMore();
});
</script>

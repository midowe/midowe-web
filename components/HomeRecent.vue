<template>
	<section>
		<div class="container">
			<div class="row mb64 mb-xs-24">
				<div class="col-sm-12 text-center">
					<h4 class="uppercase mb16">Explore</h4>
					<p class="lead">Campanhas adicionadas recentimente</p>
				</div>
			</div>
			<div v-if="state.loading" class="row">
				<div class="col-sm-12 text-center">
					<div class="spinner"></div>
				</div>
			</div>
			<div v-if="!state.loading" class="row">
				<div class="col-sm-12">
					<div class="lightbox-grid square-thumbs">
						<ul>
							<li v-for="campaign in state.campaigns" :key="campaign.id">
								<card-campaign :campaign="campaign" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<br />
			<div class="row">
				<div class="col-sm-12 text-center">
					<NuxtLink to="/explore">
						<button class="btn">Continuar a explorar</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.lightbox-grid ul {
	margin-bottom: 0;
}
</style>

<script lang="ts" setup>
import { getCampaigns } from "~~/clients/campaign-client";

const state = reactive({ loading: true, campaigns: [] });

onMounted(() => {
	getCampaigns().then((data) => {
		state.loading = false;
		state.campaigns = data;
	});
});
</script>

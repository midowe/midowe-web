<template>
	<section>
		<div class="container">
			<div class="row mb64 mb-xs-24">
				<div class="col-sm-12 text-center">
					<h4 class="uppercase mb16">Acontecendo agora</h4>
					<p class="lead">Campanhas que vem ganhado destaque</p>
				</div>
			</div>
			<div v-if="state.loading" class="row">
				<div class="col-sm-12 text-center">
					<div class="spinner"></div>
				</div>
			</div>
			<div v-if="!state.loading" class="row">
				<div class="col-sm-12">
					<div class="lightbox-grid">
						<ul>
							<li v-for="campaign in state.campaigns" :key="campaign.id">
								<card-campaign :campaign="campaign" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { getTrendingCampaigns } from "~~/clients/campaign-client";

const config = useRuntimeConfig();

const state = reactive({ loading: true, campaigns: [] });

onMounted(() => {
	getTrendingCampaigns(config.public.endpointCms).then((data) => {
		state.loading = false;
		state.campaigns = data;
	});
});
</script>

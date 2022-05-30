<template>
	<section class="pt-0">
		<div class="container">
			<div class="row mb64 mb-xs-24">
				<div class="col-sm-12 text-center">
					<h4 class="uppercase mb16">Acontecendo agora</h4>
					<p class="lead">
						Campanhas de angariação de fundos que vem ganhado destaque.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="lightbox-grid">
						<ul>
							<li v-for="campaign in campaigns" :key="campaign.id">
								<card-campaign :campaign="campaign" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { getTrendingCampaigns } from "~~/clients/campaign-client";

export default defineComponent({
	data() {
		return {
			campaigns: [],
		};
	},
	async setup() {
		const campaigns = await getTrendingCampaigns();
		return { campaigns };
	},
});
</script>

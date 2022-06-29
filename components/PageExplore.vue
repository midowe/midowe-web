<template>
	<div class="bg-secondary ptb-80">
		<div class="container">
			<div class="col-md-10 col-md-push-2">
				<!--<div class="row masonry-loader">
					<div class="col-sm-12 text-center">
						<div class="spinner"></div>
					</div>
				</div>-->
				<grid-campaigns :campaigns="campaigns" />

				<widget-pagination />
			</div>
			<div class="col-md-2 col-md-pull-10 hidden-sm">
				<widget-search />
				<widget-categories />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { getCampaigns } from "~~/clients/campaign-client";

const config = useRuntimeConfig();
const route = useRoute();

const searchCriteria: string = "";

const campaigns = await getCampaigns(config.public.endpointCms);

useHead({
	title: "Explorar",
});
</script>

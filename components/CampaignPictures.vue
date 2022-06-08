<template>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<h6 class="title uppercase text-center">Imagens</h6>
			<hr />
			<ul class="image-list">
				<li v-for="image in images" :key="image.id">
					<a :href="image.attributes.url" target="_blank">
						<div
							class="fadeIn campaign-image"
							:style="`background: url('${image.attributes.formats.small.url}')`"
						></div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.image-list {
	display: flex;
	gap: 15px;
}
.campaign-image {
	width: 100px;
	height: 100px;
	background-size: cover !important;
}
</style>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();
const images = props.campaign.attributes.images.data;
</script>

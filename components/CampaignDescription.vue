<template>
	<div class="row mb32 mb-xs-16">
		<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
			<h6 class="title uppercase text-center">Sobre esta causa</h6>
			<hr />
			<div class="description-area" v-html="markdownToHtml"></div>
		</div>
	</div>
</template>

<style lang="scss">
.description-area {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-bottom: 10px !important;
	}
}
</style>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";
import MarkdownIt from "markdown-it";

let md = new MarkdownIt();

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();
const campaign = props.campaign;
const markdownToHtml = md.render(props.campaign.attributes.description);
</script>

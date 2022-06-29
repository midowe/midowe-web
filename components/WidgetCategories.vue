<template>
	<div class="widget">
		<h6 class="title">Categorias</h6>
		<hr />
		<ul>
			<li v-for="category in categories" :key="category.id">
				<NuxtLink :to="`/explore?category=${category.id}`">
					{{ category.attributes.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped>
ul {
	line-height: 32px;
}
ul a:after {
	content: "\e628";
	font-family: "themify";
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	font-size: 11px;
	display: inline-block;
	margin-left: 8px;
}
</style>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { getAllCategories } from "~~/clients/category-client";

const config = useRuntimeConfig();

const categories = await getAllCategories(config.public.endpointCms);
</script>

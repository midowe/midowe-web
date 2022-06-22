<template>
	<NuxtLink :to="`/explore?category=${props.category.id}`">
		<div class="card-category">
			<h1>{{ props.category.attributes.name }}</h1>
			<p>
				{{ props.category.attributes.description }}
			</p>
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.card-category {
	background: #f0f0f0;
	padding: 10px 10px;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	h1 {
		color: #3f13b9ae;
		font-size: 14pt;
		margin: 0;
		line-height: 30px;
	}

	p {
		margin: 0;
		color: rgb(39, 38, 38);
		font-size: 11px;
		display: -webkit-box;
		max-width: 200px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
}
.card-category:hover {
	background: #e8e8e8;
}
</style>

<script setup lang="ts">
import { Category } from "~~/clients/category-client";

interface Props {
	category: Category;
}

const props = defineProps<Props>();
</script>

<template>
	<section class="bg-secondary">
		<div class="container">
			<div class="row mb64 mb-xs-24">
				<div class="col-sm-12 text-center">
					<h4 class="uppercase mb16">Categorias</h4>
					<p class="lead">
						Encontre as diferentes categorias de campanhas que lhe interessam
					</p>
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
							<li v-for="category in state.categories" :key="category.id">
								<card-category :category="category" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { getAllCategories } from "~~/clients/category-client";

const config = useRuntimeConfig();

const state = reactive({ loading: true, categories: [] });

onMounted(() => {
	getAllCategories(config.public.endpointCms).then((data) => {
		state.loading = false;
		state.categories = data;
	});
});
</script>

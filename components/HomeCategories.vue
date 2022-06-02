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
			<div class="row">
				<div class="col-sm-12">
					<div class="lightbox-grid square-thumbs">
						<ul>
							<li v-for="category in categories" :key="category.id">
								<card-category :category="category" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllCategories } from "~~/clients/category-client";

export default defineComponent({
	async setup() {
		const categories = await getAllCategories();
		return { categories };
	},
});
</script>

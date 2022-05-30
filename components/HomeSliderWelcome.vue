<template>
	<section>
		<div class="container">
			<Splide :options="options" aria-label="">
				<SplideSlide>
					<div class="row v-align-children">
						<div class="col-md-7 col-md-offset-1 col-sm-6 text-center mb-xs-24">
							<img
								class="cast-shadow mb-40 br-15"
								alt=""
								src="/slide-1-make-a-change.jpeg"
							/>
						</div>
						<div class="col-md-3 col-sm-5 pr-5">
							<h4 class="text-color-primary">
								Um lugar para fazer coisas boas acontecerem
							</h4>
							<p>
								Nós acreditamos que pessoas podem fazer a diferença. Que sonhos
								podem tornar-se realidade, e que o futuro pode ser melhor que o
								passado!
							</p>
						</div>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div class="row v-align-children">
						<div class="col-md-3 col-md-offset-1 col-sm-5 pr-5 text-right">
							<h4 class="text-color-primary">Um lugar para causas sociais</h4>
							<p>
								Contribua para campanhas de angariação de fundos para causas
								sociais. Apoie iniciativas relacionadas a solidariedade, saúde e
								caridade!
							</p>
						</div>
						<div class="col-md-7 col-sm-6 text-center mb-xs-24">
							<img
								class="cast-shadow br-15"
								alt=""
								src="/slide-2-ciclone.jpeg"
							/>
						</div>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div class="row v-align-children">
						<div class="col-md-7 col-md-offset-1 col-sm-6 text-center mb-xs-24">
							<img
								class="cast-shadow br-15"
								alt=""
								src="/slide-3-creators.jpeg"
							/>
						</div>
						<div class="col-md-3 col-sm-5 pr-5">
							<h4 class="text-color-primary">
								Um lugar para criadores e artistas
							</h4>
							<p>
								Apoie os artistas que criam as coisa que gostas. Partilhe o seu
								trabalho e tenha o suporte dos seus fãs!
							</p>
						</div>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div class="row v-align-children">
						<div class="col-md-3 col-md-offset-1 col-sm-5 pr-5 text-right">
							<h4 class="text-color-primary">
								Um lugar para materializar sonhos
							</h4>
							<p>
								Obtenha apoio para projectos pessoas, eventos, ou situações não
								previstas do dia a dia. Ou esteja em frente de uma campanha para
								ajudar alguém!
							</p>
						</div>
						<div class="col-md-7 col-sm-6 text-center mb-xs-24">
							<img
								class="cast-shadow br-15"
								alt=""
								src="/slide-4-dreams.jpeg"
							/>
						</div>
					</div>
				</SplideSlide>
			</Splide>
		</div>
	</section>
</template>

<script lang="ts">
import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	components: {
		Splide,
		SplideSlide,
	},

	setup() {
		const options: Options = {
			rewind: true,
			autoplay: true,
		};
		return {
			options,
		};
	},
});
</script>

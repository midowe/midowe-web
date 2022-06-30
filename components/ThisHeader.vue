<template>
	<div class="nav-container">
		<nav>
			<div :class="`nav-bar text-center ${state.isNavOpen ? 'nav-open' : ''}`">
				<div class="col-md-2 col-md-push-5 col-sm-12 text-center">
					<NuxtLink to="/" @click="closeNav">
						<img alt="logo" class="image-xxs" src="/midowe.png" />
					</NuxtLink>
				</div>

				<div class="col-sm-12 col-md-5 col-md-pull-2 overflow-hidden-xs">
					<ul class="menu inline-block pull-right">
						<li :class="`${state.path === '/register' ? 'active' : ''}`">
							<NuxtLink to="/register" @click="closeNav"
								>Criar campanha</NuxtLink
							>
						</li>
						<li :class="`${state.path === '/explore' ? 'active' : ''}`">
							<NuxtLink to="/explore" @click="closeNav">Explorar</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="col-sm-12 col-md-5 pb-xs-24">
					<ul class="menu">
						<li :class="`${state.path === '/terms' ? 'active' : ''}`">
							<NuxtLink to="/terms" @click="closeNav">Termos de Uso</NuxtLink>
						</li>
						<li :class="`${state.path === '/privacy' ? 'active' : ''}`">
							<NuxtLink to="/privacy" @click="closeNav">Privacidade</NuxtLink>
						</li>
					</ul>
				</div>
			</div>

			<div
				:class="`module widget-handle mobile-toggle right visible-sm visible-xs absolute-xs ${
					state.isNavOpen ? 'active toggle-widget-handle' : ''
				}`"
				@click="toggleNav"
			>
				<i class="ti-menu"></i>
			</div>
		</nav>
	</div>
</template>

<style scoped>
.active a {
	opacity: 1 !important;
}
</style>

<script lang="ts" setup>
const state = reactive({ isNavOpen: false, path: "" });
const route = useRoute();

state.path = route.path;

watch(route, () => {
	state.path = route.path;
});

const toggleNav = () => {
	state.isNavOpen = !state.isNavOpen;
};

const closeNav = () => {
	state.isNavOpen = false;
};
</script>

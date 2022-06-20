<template>
	<div class="nav-container">
		<nav>
			<div class="nav-bar text-center">
				<div class="col-md-2 col-md-push-5 col-sm-12 text-center">
					<NuxtLink to="/">
						<img alt="logo" class="image-xxs" src="/midowe.png" />
					</NuxtLink>
				</div>

				<div class="col-sm-12 col-md-5 col-md-pull-2 overflow-hidden-xs">
					<ul class="menu inline-block pull-right">
						<li>
							<NuxtLink to="/explore">Explorar</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about">Sobre Nós</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="col-sm-12 col-md-5 pb-xs-24">
					<ul class="menu">
						<li>
							<NuxtLink to="/terms">Termos de Uso</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/privacy">Privacidade</NuxtLink>
						</li>
					</ul>
				</div>
			</div>

			<div
				class="module widget-handle mobile-toggle right visible-sm visible-xs absolute-xs"
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

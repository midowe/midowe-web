<template>
	<footer class="footer-2 bg-dark text-center-xs">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<ul class="footer-menu">
						<li><NuxtLink to="/about">Sobre Nós</NuxtLink></li>
						<li><NuxtLink to="/faq">Perguntas frequentes</NuxtLink></li>
					</ul>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-4">
					<a href="#"
						><img class="image-xxs" alt="Pic" src="/midowe-white.png"
					/></a>
				</div>

				<div class="col-sm-4 text-center">
					<span class="fade-half">
						Construido com ❤ {{ new Date().getFullYear() }} Midowe
					</span>
				</div>

				<div class="col-sm-4 text-right text-center-xs">
					<ul class="list-inline social-list">
						<li>
							<a href="mailto:support@midowe.co.mz"><i class="ti-email"></i></a>
						</li>
						<li>
							<a href="https://www.instagram.com/midowemz/" target="_blank"
								><i class="ti-instagram"></i
							></a>
						</li>
						<li>
							<a href="https://www.facebook.com/midowemz" target="_blank"
								><i class="ti-facebook"></i
							></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
footer {
	padding: 30px 0;
}
.footer-menu {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	text-transform: uppercase;
	flex-direction: column;
}
.footer-menu a {
	font-weight: 300;
}
</style>

<template>
	<div>
		<section class="page-title page-title-3 bg-secondary">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h3 class="uppercase mb0">Perguntas Frequentes</h3>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-sm-10 col-sm-offset-1">
						<h4>1. - Quanto se paga pelo uso do Midowe?</h4>
						<p>
							O midowe não cobra nenhum valor para o uso da plataforma.
							Entretanto, alguns serviços de integração (como o M-pesa) fazem
							cobranças de taxas sobre cada doação efectuada.
						</p>

						<br />
						<h4>2. - Quais são os custos envolvidos em cada doação?</h4>
						<p>
							Cada transação feita está sujeita a cobrança pelo lado do payment
							gateway. Por exemplo, no caso do m-pesa, eles aplicam uma taxa de
							3% em cada transação, tanto doação como de envio do valor doado
							para o criador. Isto significa que se alguém doa 100MT o m-pesa
							vai tirar 3% (3MT) ficando 97MT. Ao enviarmos o 97MT ao criador o
							m-pesa volta a tirar 3% (2,91MT)% ficando o beneficiário com
							94,09MT. Essas taxas variam de payment gateway, sendo que os
							bancos e o paypal aplicam outro modelo de cobrança.
						</p>

						<br />
						<h4>
							3. - Como é que o criador/artista (beneficiário) recebe o valor
							doado?
						</h4>
						<p>
							O valor é transferido via m-pesa ou conta bancária, com base em um
							dos seguintes critérios:
						</p>

						<ul>
							<li>
								Período definido
								<ul>
									<li>Semanalmente</li>
									<li>Mensalmente</li>
								</ul>
							</li>
							<li>
								Fim da campanha
								<ul>
									<li>Uma vez que se angaria o valor desejado, se aplicável</li>
									<li>
										Uma vez que se atinge a data limite da campanha, se
										aplicável
									</li>
								</ul>
							</li>
							<li>
								Quantia parcial alcançada
								<ul>
									<li>A cada “x”%. Ex: 25%, 50%, 75%, 100%, se aplicável</li>
									<li>
										A cada “n”MT. Ex: de 100MT em 100MT, de 1000MT em 1000MT
									</li>
								</ul>
							</li>
							<li>A pedido do proprio beneficiario para a equipe do MIDOWE</li>
						</ul>
						<p>
							Nota: É necessário que a conta tenha um saldo mínimo de 100MT para
							que se faça a transferência  do valor doado.
						</p>

						<br />
						<h4>4. - Como é que a plataforma Midowe se sustenta?</h4>
						<p>
							O midowe é uma plataforma 100% gratis. E para continuar a servir
							ao povo, aquando da doação, sugerimos aos doadores a opção de
							contribuir para a manutenção da plataforma fornecendo-nos uma
							gorjeta por cima do valor doado.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
ul {
	padding: inherit;
	padding-inline-start: 40px;
	list-style: initial;
}
</style>

<script setup>
useHead({
	title: "Perguntas frequentes",
});
</script>

<template>
	<section class="container pt0">
		<div class="row mb16 mb-xs-0">
			<div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
				<form class="donation-form" @submit.prevent="handleSubmit">
					<div class="row">
						<div class="col-sm-3 input-with-label text-left">
							<span>Pagar com:</span>
							<ul class="payment-method">
								<li class="selected"><img src="/mpesa-logo.jpeg" alt="" /></li>
							</ul>
						</div>
						<div class="col-sm-9 input-with-label text-left">
							<span>Número de telefone (M-Pesa):</span>
							<input type="text" placeholder="+258:" v-model="state.phone" />
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Valor da contribuição</span>
							<ul class="amount-options">
								<li v-for="option in [100, 200, 500, 1000]" :key="option">
									<a
										@click="state.amount = option"
										:class="`btn ${state.amount == option ? 'btn-filled' : ''}`"
									>
										{{ formatMoney(option) }}
									</a>
								</li>
								<li>
									<a
										@click="state.amount = 0"
										:class="`btn ${state.amount == 0 ? 'btn-filled' : ''}`"
										>Outro</a
									>
								</li>
							</ul>
						</div>
					</div>

					<div v-show="state.amount === 0" class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Especifique o valor (MT): </span>
							<input
								type="number"
								class="form-input"
								v-model="state.customAmout"
								placeholder=""
							/>
						</div>
					</div>

					<div v-show="state.receiveRecepit" class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Seu e-mail:</span>
							<input type="text" v-model="state.email" />
						</div>
					</div>
					<div v-show="state.receiveRecepit || state.leaveMessage" class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Seu nome:</span>
							<input type="text" v-model="state.fullName" />
						</div>
					</div>
					<div v-show="state.leaveMessage" class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Mensagem de apoio a campanha:</span>
							<textarea v-model="state.message" />
						</div>
					</div>

					<div class="check-options">
						<div class="row">
							<div class="col-sm-12">
								<input
									id="receipt"
									type="checkbox"
									v-model="state.receiveRecepit"
								/>
								<label for="receipt"
									>Receber por e-mail o recibo desta transação</label
								>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<input
									id="leave-message"
									type="checkbox"
									v-model="state.leaveMessage"
								/>
								<label for="leave-message">
									Deixar ficar uma mensagem para esta campanha</label
								>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-8 col-md-offset-2 input-with-label text-left">
							<button class="action-button" type="submit">
								<span>Apoiar com</span>
								<span v-show="state.amount !== 0">{{
									formatMoney(state.amount)
								}}</span>
								<span v-show="state.amount === 0">{{
									formatMoney(state.customAmout)
								}}</span>
								<i class="ti-heart"></i>
							</button>
							<br />
							<p class="text-center">
								<small>
									Ao continuar significa que concorda com os
									<NuxtLink to="/terms">termos e condições</NuxtLink></small
								>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
	<section v-if="state.isProcessing" class="section-confirm">
		<div class="col-sm-12 text-center box">
			<div class="spinner"></div>

			<img src="/mpesa-logo.jpeg" alt="" />

			<p>
				Confirme a transação <strong>{{ state.thirdPartyRef }}</strong> no seu
				número
				<strong>{{ state.phone }}</strong>
			</p>
		</div>
	</section>
</template>

<style scoped lang="scss">
.payment-method {
	display: flex;
	gap: 20px;
	li {
		border: 2px solid white;
		padding: 1px;
	}
	img {
		max-width: 114px;
	}
	.selected {
		border-color: #3e13b9;
	}
}
.donation-form {
	margin-top: 35px;
}
input[type="checkbox"] {
	margin: 0 10px 0 0;
}
.amount-options {
	display: flex;
	margin-bottom: 0;

	.btn {
		width: 100%;
		padding: 5px 0;
		min-width: 100px;
		height: auto;
	}

	.btn:hover {
		background-color: white;
		color: #3e13b9;
	}

	.btn-filled:hover {
		background-color: #3e13b9;
		color: white;
	}

	li {
		width: 100%;
	}

	li:not(:last-child) .btn {
		border-right: none;
	}
}
.check-options {
	margin-bottom: 13px;
}
.section-confirm {
	position: fixed;
	z-index: 999;
	background-color: rgba(255, 255, 255, 0.93);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;

	img {
		width: 130px;
		margin-top: 20px;
	}
	.box {
		align-items: center;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 400px;
		border: 1px solid lightgrey;
		padding: 40px 20px 20px 20px;
		border-radius: 3px;
		box-shadow: 0 0 10px rgb(236, 236, 236);
	}
}
.action-button {
	display: flex;
	align-items: center;
	gap: 5px;
	justify-content: center;
	span {
		color: white;
		cursor: pointer;
	}
}
</style>

<script setup lang="ts">
import { formatMoney } from "~~/helpers/formatter";
import { DonationRequest, registerDonation } from "~~/clients/accouting-client";
import { Campaign } from "~~/clients/campaign-client";
import { makeid } from "~~/helpers/random";

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();

const state = reactive({
	receiveRecepit: false,
	leaveMessage: false,
	phone: "",
	amount: 500,
	customAmout: 50,
	email: "",
	fullName: "",
	message: "",
	isProcessing: false,
	thirdPartyRef: makeid(6),
});

function handleSubmit() {
	state.isProcessing = true;
	//TODO: Form validation

	const request: DonationRequest = {
		account_id: props.campaign.attributes.fundraiser.data.attributes.email,
		campaign_id: props.campaign.attributes.slug,
		campaign_name: props.campaign.attributes.title,
		amount: state.amount === 0 ? `${state.customAmout}` : `${state.amount}`,
		third_party_reference: state.thirdPartyRef,
		payment_method: "mpesa",
		payment_address: state.phone,
		supporter_email: state.email !== "" ? state.email : null,
		supporter_name: state.fullName,
		supporter_message: state.message,
	};

	registerDonation(request)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log("handle communication and internal server errors");
			console.log(err);
		})
		.finally(() => {
			state.isProcessing = false;
		});
}
</script>

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
						<div
							class="col-sm-9 input-with-label text-left"
							style="margin-bottom: 10px"
						>
							<span>Número de telefone (M-Pesa):</span>
							<input
								type="number"
								class="form-input"
								placeholder="+258:"
								required
								minlength="9"
								maxlength="9"
								v-model="state.phone"
							/>
							<p class="err-message" v-if="err.errPhone">
								<small
									>O número de telefone deve começar com "84" ou "85" e conter 9
									dígitos</small
								>
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Valor da contribuição</span>
							<ul class="amount-options">
								<li v-for="option in [10, 50, 100, 200]" :key="option">
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

					<div
						v-if="state.amount === 0"
						class="row"
						style="margin-bottom: 24px"
					>
						<div class="col-sm-12 input-with-label text-left">
							<span>Especifique o valor (MT): </span>
							<input
								type="number"
								class="form-input"
								v-model="state.customAmout"
								placeholder=""
								required
								min="1"
								max="125000"
							/>
						</div>
					</div>

					<div
						v-if="state.receiveRecepit || state.leaveMessage"
						class="row"
						style="margin-bottom: 24px"
					>
						<div class="col-sm-12 input-with-label text-left">
							<span>Seu nome:</span>
							<input type="text" v-model="state.fullName" />
						</div>
					</div>
					<div v-if="state.leaveMessage" class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Mensagem de apoio a campanha:</span>
							<textarea minlength="3" v-model="state.message" />
						</div>
					</div>

					<div
						v-if="state.receiveRecepit"
						class="row"
						style="margin-bottom: 24px"
					>
						<div class="col-sm-12 input-with-label text-left">
							<span>Seu e-mail:</span>
							<input
								type="email"
								required
								class="form-input"
								v-model="state.email"
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12 input-with-label text-left">
							<span>Dê uma gorjeta a plataforma:</span>
							<div class="alert alert-success" role="alert">
								O midowe cobra 0% de taxa ao
								<strong>{{
									props.campaign.attributes.fundraiser.data.attributes.full_name
								}}</strong
								>. Para que possamos continuar a ajudar mais pessoas, pedimos
								que deixe ficar uma gorjeta:

								<div class="range-slider">
									<input
										class="range-slider__range"
										type="range"
										v-model="state.tipPercent"
										min="0"
										max="50"
									/>
									<span class="range-slider__value"
										>{{ state.tipPercent }} %</span
									>
								</div>
							</div>
						</div>
					</div>

					<div class="check-options">
						<div class="row">
							<div class="col-sm-12">
								<input
									id="leave-message"
									type="checkbox"
									v-model="state.leaveMessage"
								/>
								<label for="leave-message">
									Deixar ficar seu nome ou uma mensagem</label
								>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<input
									id="receipt"
									type="checkbox"
									v-model="state.receiveRecepit"
								/>
								<label for="receipt">Receber por e-mail o comprovativo</label>
							</div>
						</div>
					</div>

					<div class="row" v-if="state.errorMessage !== ''">
						<div class="col-sm-12">
							<div class="alert alert-warning" role="alert">
								<button type="button" class="close" aria-label="Close"></button>
								{{ state.errorMessage }}
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-8 col-md-offset-2 input-with-label text-left">
							<button class="action-button mb5" type="submit">
								<span>Apoiar com</span>
								<span v-show="state.amount !== 0">{{
									formatMoney(state.amount + calcTipAmount())
								}}</span>
								<span v-show="state.amount === 0">{{
									formatMoney(state.customAmout + calcTipAmount())
								}}</span>
								<i class="ti-heart"></i>
							</button>
							<p class="mb0 text-center">
								<b
									>Será cobrado
									<b v-show="state.amount !== 0">{{
										formatMoney(state.amount)
									}}</b>
									<b v-show="state.amount === 0">{{
										formatMoney(state.customAmout)
									}}</b>
									+
									{{ formatMoney(calcTipAmount()) }} de gorjeta</b
								>
							</p>
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

			<div>
				<p>
					Confirme a transação: <strong>{{ state.thirdPartyRef }}</strong>
				</p>
				<p>
					Número M-Pesa: <strong>{{ state.phone }}</strong>
				</p>
				<p>
					Valor:
					<strong v-show="state.amount !== 0">{{
						formatMoney(state.amount + calcTipAmount())
					}}</strong>
					<strong v-show="state.amount === 0">{{
						formatMoney(state.customAmout + calcTipAmount())
					}}</strong>
				</p>
				<p>Comerciante: <strong>UAUU</strong></p>
			</div>
		</div>
	</section>
	<section v-if="state.isSuccess" class="section-success">
		<div class="col-sm-12 text-center box">
			<img src="/hands-holding-words-thank-you.png" alt="" />

			<h1>{{ props.campaign.attributes.thank_you_message }}</h1>
			<div>
				<h2 style="margin-bottom: 0; line-height: initial">
					Quantia:
					<span v-show="state.amount !== 0">{{
						formatMoney(state.amount)
					}}</span>
					<span v-show="state.amount === 0">{{
						formatMoney(state.customAmout)
					}}</span>
				</h2>

				<h2>
					Gorjeta:
					<span v-show="calcTipAmount() !== 0">{{
						formatMoney(calcTipAmount())
					}}</span>
				</h2>
			</div>

			<NuxtLink :to="`/${props.campaign.attributes.slug}`"
				><a class="btn"> Fechar </a></NuxtLink
			>
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

@media all and (max-width: 767px) {
	.amount-options {
		flex-wrap: wrap;

		li {
			width: 45%;
		}

		li:not(:last-child) .btn {
			border-right: 2px solid #3e13b9;
		}
	}
	.section-success {
		.box {
			max-width: 354px !important;
		}
	}
}

.check-options {
	margin-bottom: 13px;
}
.section-confirm {
	position: fixed;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.38);
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
		padding: 40px 20px 20px 20px;
		border-radius: 3px;
		box-shadow: 0 0 10px rgb(137, 137, 137);
		margin-top: -10%;
	}

	p {
		margin: 0;
	}
}
.section-success {
	position: fixed;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.38);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;

	.box {
		align-items: center;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		max-width: 401px;
		border-radius: 3px;
		box-shadow: 0 0 10px rgb(137, 137, 137);
		padding: 0;
		margin-top: -10%;
	}

	h1 {
		font-size: 20px;
		padding: 10px 20px;
		line-height: 25px;
		color: #3e13b9;
		margin: 25px 0 10px;
		max-height: 35vh;
		overflow: auto;
	}
	h2 {
		font-size: 15px;
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
.form-input,
input[type="text"] {
	margin-bottom: 0;
}
.mb-d {
	margin-bottom: 10px;
}
.err-message {
	margin: 0;
	padding: 0;
	color: rgb(197, 18, 8);
}

// Base Colors
$shade-10: #2c3e50 !default;
$shade-1: #d7dcdf !default;
$shade-0: #fff !default;
$teal: #1abc9c !default;

// Reset
.range-slider {
	margin: 20px 0 0 0%;
}

// Range Slider
$range-width: 100% !default;

$range-handle-color: $shade-10 !default;
$range-handle-color-hover: $teal !default;
$range-handle-size: 20px !default;

$range-track-color: $shade-1 !default;
$range-track-height: 10px !default;

$range-label-color: $shade-10 !default;
$range-label-width: 60px !default;

.range-slider {
	width: $range-width;
	display: flex;
	margin: 10px 0;
}

.range-slider__range {
	-webkit-appearance: none;
	width: calc(100% - (#{$range-label-width + 13px}));
	height: $range-track-height;
	border-radius: 5px;
	background: $range-track-color;
	outline: none;
	padding: 0;
	margin: 10px 0 0 0;

	// Range Handle
	&::-webkit-slider-thumb {
		appearance: none;
		width: $range-handle-size;
		height: $range-handle-size;
		border-radius: 50%;
		background: $range-handle-color;
		cursor: pointer;
		transition: background 0.15s ease-in-out;

		&:hover {
			background: $range-handle-color-hover;
		}
	}

	&:active::-webkit-slider-thumb {
		background: $range-handle-color-hover;
	}

	&::-moz-range-thumb {
		width: $range-handle-size;
		height: $range-handle-size;
		border: 0;
		border-radius: 50%;
		background: $range-handle-color;
		cursor: pointer;
		transition: background 0.15s ease-in-out;

		&:hover {
			background: $range-handle-color-hover;
		}
	}

	&:active::-moz-range-thumb {
		background: $range-handle-color-hover;
	}

	// Focus state
	&:focus {
		&::-webkit-slider-thumb {
			box-shadow: 0 0 0 3px $shade-0, 0 0 0 6px $teal;
		}
	}
}

// Range Label
.range-slider__value {
	display: inline-block;
	position: relative;
	width: $range-label-width;
	color: $shade-0;
	line-height: 20px;
	text-align: center;
	border-radius: 3px;
	background: $range-label-color;
	padding: 5px 10px;
	margin-left: 8px;

	&:after {
		position: absolute;
		top: 8px;
		left: -7px;
		width: 0;
		height: 0;
		border-top: 7px solid transparent;
		border-right: 7px solid $range-label-color;
		border-bottom: 7px solid transparent;
		content: "";
	}
}

// Firefox Overrides
::-moz-range-track {
	background: $range-track-color;
	border: 0;
}

input::-moz-focus-inner,
input::-moz-focus-outer {
	border: 0;
}
</style>

<script setup lang="ts">
import { formatMoney } from "~~/helpers/formatter";
import { DonationRequest, registerDonation } from "~~/clients/accouting-client";
import { Campaign } from "~~/clients/campaign-client";
import { makeid } from "~~/helpers/random";

const config = useRuntimeConfig();

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();

const state = reactive({
	receiveRecepit: false,
	leaveMessage: false,
	phone: "",
	amount: 100,
	customAmout: 500,
	email: "",
	fullName: "",
	message: "",
	tipPercent: 10,
	isProcessing: false,
	isSuccess: false,
	thirdPartyRef: makeid(6),
	errorMessage: "",
});

const err = reactive({
	errPhone: false,
	errEmail: false,
	errName: false,
	errMessage: false,
});

onMounted(() => {
	if (localStorage != undefined) {
		state.phone = localStorage.getItem("midowe_donor_phone") ?? "";
		state.email = localStorage.getItem("midowe_donor_email") ?? "";
		state.fullName = localStorage.getItem("midowe_donor_full_name") ?? "";

		if (state.email !== "") {
			state.receiveRecepit = true;
		}
	}
});

function validateInput(): boolean {
	//reset
	err.errPhone = false;

	// check if phone is valid
	const phone = state.phone + "";
	if (
		phone.length !== 9 ||
		(!phone.startsWith("84") && !phone.startsWith("85"))
	) {
		err.errPhone = true;
		return false;
	}

	return true;
}

const calcTipAmount = () => {
	const billing = state.amount === 0 ? state.customAmout : state.amount;
	const tip = (state.tipPercent / 100) * billing;
	return Math.ceil(tip);
};

function handleSubmit() {
	if (!validateInput()) {
		return;
	}
	state.isProcessing = true;
	state.errorMessage = "";

	const request: DonationRequest = {
		account_id: props.campaign.attributes.fundraiser.data.attributes.email,
		campaign_id: props.campaign.id,
		fundraiser_name:
			props.campaign.attributes.fundraiser.data.attributes.full_name,
		campaign_name: props.campaign.attributes.title,
		amount: state.amount === 0 ? state.customAmout : state.amount,
		tip_percent: state.tipPercent / 100,
		third_party_reference: state.thirdPartyRef,
		payment_method: "mpesa",
		payment_address: `258${state.phone}`,
		supporter_email: state.email !== "" ? state.email : null,
		supporter_name: state.fullName,
		supporter_message: state.message,
	};

	registerDonation(config.public.endpointAccouting, request)
		.then((data) => {
			if (data.Success === true || data.payment_response.Success === true) {
				// Persist for next usage
				if (localStorage != undefined) {
					localStorage.setItem("midowe_donor_phone", state.phone);
					localStorage.setItem("midowe_donor_email", state.email);
					localStorage.setItem("midowe_donor_full_name", state.fullName);
				}

				state.isSuccess = true;
			} else {
				state.errorMessage = JSON.stringify(data);
			}
		})
		.catch((err) => {
			if (err.code === "ERR_BAD_REQUEST") {
				state.errorMessage = `Transação não processada: ${err.response.data.ResponseDescription}`;
			} else {
				state.errorMessage = `${err.code} - ${err.response.data}`;
			}
		})
		.finally(() => {
			state.isProcessing = false;
		});
}
</script>

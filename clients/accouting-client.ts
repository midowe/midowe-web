import axios from "axios";

export interface DonationRequest {
	account_id: string;
	campaign_id: number;
	fundraiser_name: string;
	campaign_name: string;
	amount: number;
	tip_percent: number;
	third_party_reference: string;
	payment_method: string;
	payment_address: string;
	supporter_email: string | undefined;
	supporter_name: string;
	supporter_message: string;
}

export async function registerDonation(
	baseURL: string,
	request: DonationRequest
): Promise<any> {
	const axiosAccouting = axios.create({
		baseURL,
	});
	const response = await axiosAccouting.post("/", request);
	return response.data;
}

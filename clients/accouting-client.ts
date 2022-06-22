import { axiosAccouting } from "./_base-client";

export interface DonationRequest {
	account_id: string;
	campaign_id: number;
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

export async function registerDonation(request: DonationRequest): Promise<any> {
	const response = await axiosAccouting.post("/", request);
	return response.data;
}

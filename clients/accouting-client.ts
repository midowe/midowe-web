import { axiosAccouting } from "./_base-client";

export interface DonationRequest {
	account_id: string;
	campaign_id: string;
	campaign_name: string;
	amount: string;
	third_party_reference: string;
	payment_method: string;
	payment_address: string;
	supporter_email: string | undefined;
	supporter_name: string;
	supporter_message: string;
}

interface DonationResponse {
	Success: boolean;
	ResponseCode: string;
	ResponseDescription: string;
}

export async function registerDonation(
	request: DonationRequest
): Promise<DonationResponse> {
	const response = await axiosAccouting.post("/", request);
	return response.data as DonationResponse;
}

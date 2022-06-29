import axios from "axios";

export interface Donation {
	id: number;
	attributes: DonationAttributes;
}

interface DonationAttributes {
	amount: number;
	donor_name: string;
	donor_message: string;
	createdAt: string;
}

export async function getDonations(
	baseURL: string,
	campaignId: number,
	page: number = 1,
	pageSize: number = 12
): Promise<Donation[]> {
	const axiosCms = axios.create({
		baseURL,
	});
	const response = await axiosCms.get(
		`/donations?filters[campaign][id][$eq]=${campaignId}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:desc`
	);
	const donations = response.data.data as Donation[];
	return donations;
}

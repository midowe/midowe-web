import { axiosCms } from "./base-client";

export interface Campaign {
	id: number;
	attributes: CampaignAttributes;
}

interface CampaignAttributes {
	title: string;
	description: string;
	target_amount: number;
	total_amount: number;
	images: Images;
}

interface Images {
	data: CampaignImages[];
}

interface CampaignImages {
	id: number;
	attributes: ImageAttribute;
}

interface ImageAttribute {
	name: string;
	formats: ImageFormats;
}

interface ImageFormats {
	small: Image;
	medium: Image;
}

interface Image {
	url: string;
}

export async function getTrendingCampaigns(): Promise<Campaign[]> {
	const response = await axiosCms.get(
		"/campaigns?filters[on_spot][$eq]=true&populate=images"
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns;
}

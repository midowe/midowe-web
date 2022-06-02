import { Category } from "./category-client";
import { axiosCms } from "./_base-client";

export interface Campaign {
	id: number;
	attributes: CampaignAttributes;
}

interface CampaignAttributes {
	title: string;
	description: string;
	target_amount: number;
	total_amount: number;
	images: ImagesData;
	category: CategoryData;
}

interface ImagesData {
	data: CampaignImages[];
}

interface CategoryData {
	data: Category;
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

export async function getCampaigns(
	page: number = 1,
	pageSize: number = 12
): Promise<Campaign[]> {
	const response = await axiosCms.get(
		`/campaigns?populate=images,category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:desc`
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns;
}

export async function getCampaignsOfCategory(
	categoryId: number,
	page: number = 1,
	pageSize: number = 3
): Promise<Campaign[]> {
	const response = await axiosCms.get(
		`/campaigns?filters[category][id][$eq]=${categoryId}&populate=images&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns;
}

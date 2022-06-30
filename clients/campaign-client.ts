import { Category } from "./category-client";
import axios from "axios";

export interface Campaign {
	id: number;
	attributes: CampaignAttributes;
}

interface CampaignAttributes {
	slug: string;
	title: string;
	description: string;
	target_amount: number;
	total_amount: number;
	total_donations: number;
	target_date: string;
	images: ImagesData;
	category: CategoryData;
	fundraiser: FundraiserData;
	thank_you_message: string;
	verified: boolean;
}

interface ImagesData {
	data: Image[];
}

interface ImageData {
	data: Image;
}

interface CategoryData {
	data: Category;
}

interface FundraiserData {
	data: Fundraiser;
}

interface Image {
	id: number;
	attributes: ImageAttribute;
}

interface ImageAttribute {
	name: string;
	formats: ImageFormats;
	url: string;
}

interface ImageFormats {
	small: Image;
	medium: Image;
}

interface Image {
	url: string;
}

interface Fundraiser {
	id: number;
	attributes: FundraiserAttributes;
}

interface FundraiserAttributes {
	full_name: string;
	headline: string;
	picture: ImageData;
	email: string;
}

export async function getTrendingCampaigns(
	baseURL: string
): Promise<Campaign[]> {
	const axiosCms = axios.create({
		baseURL,
	});
	const response = await axiosCms.get(
		"/campaigns?filters[on_spot][$eq]=true&filters[approved][$eq]=true&populate=images"
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns;
}

export async function getCampaigns(
	baseURL: string,
	page: number = 1,
	pageSize: number = 12
): Promise<Campaign[]> {
	const axiosCms = axios.create({
		baseURL,
	});
	const response = await axiosCms.get(
		`/campaigns?filters[approved][$eq]=true&populate=images,category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:desc`
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns;
}

export async function getCampaign(
	baseURL: string,
	slug: any
): Promise<Campaign | undefined> {
	const axiosCms = axios.create({
		baseURL,
	});
	const response = await axiosCms.get(
		`/campaigns?filters[approved][$eq]=true&filters[slug][$eq]=${slug}&populate=images,category,fundraiser,fundraiser.picture`
	);
	const campaigns = response.data.data as Campaign[];
	return campaigns.length > 0 ? campaigns[0] : undefined;
}

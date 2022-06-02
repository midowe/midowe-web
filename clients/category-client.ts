import { axiosCms } from "./_base-client";

export interface Category {
	id: number;
	attributes: CategoryAttributes;
}

interface CategoryAttributes {
	name: string;
	description: string;
}

export async function getAllCategories(): Promise<Category[]> {
	const response = await axiosCms.get("/categories");
	const categories = response.data.data as Category[];
	return categories;
}

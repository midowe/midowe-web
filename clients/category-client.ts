import axios from "axios";

export interface Category {
	id: number;
	attributes: CategoryAttributes;
}

interface CategoryAttributes {
	name: string;
	description: string;
}

export async function getAllCategories(baseURL: string): Promise<Category[]> {
	const axiosCms = axios.create({
		baseURL,
	});
	const response = await axiosCms.get("/categories");
	const categories = response.data.data as Category[];
	return categories;
}

import axios from "axios";

export const axiosCms = axios.create({
	baseURL: "https://cms.dev.midowe.co.mz/api",
});

export const axiosAccouting = axios.create({
	baseURL:
		"https://eugqgyjdksk2hoi7rj6b23zjti0grskw.lambda-url.af-south-1.on.aws",
});

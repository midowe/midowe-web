import axios from "axios";

export const axiosCms = axios.create({
	baseURL: "https://cms.dev.midowe.co.mz/api",
});

export const axiosAccouting = axios.create({
	baseURL:
		"https://7wgwulf5j77dp6ypbnspcqxteu0rosoi.lambda-url.af-south-1.on.aws",
});

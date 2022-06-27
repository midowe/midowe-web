import axios from "axios";

const env = process.env.RUN_ENV || "dev";

const urls = {
	dev: {
		cms: "https://cms.dev.midowe.co.mz/api",
		accouting:
			"https://eugqgyjdksk2hoi7rj6b23zjti0grskw.lambda-url.af-south-1.on.aws",
	},
	prd: {
		cms: "https://cms.midowe.co.mz/api",
		accouting:
			"https://xlhofsmgf4o3xtpleqam77sd240braxu.lambda-url.af-south-1.on.aws",
	},
};

export const axiosCms = axios.create({
	baseURL: urls[env].cms,
});

export const axiosAccouting = axios.create({
	baseURL: urls[env].accouting,
});

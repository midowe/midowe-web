import axios from "axios";

export const axiosCms = axios.create({
	baseURL: "https://cms.dev.midowe.co.mz/api",
});

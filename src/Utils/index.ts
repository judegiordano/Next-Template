import { create } from "apisauce";

export { Cookie } from "./Cookie";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const ReadableDate = (dateIso: string) => {
	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone
	}).format(new Date(dateIso));
};

export const ReadableTime = (dateIso: string) => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZone
	}).format(new Date(dateIso));
};

export const RestClient = create({
	baseURL: "http://localhost:3000/api/example"
});

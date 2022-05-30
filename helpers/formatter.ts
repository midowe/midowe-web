const currencyFormatter = new Intl.NumberFormat("pt-MZ", {
	style: "currency",
	currency: "MZN",
});

export function formatMoney(value: number): string {
	return currencyFormatter.format(value).replace("MTn", "MT");
}

export function formatPercent(expected: number, current: number) {
	const num = (current / expected) * 100;
	const percent = Math.round((num + Number.EPSILON) * 100) / 100;
	return `${percent}%`;
}

export function formatYmdDate(fullDate: string) {
	const date = new Date(fullDate);
	return date.toISOString().split("T")[0];
}

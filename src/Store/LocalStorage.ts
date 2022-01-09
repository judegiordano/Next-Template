export function GetItem<T>(key: string) {
	const data = localStorage.getItem(key);
	return JSON.parse(data) as T;
}

export function SetItem<T>(key: string, data: T) {
	localStorage.setItem(key, JSON.stringify(data));
}

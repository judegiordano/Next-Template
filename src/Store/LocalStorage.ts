const storageKey = "next-demo.swr";

export function SwrGetItem<T>(key: string) {
	const data = localStorage.getItem(`${storageKey}.${key}`);
	return JSON.parse(data) as T;
}

export function SwrSetItem<T>(key: string, data: T) {
	localStorage.setItem(`${storageKey}.${key}`, JSON.stringify(data));
}

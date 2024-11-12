
export type Werknemer = {
	naam: string;
};

export type Bureau = {
	laptopdockOrientatie: "links"|"rechts"|"onbekend"|"geen"
}

export type Vergaderruimte = {
	naam: string,
	capaciteit: number
}

async function get(url: string): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}

export function getWerknemers(): Promise<Record<string, Werknemer>> {
	return get("http://141.138.139.147:5048/Werknemers")
		.then((data) => {
			return data;
		})
}

export function getBureaus(): Promise<Record<string, Bureau>> {
	return get("http://141.138.139.147:5048/Bureaus")
		.then((data) => {
			return data;
		})
}


export function getVergaderruimtes(): Promise<Record<string, Vergaderruimte>> {
	return get("http://141.138.139.147:5048/Vergaderruimtes")
		.then((data) => {
			return data;
		})
}

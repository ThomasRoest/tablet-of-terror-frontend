
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

async function post(url): Promise<any> {
	return await fetch(url, {
		method: "POST",
	});
}

async function del(url): Promise<any> {
	return await fetch(url, {
		method: "DELETE",
	});
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

/**
 * Map of bureau => werknemer-naam
 */
export function getReserveringen(): Promise<Record<string, string>> {
	return get("http://141.138.139.147:5048/BureauReserveringen")
		.then((data) => {
			const result = {};
			data.forEach((entry) => {
				result[entry.bureauId] = entry.werknemerId;
			});
			return result;
		})
}

export function insertReservering(bureaunaam: string, werknemerNaam: string): Promise<void> {
	return post("http://141.138.139.147:5048/BureauReserveringen?WerknemerNaam=" + encodeURIComponent(werknemerNaam) + "&BureauId=" + encodeURIComponent(bureaunaam))
		.then((data) => {})
}

export function removeReservering(bureaunaam: string, werknemerNaam: string): Promise<void> {
	return del("http://141.138.139.147:5048/BureauReserveringen?WerknemerNaam=" + encodeURIComponent(werknemerNaam) + "&BureauId=" + encodeURIComponent(bureaunaam))
		.then((data) => {})
}

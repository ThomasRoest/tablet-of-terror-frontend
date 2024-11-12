import { Bureau, getBureaus, getVergaderruimtes, getWerknemers, Vergaderruimte, Werknemer } from "@/lib/server.ts";
import { useEffect, useState } from "react";

export const HomePage = () => {
	const [ werknemers, setWerknemers ] = useState<Record<string, Werknemer>|undefined>();
	useEffect(() => {
		getWerknemers().then(setWerknemers);
	}, []);
	const [ bureaus, setBureaus ] = useState<Record<string, Bureau>|undefined>();
	useEffect(() => {
		getBureaus().then(setBureaus);
	}, []);
	const [ vergaderruimtes, setVergaderruimtes ] = useState<Record<string, Vergaderruimte>|undefined>();
	useEffect(() => {
		getVergaderruimtes().then(setVergaderruimtes);
	}, []);

	useEffect(() => {
		console.log("bureaus", bureaus);
	}, [werknemers]);
	useEffect(() => {
		console.log("werknemers", werknemers);
	}, [werknemers]);
	useEffect(() => {
		console.log("vergaderruimtes", vergaderruimtes);
	}, [werknemers]);

    return <div>home</div>;
};

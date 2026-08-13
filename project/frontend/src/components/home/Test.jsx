import { useEffect } from "react";
import { supabase } from "@lib/supabase";

const Test = () => {
	useEffect(() => {
		const fetchLeagues = async () => {
			const { data, error } = await supabase
				.from("leagues")
				.select("*");

			console.log("data:", data);
			console.log("error:", error);
		};

		fetchLeagues();

	}, []);

	return <div>Test</div>;
};

export default Test;
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import Sidebar from "../components/Sidebar";

export default withPageAuthRequired(function Trash({ user }) {
	const [items, setItems] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Header />
			<div className="grid grid-cols-12">
				<div className="col-span-3 flex flex-col">
					<Sidebar />
				</div>
				<div className="col-span-9 p-6">
					<h1 className="shorter text-4xl">{user.name}</h1>
				</div>
			</div>
		</>
	);
});
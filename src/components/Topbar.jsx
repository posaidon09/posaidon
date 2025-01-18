import { useContext } from "react";
import { context } from "../lib/Context";

export default function Topbar() {
	const { page, setPage } = useContext(context);
	return (
		<div className="flex flex-row items-center justify-center rounded-xl gap-4 mt-10">
			<div
				className={`p-3 text-text-50 cursor-pointer transition-all duration-200 ring-primary-500 ${page == 0 ? "ring" : ""} rounded-xl`}
				onClick={() => setPage(0)}
			>
				Introduction
			</div>

			<div
				className={`p-3 text-text-50 cursor-pointer transition-all duration-200 ring-primary-500 ${page == 1 ? "ring" : ""} rounded-xl`}
				onClick={() => setPage(1)}
			>
				Projects
			</div>

			<div
				className={`p-3 text-text-50 cursor-pointer transition-all duration-200 ring-primary-500 ${page == 2 ? "ring" : ""} rounded-xl`}
				onClick={() => setPage(2)}
			>
				Contact
			</div>
		</div>
	);
}

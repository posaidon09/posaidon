import { useEffect, useState } from "react";

export default function Root() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 100);
	}, []);

	return (
		<div className="min-h-screen overflow-auto">
			<div className="flex flex-col gap-4 items-center justify-center -mt-4">
				<img
					src="posaidon.png"
					className={`scale-75 p-5 bg-gradient-to-br from-slate-900 to-gray-900/40 border-[6px] border-primary-700 rounded-full transition-opacity duration-500 ${
						visible ? "opacity-100" : "opacity-0"
					}`}
				/>
				<h1
					className={`text-text-50 text-5xl text-center font-extrabold transition-all duration-500 delay-200 -mt-5 ${visible ? "opacity-100" : "opacity-0"}`}
				>
					Posaidon
				</h1>
				<p
					className={`text-text-50 text-2xl text-center transition-all duration-500 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
				>
					hobbyist programmer
				</p>
			</div>
		</div>
	);
}

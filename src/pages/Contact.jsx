import { useEffect, useState } from "react";

export default function Contact() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	const animClasses = show
		? {
				discord: "opacity-100 translate-y-0",
				github: "opacity-100 translate-x-0",
			}
		: {
				discord: "opacity-0 -translate-x-12",
				github: "opacity-0 translate-x-12",
			};

	return (
		<div className="min-h-screen overflow-auto">
			<div className="flex flex-col items-center justify-center gap-10 my-[15%]">
				<a
					href="https://discord.com"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses.github} bg-zinc-900 rounded-2xl flex flex-row gap-3 cursor-pointer hover:scale-110 w-[400px] xl:w-[500px] p-3 ease-in-out`}
				>
					<img src="discord.png" className="w-5 h-5" />
					<img
						alt="posaidon_"
						src="posaidon.png"
						className="border-green-600 border-[3px] h-20 w-20 rounded-full"
					/>
					<h4 className="text-gray-200 ml-6 mt-5 text-3xl">posaidon_</h4>
				</a>
				<a
					href="https://github.com/posaidon09"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses.discord} bg-zinc-900 rounded-2xl flex flex-row gap-3 cursor-pointer hover:scale-110 w-[400px] xl:w-[500px] p-3 ease-in-out`}
				>
					<img src="github.png" className="w-5 h-5" />
					<img
						alt="posaidon_"
						src="posaidon.png"
						className="border-green-600 border-[3px] h-20 w-20 rounded-full"
					/>
					<h4 className="text-gray-200 ml-6 mt-5 text-3xl">posaidon09</h4>
				</a>
			</div>
		</div>
	);
}

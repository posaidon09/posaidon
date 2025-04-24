import { useEffect, useState } from "react";

export default function Projects() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	const animClasses = show
		? "opacity-100 translate-y-0"
		: "opacity-0 -translate-y-12";

	return (
		<div className="flex flex-col items-center min-h-screen mb-10">
			<h1 className="text-text-50 font-bold text-4xl mt-32">My projects</h1>
			<div className="group flex flex-col xl:flex-row items-center justify-center mt-24 gap-10">
				<a
					href="https://github.com/posaidon09/ytdt"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses} w-[300px] h-[350px] backdrop-blur rounded-xl z-20 hover:z-40 p-3 ring ring-red-500 bg-gradient-to-br bg-black from-black from-30% bg-red-500/20 to-90% hover:bg-red-600/40 cursor-pointer hover:scale-110`}
				>
					<img src="ytdt.png" className="scale-75" />
					<p className="text-text-50 text-xl mt-5 font-bold text-center">
						YTDT
					</p>
					<p className="text-text-50 text-center mt-5">
						CLI youtube downloader
					</p>
				</a>
				<a
					href="https://github.com/posaidon09/spod"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses} w-[300px] h-[350px] backdrop-blur rounded-xl z-10 hover:z-40 group-hover:z-30 p-3 ring ring-green-500 bg-gradient-to-br bg-black from-black from-30% bg-green-500/20 to-90% hover:bg-green-600/40 cursor-pointer hover:scale-110`}
				>
					<img src="spod.png" className="scale-[60%] -mt-10" />
					<p className="text-text-50 text-xl -mt-4 font-bold text-center">
						Spod
					</p>
					<p className="text-text-50 text-center mt-5">
						CLI spotify playlist downloader
					</p>
				</a>
				<a
					href="https://github.com/posaidon09/Rtemp"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses} w-[300px] h-[350px] backdrop-blur rounded-xl z-0 hover:z-40 p-3 ring ring-blue-500 bg-gradient-to-br bg-black from-30% bg-blue-500/20 to-90% hover:bg-blue-600/40 cursor-pointer hover:scale-110`}
				>
					<img src="react.png" className="scale-[60%] -mt-5" />
					<p className="text-text-50 text-xl -mt-3 font-bold text-center">
						Rtemp
					</p>
					<p className="text-text-50 text-center text-sm mt-5">
						Template for React and tailwindcss with multi-page support
					</p>
				</a>
				<a
					href="https://github.com/posaidon09/homeLauncher"
					target="_blank"
					className={`transform transition-all duration-500 ${animClasses} w-[300px] h-[350px] backdrop-blur rounded-xl z-0 hover:z-40 p-3 ring ring-pink-500 bg-gradient-to-br bg-black from-30% bg-red-500/20 to-90% hover:bg-pink-600/40 cursor-pointer hover:scale-110`}
				>
					<img src="home.png" className="scale-[60%] -mt-12" />
					<p className="text-text-50 text-xl -mt-3 font-bold text-center">
						Home Launcher
					</p>
					<p className="text-text-50 text-center text-sm mt-5">
						A custom made browser homepage that mimics a terminal
					</p>
				</a>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="flex flex-col items-center min-h-screen mb-10">
			<h1 className="text-text-50 font-bold text-4xl mt-32">My projects</h1>
			<div className="group flex flex-col xl:flex-row items-center justify-center mt-24">
				<a
					href="https://github.com/posaidon09/ytdt"
					target="_blank"
					className="w-[300px] h-[350px] rounded-xl z-20 hover:z-40 -rotate-12 p-3 ring ring-red-500 bg-gradient-to-br bg-black from-black from-30% to-red-500/20 to-90% hover:bg-red-600/25 cursor-pointer hover:scale-110 transition-all duration-200"
				>
					<img
						src="https://i.postimg.cc/vmhZCmZZ/Yoube.png"
						className="scale-75"
					/>
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
					className="w-[300px] h-[350px] rounded-xl z-10 hover:z-40 group-hover:z-30 p-3 ring -ml-48 ring-green-500 bg-gradient-to-br bg-black from-black from-30% to-green-500/20 to-90% hover:bg-green-600/25 cursor-pointer hover:scale-110 transition-all duration-200"
				>
					<img
						src="https://i.postimg.cc/fyJSC7gs/image-psd.png"
						className="scale-[60%] -mt-10"
					/>
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
					className="w-[300px] h-[350px] rounded-xl z-0 hover:z-40 p-3 rotate-12 -ml-48 ring ring-blue-500 bg-gradient-to-br bg-black =-black from-30% to-blue-500/20 to-90% hover:bg-blue-600/25 cursor-pointer hover:scale-110 transition-all duration-200"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
						className="scale-[60%] -mt-5"
					/>
					<p className="text-text-50 text-xl -mt-3 font-bold text-center">
						Rtemp
					</p>
					<p className="text-text-50 text-center text-sm mt-5">
						Template for React and tailwindcss with multi-page support
					</p>
				</a>
			</div>
		</div>
	);
}

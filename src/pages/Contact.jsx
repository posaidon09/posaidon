export default function Contact() {
	return (
		<div className="min-h-screen overflow-auto">
			<div className="flex flex-col items-center justify-center gap-10 my-[15%]">
				<a
					href="https://discord.com"
					target="_blank"
					className="bg-zinc-900 rounded-2xl flex flex-row gap-3 transition-all duration-200 cursor-pointer hover:scale-110 w-[400px] xl:w-[500px] p-3"
				>
					<img
						src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
						className="w-5 h-5"
					/>
					<img
						alt="posaidon_"
						src="https://i.postimg.cc/mkjf4GVr/Posaidon-as-a-cat-scaled-12x-pngcrushed.png"
						className="border-green-600 border-[3px] h-20 w-20 rounded-full"
					/>
					<h4 className="text-gray-200 ml-6 mt-5 text-3xl">posaidon_</h4>
				</a>
				<a
					href="https://github.com/posaidon09"
					target="_blank"
					className="bg-zinc-900 rounded-2xl flex flex-row gap-3 transition-all duration-200 cursor-pointer hover:scale-110 w-[400px] xl:w-[500px] p-3"
				>
					<img
						src="https://i.postimg.cc/y8PFsCrp/image.png"
						className="w-5 h-5"
					/>
					<img
						alt="posaidon_"
						src="https://i.postimg.cc/mkjf4GVr/Posaidon-as-a-cat-scaled-12x-pngcrushed.png"
						className="border-green-600 border-[3px] h-20 w-20 rounded-full"
					/>
					<h4 className="text-gray-200 ml-6 mt-5 text-3xl">posaidon09</h4>
				</a>
			</div>
		</div>
	);
}

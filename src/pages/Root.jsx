export default function Root() {
	return (
		<div className="min-h-screen overflow-auto">
			<div className="flex flex-col gap-4 items-center justify-center -mt-4">
				<img
					src="https://i.postimg.cc/mkjf4GVr/Posaidon-as-a-cat-scaled-12x-pngcrushed.png"
					className="scale-75 p-5 bg-gradient-to-br from-slate-900 to-gray-900/40 border-[6px] border-primary-700 rounded-full"
				/>
				<h1 className="text-text-50 text-5xl text-center font-extrabold -mt-5">
					Posaidon
				</h1>
				<p className="text-text-50 text-2xl text-center">hobbyist programmer</p>
			</div>
			<div className="text-text-50 text-xl flex justify-center items-center mt-10"></div>
		</div>
	);
}

import { useEffect, useState } from "react";

export default function Root() {
	const [visible, setVisible] = useState(false);
	const [text, setText] = useState({ posaidon: [], desc: [], work: [] });
	useEffect(() => {
		const posaidon = "Posaidon";
		const desc = "17 year old hobbyist programmer";
		const work =
			"I mainly make silly perosnal projects with React and Javascript in general but I have also tried other languages such as Lua, Java, Python, Godot and Arduino";
		setTimeout(() => {
			posaidon.split("").forEach((char, index) => {
				setTimeout(() => {
					setText((prev) => ({
						...prev,
						posaidon: [...prev.posaidon, char],
					}));
				}, 100 * index);
			});
			desc.split("").forEach((char, index) => {
				setTimeout(() => {
					setText((prev) => ({
						...prev,
						desc: [...prev.desc, char],
					}));
				}, 50 * index);
			});
			work.split("").forEach((char, index) => {
				setTimeout(() => {
					setText((prev) => ({
						...prev,
						work: [...prev.work, char],
					}));
				}, 20 * index);
			});
			setVisible(true);
		}, 100);
	}, []);

	return (
		<div className="min-h-screen overflow-auto">
			<div className="flex flex-col gap-4 items-center justify-center -mt-4">
				<img
					src="posaidon.png"
					className={`scale-75 p-5 bg-gradient-to-tr from-[#111] to-purple-900/40 rounded-full
    shadow-glow-ourple hover:shadow-glow-ourple-strong
    transition-all duration-500 ease-in-out
    ${visible ? "opacity-100" : "opacity-0"}
  `}
				/>
				<h1
					className={`text-white text-5xl text-center font-extrabold transition-all duration-500 delay-200 -mt-5 ${visible ? "opacity-100" : "opacity-0"}`}
				>
					{text.posaidon.join("")}
				</h1>
				<p
					className={`text-white text-2xl text-center transition-all duration-500 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
				>
					{text.desc.join("")}
				</p>
				<p
					className={`text-white/50 text-xl text-center transition-all duration-500 delay-100 w-[600px] ${visible ? "opacity-100" : "opacity-0"}`}
				>
					{text.work.join("")}
				</p>
			</div>
		</div>
	);
}

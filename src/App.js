import leo5 from "./assets/images/leo5.jpg";
import leo2 from "./assets/images/leo2.jpg";
import leo1 from "./assets/images/leo1.jpg";
import leo3 from "./assets/images/leo3.jpg";
import leo4 from "./assets/images/leo4.jpg";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const [isTargetVisible, setIsTargetVisible] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const canvasRef = useRef(null);
	const targetRef = useRef(null);
	const otherItemRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsTargetVisible(entry.isIntersecting); // Update visibility
			},
			{ threshold: 0.1 } // Adjust as needed
		);

		const currentTarget = targetRef.current; // Capture the current value of the ref

		if (currentTarget) {
			observer.observe(currentTarget);
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget);
			}
		};
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const stars = [];
		const starCount = 200;

		for (let i = 0; i < starCount; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 2 + 1,
				speed: Math.random() * 0.5 + 0.2,
			});
		}

		const drawStars = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let star of stars) {
				const color = ["#FF4500.", "#FF6347", "#FFD700 "];
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = color[Math.floor(Math.random() * color.length)];
				ctx.fill();
			}
		};

		const updateStars = () => {
			for (let star of stars) {
				star.y += star.speed;
				if (star.y > canvas.height) {
					star.y = 0;
					star.x = Math.random() * canvas.width;
				}
			}
		};

		const animate = () => {
			drawStars();
			updateStars();
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<ParallaxProvider>
			<canvas
				ref={canvasRef}
				style={{
					display: "block",
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 1,
					backgroundColor: "transparent",
				}}
			></canvas>

			<div
				ref={otherItemRef}
				className={`${
					isTargetVisible
						? "py-14 w-screen gap-5 fixed z-10    items-center flex md:flex-row flex-col justify-center bottom-5"
						: "hidden"
				} `}
			>
				<a
					href="https://twitter.com/patriots"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-75"
				>
					Twitter
				</a>
				<a
					href="https://t.me/patriots"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-500"
				>
					Telegram
				</a>
				{/* <a
								href="https://discord.gg/patriots"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 "
							>
								Discord
							</a> */}
				<a
					href="https://pump.fun/patriots"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white  hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-75"
				>
					Pump.fun
				</a>
				<a
					href="https://raydium/patriots"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white  hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 animate-pulse duration-700 delay-75"
				>
					Raydium
				</a>
				{/* <a
								href="https://discord.gg/patriots"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-700 border-white border rounded-full px-5 py-2 mr-2 hover:border-blue-500 "
							>
								Discord
							</a> */}
			</div>
			<div
				data-aos="fade-up"
				className="relative min-h-screen bg-cover bg-center text-white font-sour"
			>
				<div
					data-aos="zoom-in"
					className="bg-black bg-opacity-60 absolute inset-0"
				>
					<img src={leo5} alt="Logo" className="mx-auto mb-4 bg-cover h-full" />
					<div className="bg-black bg-opacity-60 absolute inset-0"></div>
				</div>
				<header data-aos="fade-in" className="relative z-10 text-center p-8">
					<h1
						data-aos="fade-right"
						className="text-6xl font-extrabold text-blue-500"
					>
						The Man<span className="text-red-700">h</span>a
						<span className="text-red-700">tt</span>an{" "}
						<span className="text-red-700">Project</span>
					</h1>
					<p>
						Legacy of{" "}
						<span className="text-blue-500">the history’s loudest oops!</span>
					</p>
				</header>
				{/* section 1 */}
				<section className="min-h-screen md:flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-10}>
						<div className="relative md:flex justify-center flex-row-reverse">
							<div
								data-aos="zoom-out"
								className="relative w-[100%] h-[70%] bg-blue-500 clip-trapezoid rounded-lg inset-0 overflow-hidden"
							>
								<img
									src={leo1}
									alt="Logo"
									className="w-full h-full  mx-auto mb-4"
								/>
								{/* <div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div> */}
							</div>
							<div className="relative flex flex-col justify-center py-2 items-center">
								<h2
									data-aos="zoom-out"
									className="text-3xl md:text-4xl font-bold mb-4"
								>
									<span className="text-red-700">Manhattan </span>{" "}
									<span className="text-blue-700">Mayhem</span> Splitting Atoms,
									Keeping Secrets, and Exploding Morals Since 1945
								</h2>
								<p className="max-w-4xl text-lg md:text-2xl mb-8">
									When Scientists, Soldiers, and Spies Walk Into a Bar... and
									Accidentally Invent the Apocalypse
									<br />
									<span>
										Hope y'all packed your sunglasses! it's about to go{" "}
									</span>{" "}
									<span className="text-red-700 font-bold text-2xl uppercase">
										Boom!
									</span>
								</p>
							</div>
						</div>
					</Parallax>
				</section>
				{/* section 2 */}
				<section className="min-h-screen flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-5}>
						<div className="relative md:flex justify-center">
							<div
								data-aos="fade-right"
								className="relative w-[100%] h-[70%] bg-blue-500 clip-trapezoid-rev  rounded-lg inset-0 overflow-hidden border border-white"
							>
								<img
									src={leo2}
									alt="Logo"
									className="w-full h-full  mx-auto mb-4"
								/>
								{/* <div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div> */}
							</div>
							<div className="relative flex flex-col justify-center py-2 items-center">
								<h2
									data-aos="slide-right"
									className="text-3xl md:text-4xl font-bold mb-4"
								>
									<span className="text-blue-700">Power</span>{" "}
									<span className="text-red-700"> Hungry</span>! Bigger Bombs,
									Bigger Bills
								</h2>
								<p className="max-w-4xl text-lg md:text-2xl mb-8">
									Burned more electricity than half the country.
									<span>
										When asked why, the engineers said, "Aluminum smelting, wink
										wink." <br />
										Bomb so big, it needed its own ZIP code.😆
									</span>
								</p>
							</div>
						</div>
					</Parallax>
				</section>

				{/* section 3 */}
				<section className="min-h-screen flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-10}>
						<div
							data-aos="fade-left"
							className="relative md:flex justify-center flex-row-reverse"
						>
							<div className="relative w-[100%] h-[70%] bg-blue-500 clip-trapezoid rounded-lg inset-0 overflow-hidden">
								<img
									src={leo3}
									alt="Logo"
									className="w-full h-full  mx-auto mb-4"
								/>
								{/* <div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div> */}
							</div>
							<div className="relative flex flex-col justify-center py-2 items-center">
								<h2
									data-aos="zoom-in"
									className="text-3xl md:text-4xl font-bold mb-4"
								>
									<span className="text-blue-700">Top-Secret </span>
									<span className="text-red-700"> Tomfoolery</span>, It’s
									Classified!
								</h2>
								<p className="max-w-4xl text-lg md:text-2xl mb-8">
									"Am I sweeping up science or magic dust?" Oops! now I have to
									wear a dust protective suit🥱 <br />
									<span>
										Meanwhile, spies were sneaking in like, "Just taking
										notes... for history, totally."
										<span className="text-blue-600 font-bold">
											...Sure, Ivan, sure.
										</span>
									</span>
								</p>
							</div>
						</div>
					</Parallax>
				</section>

				{/* section 4 */}
				<section className="min-h-screen flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-5}>
						<div className="relative md:flex justify-center">
							<div
								data-aos="zoom-in"
								className="relative w-[100%] h-[70%] bg-blue-500 clip-trapezoid-rev  rounded-lg inset-0 overflow-hidden border border-white"
							>
								<img
									src={leo4}
									alt="Logo"
									className="w-full h-full  mx-auto mb-4"
								/>
								{/* <div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div> */}
							</div>
							<div className="relative flex flex-col justify-center py-2 items-center">
								<h2
									data-aos="zoom-out"
									className="text-3xl md:text-4xl font-bold mb-4"
								>
									<span className="text-red-700">Moral Dilemmas</span> Big
									Booms, Bigger Questions
								</h2>
								<p className="max-w-4xl text-lg md:text-2xl mb-8">
									Oppenheimer 🗣️ "I am become death, destroyer of worlds."
									<span>
										Everyone else 🗣️ "Cool quote, but are we the baddies?"{" "}
										<br />
										Some scientists celebrated, others cried, and one guy said,
										"Does this mean I get a raise?" and he did! always ask for a
										raise.🤌
									</span>
								</p>
							</div>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center  py-16 bg-gray-800 text-center border-b border-gray-200">
					<Parallax speed={5}>
						<div className="relative md:flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								data-aos="zoom-in"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Tokenomics ⚛️
							</h2>
							<p className="text-lg mb-8 px-8 max-w-4xl">
								Built with the explosive spirit of innovation, our tokenomics
								split atoms, not hairs, to empower every participant with shared
								knowledge and unlimited energy (metaphorically, of course—we're
								not *actually* splitting atoms here). Designed to fuel a
								community that values secrecy, collaboration, and the occasional
								"Oops, did I just invent a new element?" moment.
								<span className="text-blue-500 italic">Einstein Approved!</span>
								—<span className="text-red-500 italic">It’s all relative.</span>
								Join us as we blast through barriers, ignite ideas, and leave a
								radiant legacy of science, mystery, and just a touch of chaos.
								All while reminding ourselves that sometimes, the biggest risks
								lead to the brightest (and loudest) rewards.
							</p>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-700 text-center ">
					<Parallax speed={-5}>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								ref={targetRef}
								className="text-4xl md:text-5xl font-bold mb-2"
							>
								Atomic Links
							</h2>
						</div>
					</Parallax>
				</section>
				<footer className="bg-black text-center py-4 fixed w-full">
					<p>&copy; 2024 Manhattan Project. All rights reserved.</p>
				</footer>
			</div>
		</ParallaxProvider>
	);
}

export default App;

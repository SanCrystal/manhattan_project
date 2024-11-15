import leo5 from './assets/images/leo5bg.jpg';
import leo2 from './assets/images/leo2.jpg';
import leo1 from './assets/images/leo1.jpg';
import leo3 from './assets/images/leo3.jpg';
import leo4 from './assets/images/leo4.jpg';
import { useEffect,useRef } from "react";
import './index.css';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
			AOS.init({ duration: 1000 });
		}, []);

  const canvasRef = useRef(null);

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
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = "white";
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
			<div className="py-14 w-screen gap-5 absolute z-10 top-[440vh] items-center flex justify-center">
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
			</div>
			<div className="py-14 w-screen gap-5 absolute z-10 top-[325vh] items-center flex justify-center">
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
				<div className="bg-black bg-opacity-60 absolute inset-0">
					<img src={leo5} alt="Logo" className="mx-auto mb-4 bg-cover h-full" />
					<div className="bg-black bg-opacity-60 absolute inset-0"></div>
				</div>
				<header data-aos="fade-in" className="relative z-10 text-center p-8">
					<h1
						data-aos="fade-right"
						className="text-6xl font-extrabold text-blue-500"
					>
						American <span className="text-red-700">Patriots</span>
					</h1>
					<p>
						Our journey begins now{" "}
						<span className="text-blue-500">be a patriot!</span>
					</p>
				</header>

				<section className="min-h-screen flex justify-center px-8 py-16 bg-gray-900 text-center w-full">
					<Parallax speed={-10}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo1}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								data-aos="zoom-out"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Core Objective
							</h2>
							<p className="max-w-4xl text-lg md:text-2xl mb-8">
								Championing the spirit of resilience and liberty, the 'American
								Patriots' movement stands as a beacon of strength, unity, and
								pride. More than just a celebration of history, it’s a call to
								action to uphold the timeless values of freedom, courage, and
								individual rights. Rooted in the legacy of our nation's founders
								and the heroes who shaped it, our mission is to inspire a
								renewed commitment to patriotism, honor, and equality. By
								embracing the diversity and strength of our people, we aim to
								safeguard the principles that define us and ensure a future
								where every citizen's voice is valued and respected, fostering
								unity and collective empowerment for generations to come.
							</p>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center  py-16 bg-gray-800 text-center">
					<Parallax speed={5}>
						<div className=" w-full h-screen bg-black bg-opacity-60 absolute inset-0">
							<img
								src={leo2}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2
								data-aos="zoom-in"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Tokenomics 🇺🇸
							</h2>
							<p className=" text-lg mb-8 px-8 max-w-4xl ">
								Built to honor the spirit of liberty and resilience, our
								tokenomics are designed to empower every patriot with
								accessibility and shared growth. Join us in advancing a movement
								that upholds the values of freedom, amplifies voices, and
								fosters unity across the nation.{" "}
								<span className="text-blue-500 italic">E Pluribus Unum!</span>—
								<span className="text-red-500 italic">From many, one! </span>
								Propelled not just by a community, but by a family bound
								together by purpose, vision, and the timeless principles that
								define the American spirit—all while embracing the journey with
								pride and celebration.
							</p>
						</div>
					</Parallax>
				</section>

				<section className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-700 text-center ">
					<Parallax speed={-5}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo3}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen items-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-4">Buy</h2>
						</div>
					</Parallax>
				</section>
				<section className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-700 text-center">
					<Parallax speed={-5}>
						<div className="w-full h-screen bg-black bg-opacity-60 absolute  inset-0">
							<img
								src={leo4}
								alt="Logo"
								className="w-full h-full  mx-auto mb-4"
							/>
							<div className="bg-black h-screen w-full bg-opacity-60 absolute inset-0"></div>
						</div>
						<div className="relative flex flex-col justify-center py-2 h-screen w-screen">
							<h2
								data-aos="fade-in zoom-out"
								className="text-5xl md:text-6xl font-bold mb-4"
							>
								Socials
							</h2>
							{/* added manually socials */}
						</div>
					</Parallax>
				</section>
				<footer className="bg-black text-center py-4 fixed w-full">
					<p>&copy; 2024 Patriots. All rights reserved.</p>
				</footer>
			</div>
		</ParallaxProvider>
	);
}

export default App;

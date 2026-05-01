import Head from "next/head";

import Navbar from "../components/global/Navbar";
import Accordion from "../components/accordions/Accordion";
import Agenda from "../components/others/Agenda";
import Counter from "../components/others/Counter";
import {useState} from "react";

const Home = () => {
	const faqs = [
		{
			title: "On podem aparcar a Mataró?",
			description:
				"A Mataró hi ha molts aparcaments disponibles, però el que queda més a prop de la Basílica de Santa Maria de Mataró és el Pàrquing Saba La Riera, al Carrer de la Riera, 69, 08302 Mataró.",
		},
		{
			title: "On es celebra el bateig?",
			description:
				"El bateig es celebrarà a la Basílica de Santa Maria de Mataró, a les 18:00 h. Quedem a les 17:45 h, sigueu puntuals!",
		},
		{
			title: "Com es diu l'espai on es celebrarà la festa?",
			description:
				"L'espai on celebarem la festa és diu Gastro Loft, situat al Carrer Bonaire, 25, 08301 Mataró.",
		},
		{
			title: "Com anirem de la Basílica de Santa Maria al Gastro Loft?",
			description:
				"El Gastro Loft es troba a pocs metres del lloc on farem el bateig, així que hi anirem caminant.",
		},
		{
			title: "Hem de confirmar assistència? Com podem fer-ho?",
			description:
				"Ens facilitareu l'organització del bateig i la festa de l'aniversari de la Isona si ens confirmeu la vostra assistència. Podeu fer-ho per Whatsapp escrivint-nos al número +34 626 138 170.",
		},
		{
			title: "Si tenim més dubtes, com us podem contactar?",
			description:
				"Podeu contactar amb nosaltres per telèfon, ja sigui per Whatsapp o fent una trucada, al número +34 626 138 170.",
		},
	];

	const agenda = [
		{
			title: "L'arribada",
			description:
				"17:45 h - Arribada a la Basílica de Santa Maria de Mataró, ben puntuals",
		},
		{
			title: "El bateig",
			description:
				"18:00 h a 18:45 h - El moment en que la Isona i els padrins prenen protagonisme",
		},
		{
			title: "Anem a celebrar-ho",
			description:
				"18:45 h - Un passeig fins al Gastro Loft, a pocs metres de la Basílica",
		},
		{
			title: "La festa",
			description:
				"19:00 h - Comença la festa: menjar i begudes per celebrar el bateig i festa d'aniversari de la Isona",
		},
	];

	const [stateDeadline, setStateDeadline] = useState("July 18, 2026");

	const coverIllustrations = [
		{
			src: "img/home/illustrations/abella.png",
			className: "top-[5%] left-[5%] w-12 md:w-16 rotate-12",
		},
		{
			src: "img/home/illustrations/ratolinet.png",
			className: "top-[12%] left-[26%] w-16 md:w-28 rotate-6",
		},
		{
			src: "img/home/illustrations/pollet.png",
			className: "top-[3%] left-[46%] w-16 md:w-24 rotate-12",
		},
		{
			src: "img/home/illustrations/esquirol.png",
			className: "top-[5%] right-[5%] w-20 md:w-32 -rotate-12",
		},
		{
			src: "img/home/illustrations/ovella.png",
			className: "top-[24%] left-[3%] w-20 md:w-32 -rotate-12",
		},
		{
			src: "img/home/illustrations/pingui.png",
			className:
				"top-[12%] md:top-[26%] right-[18%] md:right-[24%] w-20 md:w-32 -rotate-6",
		},
		{
			src: "img/home/illustrations/eriço.png",
			className:
				"top-[36%] md:top-[46%] left-[18%] w-20 md:w-28 rotate-3",
		},
		{
			src: "img/home/illustrations/osito.png",
			className:
				" top-[26%] md:top-[30%] right-[3%] w-24 md:w-32 rotate-3",
		},
		{
			src: "img/home/illustrations/llama.png",
			className:
				"top-[56%] md:top-[64%] left-[3%] w-24 md:w-40 -rotate-3",
		},
		{
			src: "img/home/illustrations/lludriga.png",
			className:
				"top-[58%] md:top-[60%] right-[6%] md:right-[22%] w-20 md:w-32 rotate-12",
		},
		{
			src: "img/home/illustrations/conillet.png",
			className:
				"bottom-[3%] left-[6%] md:left-[18%] w-24 md:w-36 -rotate-6",
		},
		{
			src: "img/home/illustrations/tortugueta.png",
			className:
				"bottom-[3%] right-[40%] md:right-[34%] w-20 md:w-32 -rotate-3",
		},
		{
			src: "img/home/illustrations/guineu.png",
			className: "bottom-[3%] right-[3%] w-28 md:w-44 rotate-6",
		},
	];

	return (
		<>
			<Head>
				<meta charSet="UTF-8"></meta>
				<meta
					content="width=device-width, initial-scale=1.0, minimum-scale=1"
					name="viewport"
				></meta>
				<meta name="theme-color" content="#FBE4EB"></meta>
				<link rel="mask-icon" href="favicon.svg" color="#B5527A"></link>
				<link rel="icon" href="favicon.svg"></link>
				<link
					rel="shortcut icon"
					href="favicon.ico"
					type="image/x-icon"
				></link>
				<title>Bateig i festa d'aniversari de la Isona 🎉</title>
				<meta
					name="title"
					content="Bateig i festa d'aniversari de la Isona 🎉"
				></meta>
				<meta
					name="description"
					content="El bateig i festa d'aniversari de la Isona. Us esperem a Mataró el 18 de juliol!"
				></meta>
				<meta name="robots" content="Index,Follow"></meta>
				<meta property="og:image" content="/share.jpg"></meta>
			</Head>

			{/* Navigation bar */}
			<Navbar />

			<main>
				{/* Section cover */}
				<section className="w-full h-screen relative z-10  flex items-center justify-center bg-neutral-100">
					<div className="max-w-full md:max-w-xl lg:max-w-3xl mx-auto px-6 md:px-0 text-center relative z-10">
						<picture className="block mb-2">
							<img
								src="img/home/isona-portada.png"
								alt="Bateig i festa d'aniversari de la Isona"
								className="w-56 h-auto mx-auto"
								loading="lazy"
							/>
						</picture>
						<h1 className="text-4xl lg:text-6xl">
							Benvinguts al bateig i festa d'aniversari de la
							Isona
						</h1>
						<p className="mt-6 text-xl">
							<span className="flex flex-col items-center font-semibold">
								Dissabte, 18 de juliol de 2026
							</span>{" "}
							<span>
								Basílica de&nbsp;
								<span className="relative after:content-[''] after:absolute after:-bottom-0.5 after:w-full after:h-[3px] after:bg-primary-300 after:inset-x-0">
									Santa Maria de Mataró
								</span>
								&nbsp;i&nbsp;
								<span className="relative after:content-[''] after:absolute after:-bottom-0.5 after:w-full after:h-[3px] after:bg-primary-300 after:inset-x-0">
									Gastro Loft
								</span>
							</span>
						</p>
						<button
							aria-label="Seguir llegint"
							className="button button__primary mt-8 w-full md:w-auto justify-center gap-x-4"
							onClick={() => {
								const section =
									document.getElementById("introduccio");
								if (section) {
									section.scrollIntoView({
										behavior: "smooth",
									});
								}
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down-dashed"
								aria-hidden="true"
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/>
								<path d="M12 5v.5m0 3v1.5m0 3v6" />
								<path d="M16 15l-4 4" />
								<path d="M8 15l4 4" />
							</svg>
							Seguir llegint
						</button>
					</div>
					<div
						className="layer-illustrations pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-25 mix-blend-multiply"
						aria-hidden="true"
					>
						{coverIllustrations.map((illustration) => (
							<picture
								key={illustration.src}
								className={`absolute block ${illustration.className}`}
							>
								<img
									src={illustration.src}
									alt=""
									className="h-auto w-full"
									loading="lazy"
								/>
							</picture>
						))}
					</div>
					<div className="absolute inset-0 z-0">
						<picture>
							<img
								src="white-paper-texture.jpg"
								alt=""
								className="w-full h-full object-cover opacity-40"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section intro  */}
				<section className="flex flex-wrap items-stretch relative z-30 overflow-hidden">
					<span id="introduccio" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative lg:pt-48 lg:pb-32 flex flex-wrap items-center justify-center">
						<div className="relative z-10 max-w-lg mx-auto px-6 md:px-0 py-14 lg:py-32">
							<picture>
								<img
									src="img/home/illustrations/abella.png"
									alt="Un petit gran dia per recordar"
									className="w-16 h-auto absolute top-20 left-[-14%] -rotate-12 scale-x-[-1] mix-blend-multiply opacity-40"
									loading="lazy"
								/>
							</picture>
							<h2>Un petit gran dia per recordar</h2>
							<p className="mt-4">
								La Isona{" "}
								<strong>bufa la seva primera espelma</strong> i
								volem celebrar-ho amb la gent que l'estima. Serà
								una tarda on la <strong>batejarem</strong> i
								passarem una bona estona de festa, entre
								rialles, brindis i moments per recordar. Ens
								encantarà compartir aquest dia amb vosaltres!
							</p>
							<a
								href="https://wa.me/34626138170"
								title="Confirmar assistència"
								className="button button__primary mt-8 w-full md:w-auto justify-center"
								target="_blank"
								rel="nofollow noreferrer"
							>
								Confirmar assistència
							</a>
						</div>
					</div>
					<div className="absolute inset-0 z-0">
						<picture>
							<img
								src="white-paper-texture.jpg"
								alt=""
								className="w-full h-full object-cover opacity-40"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="w-full lg:w-4/12 relative z-30 flex items-center justify-center">
						<div className="relative lg:absolute inset-0 lg:-left-[25%] xl:-left-[40%] md:top-0 z-10 w-full h-full flex items-center justify-center py-8">
							<picture>
								<img
									src="img/home/isona-frame.png"
									className="w-full object-contain h-[90%] max-h-[60dvh] lg:max-h-[80dvh]"
									loading="lazy"
									alt="Bateig i festa d'aniversari de la Isona"
								/>
							</picture>
						</div>
						<picture>
							<img
								src="img/home/pattern-flors.jpg"
								alt=""
								className="w-full h-full object-cover absolute inset-0 opacity-30 mix-blend-multiply"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section location */}
				<section className="relative py-44 px-10 md:px-14 flex flex-wrap justify-end">
					<span id="localitzacio" className="absolute -top-20"></span>
					<div className="absolute inset-0 z-0">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.3509756496487!2d2.4440005764457817!3d41.540952686455135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b5243d752151%3A0xb6380fc54e59fa73!2sBas%C3%ADlica%20de%20Santa%20Maria%20de%20Matar%C3%B3!5e1!3m2!1sca!2ses!4v1776617406747!5m2!1sca!2ses"
							width="600"
							height="450"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full h-full object-cover"
						></iframe>
					</div>
					<div className="p-6 md:p-14 bg-white relative z-10 w-full lg:w-5/12 overflow-hidden">
						<div className="relative z-10">
							<h2 className="my-0 max-w-lg">
								Ens veiem el proper <br /> dissabte 18 de juliol
								de 2026, a les 17:45 h a la Basílica de Santa
								Maria de Mataró
							</h2>
							<p className="mt-4 max-w-lg">
								En cas de dubtes sobre com arribar a la Basílica
								de Santa Maria, ens podeu fer un truc al{" "}
								<a
									href="tel:+34626138170"
									title="+34 626 138 170"
									className="underline hover:text-neutral-700 transition-all duration-300 ease-in-out"
								>
									+34 626 138 170
								</a>
								, o consultar el Google Maps
							</p>
							<div className="flex flex-wrap items-stretch mt-8">
								<a
									href="https://maps.app.goo.gl/wB6NZTZt7qf2Nu9N8"
									title="Com arribar-hi"
									className="button button__primary inline-flex items-center w-full md:w-auto justify-center"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span className="inline-block -mb-px mr-2">
										Com arribar-hi
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										></path>
										<path d="M8 21h4"></path>
										<path d="M10 21v-10"></path>
										<path d="M10 6v-3"></path>
										<path d="M6 6h10l2 2.5l-2 2.5h-10z"></path>
									</svg>
								</a>
								<a
									href="https://wa.me/34626138170"
									title="Confirmar assistència"
									className="button button__primary--blue inline-flex items-center mt-3 md:mt-0 md:ml-3 justify-center w-full md:w-auto"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span className="inline-block -mb-px mr-2">
										Confirmar assistència
									</span>
								</a>
							</div>
						</div>
						<div className="absolute bottom-0 right-[-20%] opacity-60 z-0 h-full">
							<picture>
								<img
									src="img/home/pattern-flors-2.jpg"
									alt=""
									className="w-full h-full object-contain"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="absolute inset-0 opacity-50 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
				</section>

				{/* Section agenda */}
				<section className="relative flex flex-wrap items-stretch overflow-hidden">
					<span id="agenda" className="absolute -top-20"></span>
					<div className="w-full lg:w-4/12 flex flex-row lg:flex-col relative order-2 md:order-none">
						<div className="absolute inset-0 opacity-60 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="w-1/2 lg:w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/santa-maria-mataro.jpeg"
									className="w-full h-full object-cover aspect-[4/3] object-[100%_30%]"
								></img>
							</picture>
						</div>
						<div className="w-1/2 lg:w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/gastro-loft-4.jpg"
									className="w-full h-full object-cover aspect-[4/3] object-[100%_30%]"
								></img>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-8/12 relative pt-10 pb-14 px-6 md:px-0 lg:pt-40 md:pb-48 order-1 md:order-none">
						<div className="absolute inset-0 opacity-50 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="relative z-10 max-w-2xl mx-auto">
							<h2 className="max-w-lg">L'agenda de la festa</h2>
							<div className="relative">
								<ul className="mt-8 relative z-20">
									{agenda.map((item, idx) => (
										<Agenda
											key={idx}
											title={item.title}
											description={item.description}
										/>
									))}
								</ul>
								<div className="flex justify-end">
									<a
										href="https://wa.me/34626138170"
										title="Confirmar assistència"
										className="button button__primary--white mt-8 w-full md:w-auto justify-center"
										target="_blank"
										rel="nofollow noreferrer"
									>
										Confirmar assistència
									</a>
								</div>
								<div className="absolute -top-20 -right-36 z-10 opacity-30 rotate-12">
									<picture>
										<img
											src="img/home/illustrations/llama.png"
											alt=""
											className="h-72 w-auto"
											width=""
											height=""
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="absolute top-20 -left-32 z-10 opacity-30 -rotate-45">
									<picture>
										<img
											src="img/home/illustrations/conillet.png"
											alt=""
											className="h-72 w-auto"
											width=""
											height=""
											loading="lazy"
										/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Section countdown */}
				<section className="relative">
					<div className="absolute z-30 top-0 -translate-y-1/2 w-full md:w-9/12 left-1/2 -translate-x-1/2">
						<div className="container">
							<div className="w-full lg:w-8/12 lg:mx-auto px-10 py-12 md:py-20 relative overflow-hidden shadow-lg">
								<div className="absolute inset-0 z-0">
									<picture>
										<img
											src="white-paper-texture.jpg"
											alt=""
											className="w-full h-full object-cover"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="absolute inset-0 opacity-20 w-full h-full z-10">
									<picture>
										<img
											src="img/home/pattern-flors.jpg"
											alt=""
											className="w-full h-full object-cover"
											loading="lazy"
										/>
									</picture>
								</div>
								<Counter deadline={stateDeadline} />
							</div>
						</div>
					</div>
				</section>

				{/* Section FAQs */}
				<section className="relative flex flex-wrap items-stretch">
					<span id="faqs" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative md:pt-48 lg:pt-56 lg:pb-32 flex flex-wrap items-center justify-center order-2 md:order-none">
						<div className="relative z-10 max-w-2xl mx-auto pt-12 pb-44 lg:py-12 px-6 md:px-0">
							<h2 className="max-w-lg">Preguntes freqüents</h2>
							<div className="accordion mt-8 md:mt-12">
								{faqs.map((faq, idx) => (
									<Accordion
										key={idx}
										title={faq.title}
										description={faq.description}
									/>
								))}
							</div>
							<div class="flex flex-wrap items-stretch mt-8">
								<a
									href="https://maps.app.goo.gl/apo5mfAx4hHnChXFA"
									title="Com arribar al pàrquing"
									class="button button__primary inline-flex items-center w-full md:w-auto justify-center"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span class="inline-block -mb-px mr-2">
										Com arribar al pàrquing
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-car"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
										<path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
										<path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
									</svg>
								</a>
								<a
									href="https://maps.app.goo.gl/eqqgKAKKjzQ1jPLg6"
									title="Com arribar al Gastro Loft"
									class="button button__primary--blue inline-flex items-center mt-3 md:mt-0 md:ml-3 justify-center w-full md:w-auto"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span class="inline-block -mb-px mr-2">
										Com arribar al Gastro Loft
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-cake"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8" />
										<path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
										<path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737" />
									</svg>
								</a>
							</div>
							<div className="absolute top-0 right-4 lg:right-10 max-w-sm pointer-events-none opacity-30 mix-blend-multiply -z-10">
								<picture>
									<img
										src="img/home/illustrations/lludriga.png"
										alt=""
										className="w-24 lg:w-44 h-auto"
										loading="lazy"
									/>
								</picture>
							</div>
						</div>
						<div className="absolute inset-0 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover opacity-20"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="absolute bottom-0 left-12 max-w-sm pointer-events-none opacity-30 mix-blend-multiply -z-10">
							<picture>
								<img
									src="img/home/illustrations/pingui.png"
									alt=""
									className="w-24 lg:w-44 h-auto"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-4/12 flex flex-row lg:flex-col relative order-1 md:order-none">
						<div className="w-1/2 lg:w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/gastro-loft-2.webp"
									className="w-full h-full object-cover opacity-40 aspect-[4/3] object-[100%_90%]"
								></img>
							</picture>
						</div>
						<div className="w-1/2 lg:w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/gastro-loft-1.jpg"
									className="w-full h-full object-cover opacity-40 aspect-[4/3] object-[100%_90%]"
								></img>
							</picture>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="relative bg-primary-500 text-zinc-200 py-12 lg:py-24">
				<span id="contacte" className="absolute -top-20"></span>
				<div className="container relative z-20">
					<div className="w-full lg:w-8/12 lg:mx-auto">
						<div className="-mx-6 flex flex-wrap items-center justify-between">
							<div className="px-6 w-full lg:w-2/3 max-w-lg">
								<h2 className="text-zinc-200">
									Seguiu tenint dubtes? Contacteu-nos.
								</h2>
								<p className="mt-4 md:mt-6 text-zinc-300">
									Si en aquest punt seguiu teniu dubtes o
									preguntes que no us hem resolt, no dubteu en
									contactar-nos pels canals que trobareu a
									continuació. Estarem més que encantats
									d'ajudar-vos.
								</p>
							</div>
							<ul className="list-none m-0 px-6 w-full lg:w-1/3 mt-8 md:mt-0">
								<li className="mb-2.5">
									<h3 className="normal-case text-3xl text-zinc-200">
										<a
											href="tel:+34626138170"
											title="Contacta'ns per Whatsapp"
											className="flex items-center"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2"
												width={28}
												height={28}
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path
													stroke="none"
													d="M0 0h24v24H0z"
													fill="none"
												></path>
												<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
												<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
											</svg>
											Whatsapp
										</a>
									</h3>
								</li>
								<li className="mb-2.5">
									<h3 className="normal-case text-3xl text-zinc-50">
										<a
											href="tel:+34626138170"
											title="Contacta'ns per telèfon"
											className="flex items-center"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="mr-2"
												width={28}
												height={28}
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path
													stroke="none"
													d="M0 0h24v24H0z"
													fill="none"
												></path>
												<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
											</svg>
											Telèfon
										</a>
									</h3>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-opacity-90 before:w-full before:h-full before:bg-black opacity-40">
					<picture>
						<img
							src="white-paper-texture.jpg"
							alt=""
							className="w-full h-full object-cover opacity-20 mix-blend-darken"
							loading="lazy"
						/>
					</picture>
				</div>
			</footer>
		</>
	);
};

export default Home;

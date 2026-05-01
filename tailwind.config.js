const colors = {
	primary: {
		100: "#FFFFFF",
		200: "#FBE4EB",
		300: "#F5C7D4",
		400: "#E89AAB",
		500: "#B5527A",
	},
	secondary: {
		100: "#FBE9D4",
		300: "#F4CC95",
		500: "#B58A2B",
		700: "#7A5610",
		900: "#3F2C00",
	},
	neutral: {
		50: "#FFFFFF",
		100: "#FAF6F2",
		200: "#EFE7DF",
		300: "#D9CEC2",
		400: "#BBB0A2",
		500: "#9A8E80",
		600: "#71655A",
		700: "#4A4137",
		800: "#241F18",
		900: "#0E0A05",
	},
};

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "false", // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
		},
		extend: {
			colors: {
				...colors,
			},
			fontSize: {
				11: "11px",
				base: "17px",
			},
			fontFamily: {
				tenez: ["Bricolage Grotesque", "sans-serif"],
				fonseca: ["Satoshi", "sans-serif"],
			},
			borderRadius: {
				350: "350px",
			},
			lineHeight: {
				1.1: "1.1",
				12: "3.2",
			},
			minWidth: {
				"1/2": "50%",
			},
			height: {
				"1/2": "50%",
				"50vh": "50vh",
			},
		},
	},
	variants: {
		extend: {},
	},
};

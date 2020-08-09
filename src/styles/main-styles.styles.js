const size = {
	s: "350px",
	l: "750px",
	xl: "1020px",
};

export const device = {
	phone: `(min-width: ${size.s})`,
	tablet: `(min-width: ${size.l})`,
	desktop: `(min-width: ${size.xl})`,
};

// const fontFamily = {
// 	decorative1: `'Sriracha', cursive`,
// 	decorative2: `'Lemonada', cursive`,
// };

// export const fonts = {
// 	secondary: `${fontFamily.decorative1}`,
// 	additional: `${fontFamily.decorative2}`,
// };

// export const colors = {
// 	black: `${color.a}`,
// 	white: `${color.b}`,
// 	primary: `${color.c}`,
// 	secondary: `${color.d}`,
// 	third: `${color.e}`,
// 	fourth: `${color.f}`,
// 	fifth: `${color.g}`,
// };
export const theme = {
	fonts: {
		subFont: `'Sriracha', cursive`,
		mainFont: `'Montserrat', sans-serif`,
	},
	black: "#141414",
	white: "#eeeeee",
	primary: "#303a52", //dark grey
	secondary: "#f5587b", //pink
	third: "#485188", //violet
	fourth: "#382f60", //dark violet
	fifth: "#332233", // zerogracity
	sixth: "#83e85a", //green
	seventh: "#324e7b", // dark blue
	blue: "#1c2841", //blue
	zeus: "#3b3c38", // zeus
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
};

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

const fontFamily = {
	decorative1: `'Sriracha', cursive`,
	decorative2: `'Lemonada', cursive`,
};

export const fonts = {
	secondary: `${fontFamily.decorative1}`,
	additional: `${fontFamily.decorative2}`,
};

const color = {
	a: "#141414",
	b: "#eeeeee",
	c: "#303a52", //dark grey
	d: "#f5587b", // dark pink
	e: "#485188", //darker blue-grey
	f: "#382f60", //deep dark blue
	g: "#a45fbe", //purple
};

export const colors = {
	black: `${color.a}`,
	white: `${color.b}`,
	primary: `${color.c}`,
	secondary: `${color.d}`,
	third: `${color.e}`,
	fourth: `${color.f}`,
	fifth: `${color.g}`,
};

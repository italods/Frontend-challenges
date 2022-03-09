const projects = [
    {
      "name": "AnalogClock-Css",
      "text": "Analog Clock CSS"
    },
    {
      "name": "AuroraGradient-Css",
      "text": "Aurora Gradient CSS"
    },
    {
      "name": "Battery-Css",
      "text": "Battery CSS"
    },
    {
      "name": "BgGradient-Css",
      "text": "Background Gradient CSS"
    },
    {
      "name": "BgGradientOverlay-Css",
      "text": "Background Gradient Overlay CSS"
    },
    {
      "name": "Bookmark-Css",
      "text": "Bookmark CSS"
    },
    {
      "name": "BorderGradient-Css",
      "text": "Border Gradient CSS"
    },
    {
      "name": "BorderRainbow-Css",
      "text": "Border Rainbow CSS"
    },
    {
      "name": "Button-Css",
      "text": "Button CSS"
    },
    {
      "name": "ButtonGlass-Css",
      "text": "Button Glassmorphism CSS"
    },
    {
      "name": "ButtonGradient-Css",
      "text": "Button Gradient CSS"
    },
    {
      "name": "CalculatorWeb",
      "text": "Calculator Web"
    },
    {
      "name": "Cards-Css",
      "text": "Cards CSS"
    },
    {
      "name": "CheckInternetConnection",
      "text": "Check Internet Connection"
    },
    {
      "name": "ClockGlassmorphism-Css",
      "text": "Clock Glassmorphism CSS"
    },
    {
      "name": "DisableFeatures",
      "text": "Disable Features"
    },
    {
      "name": "DoubleBorder-Css",
      "text": "Double Border CSS"
    },
    {
      "name": "Heart-Css",
      "text": "Heart CSS"
    },
    {
      "name": "HTMLButton-Css",
      "text": "Html Button CSS"
    },
    {
      "name": "ImageSlideshow",
      "text": "Image Slideshow CSS"
    },
    {
      "name": "Loading-Css",
      "text": "Loading CSS"
    },
    {
      "name": "LoginGlassmorphism-Css",
      "text": "Login Glassmorphism CSS"
    },
    {
      "name": "Menu-Css",
      "text": "Menu CSS"
    },
    {
      "name": "MultipleBorders-Css",
      "text": "Multiple Borders CSS"
    },
    {
      "name": "PokemonCardGenerator",
      "text": "Pokemon Card Generator CSS"
    },
    {
      "name": "ProfileCard-Css",
      "text": "Profile Card CSS"
    },
    {
      "name": "Pulse-Css",
      "text": "Pulse CSS"
    },
    {
      "name": "RainbowTextAnimation-Css",
      "text": "Rainbow Text Animation CSS"
    },
    {
      "name": "RainbowUnderlineHover",
      "text": "Rainbow Underline Hover CSS"
    },
    {
      "name": "RandomHexCodeGenerator",
      "text": "Random Hex Code Generator"
    },
    {
      "name": "ScreenResolution",
      "text": "Screen Resolution"
    },
    {
      "name": "ScrollMask-Css",
      "text": "ScrollMask CSS"
    },
    {
      "name": "ShadowText-Css",
      "text": "Shadow Text CSS"
    },
    {
      "name": "SkeletonLoading-Css",
      "text": "Skeleton Loading CSS"
    },
    {
      "name": "StylePolaroids-Css",
      "text": "Style Polaroids CSS"
    },
    {
      "name": "SvgTextAnimation",
      "text": "Svg Text Animation"
    },
    {
      "name": "TriangleHeader-Css",
      "text": "Triangle Header CSS"
    },
    {
      "name": "WeatherGlassmorphism-Css",
      "text": "Weather Glassmorphism CSS"
    }
];

const list = document.getElementById("list");

projects.forEach(({ name, text }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/thumb.png" alt="${name}" />
			<p>${text}</p>
		</a>
	`;

  list.appendChild(listItem);
});

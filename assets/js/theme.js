function initTheme(defaultTheme) {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = defaultTheme || saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}
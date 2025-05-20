/* ─── PRELOADER ─────────────────────────────────────────── */
onload = () => {
  setTimeout(() => document.body.classList.remove("not-loaded"), 1000);
};

/* ─── DARK‑MODE TOGGLE ─────────────────────────────────── */
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  /* swap icon */
  const iconName = document.body.classList.contains("dark") ? "sun" : "moon";
  themeBtn.innerHTML = `<box-icon name='${iconName}'></box-icon>`;
});

/* ─── CLOSE MOBILE MENU WHEN LINK IS CLICKED ───────────── */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  });
});

const root = document.documentElement;
const scene = document.querySelector(".scroll-scene");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScene() {
  if (!scene) return;

  const rect = scene.getBoundingClientRect();
  const available = scene.offsetHeight - window.innerHeight;
  const rawProgress = available > 0 ? -rect.top / available : 1;
  const progress = clamp(rawProgress, 0, 1);

  root.style.setProperty("--scene-progress", progress.toFixed(4));
}

updateScene();
window.addEventListener("scroll", updateScene, { passive: true });
window.addEventListener("resize", updateScene);

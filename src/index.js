import "./style.css";
import renderHome from "./components/home";
import renderAbout from "./components/about";
import { menu } from "./components/menu";

function renderPage() {
    renderHome();
}

renderPage();

const homeBtn = document.querySelector("#homebtn");
homeBtn.addEventListener("click", renderHome);

const menuBtn = document.querySelector("#menubtn");
menuBtn.addEventListener("click", () => menu.renderMenu());

const aboutBtn = document.querySelector("#aboutbtn");
aboutBtn.addEventListener("click", renderAbout);

const exploreBtn = document.querySelector("#explore");
exploreBtn.addEventListener("click", () => menu.renderMenu());



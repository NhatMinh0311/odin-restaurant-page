export default function renderHome (){
    const content = document.querySelector("#content");
    content.innerHTML = `
        <h1>Home</h1>
    `;
    content.appendChild(createHome());
}

function createHome () {
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "home");
    homeDiv.innerHTML = `
        <h2>Pho Restaurant</h2>
        <p>Pho - Well-known traditional Vietnamese food</p>
        <button id="explore">Let's explore!</button>
    `;
    return homeDiv;
}

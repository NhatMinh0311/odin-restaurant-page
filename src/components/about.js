export default function renderAbout(){
    const content = document.querySelector("#content");
    content.innerHTML = `
        <h1>About us</h1>
    `;
    content.append(createInfo(), createContact(), createReservationForm());
}

function createInfo() {
    const infoDiv = document.createElement("div");
    infoDiv.innerHTML = `
        <h2>Pho Restaurant</h2>
        <h3>-Since 1990-</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit dignissimos porro hic et atque ratione voluptates adipisci quaerat! Odio qui nemo, sunt maxime id natus laboriosam laborum architecto illo.</p>
    `;
    return infoDiv;
}
function createContact(){
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact");
    contactDiv.innerHTML = `
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 20px"><title>map-marker-radius</title><path fill="#ffffff" d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>
            <div>123 Thang Long, Ha Noi, Viet Nam</div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 20px; width: 20px"><title>phone</title><path fill="#ffffff" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
            <div>(+84)968 686 868</div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 40px"><title>calendar-month</title><path fill="#ffffff" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>
            <div>
                Mon-Fri: 8am-6pm
                <br>
                Sat-Sun: 8am-8pm
            </div>
        </div>    
    `;
    return contactDiv;
}

function createReservationForm() {
    const form = document.createElement("form");
    form.innerHTML = `
        <h2>Reservation</h2>
        <ul>
            <li>
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname">
            </li>
            <li>
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname">
            </li>
            <li>
                <label for="mail">E-mail:</label>
                <input type="email" id="mail">
            </li>
            <li>
                <label for="phonenum">Phone Number:</label>
                <input type="text" id="phonenum">
            </li>
            <li>
                <label for="date">Reservation Date:</label>
                <input type="date" id="date">
            </li>
            <li>
                <label for="time">Reservation Time:</label>
                <input type="time" id="time">
            </li>
            <li>
                <label for="guestnum">How many person will you be with?</label>
                <input type="number" id="guestnum" min="1>
            </li>
            <li>
                <label for="note">Note:</label>
                <textarea name="note" id="note"></textarea>
            </li>
        </ul>
        <button type="submit">Make reservation</button>
    `;
    return form;
}
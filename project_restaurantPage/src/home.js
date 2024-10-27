const content = document.querySelector("#content");


export function showHome() {

    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outer-container title");
    content.appendChild(outerContainer);


    const heading = document.createElement("div");
    heading.textContent = "HOME";
    heading.setAttribute("class", "heading");
    outerContainer.appendChild(heading);


    const reviewOuter = document.createElement("div");
    reviewOuter.setAttribute("class", "outer-container review-outer");
    content.appendChild(reviewOuter);


    const reviewInner = document.createElement("div");
    reviewInner.setAttribute("class", "inner-container review-inner");
    reviewOuter.appendChild(reviewInner);


    const review = document.createElement("p");
    review.textContent = "Good Food GO BRRRRRR";
    review.setAttribute("class", "review");
    reviewInner.appendChild(review);


    const reviewer = document.createElement("p");
    reviewer.textContent = "Wigglytuff";
    reviewer.setAttribute("class", "review reviewer");
    reviewInner.appendChild(reviewer);

    const timingsOuter = document.createElement("div");
    timingsOuter.setAttribute("class", "outer-container timings-outer");
    content.appendChild(timingsOuter);
    
    const timingsInner = document.createElement("div");
    timingsInner.setAttribute("class", "inner-container timings-inner");
    timingsOuter.appendChild(timingsInner);

    const hours = document.createElement("p");
    hours.textContent = "Hours";
    hours.setAttribute("class", "hours");
    timingsInner.appendChild(hours);

    const sunday = document.createElement("p");
    sunday.textContent = "Sunday: 7am - 5pm";
    sunday.setAttribute("class", "day");
    timingsInner.appendChild(sunday);

    const monday = document.createElement("p");
    monday.textContent = "Monday: 6am - 9pm";
    monday.setAttribute("class", "day");
    timingsInner.appendChild(monday);

    const tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday: 6am - 9pm";
    tuesday.setAttribute("class", "day");
    timingsInner.appendChild(tuesday);

    const wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday: 6am - 9pm";
    wednesday.setAttribute("class", "day");
    timingsInner.appendChild(wednesday);

    const thursday = document.createElement("p");
    thursday.textContent = "Thursday: 6am - 9pm";
    thursday.setAttribute("class", "day");
    timingsInner.appendChild(thursday);

    const friday = document.createElement("p");
    friday.textContent = "Friday: 6am - 9pm";
    friday.setAttribute("class", "day");
    timingsInner.appendChild(friday);

    const saturday = document.createElement("p");
    saturday.textContent = "Saturday: 6am - 9pm";
    saturday.setAttribute("class", "day");
    timingsInner.appendChild(saturday);

    const locationOuter = document.createElement("div");
    locationOuter.setAttribute("class", "outer-container location-outer");
    content.appendChild(locationOuter);


    const locationInner = document.createElement("div");
    locationInner.setAttribute("class", "inner-container location-inner");
    locationOuter.appendChild(locationInner);

    const location = document.createElement("p");
    location.textContent = "Location";
    location.setAttribute("class", "location");
    locationInner.appendChild(location);
    
    const address = document.createElement("p");
    address.textContent = "123 Snor Road, Wiggly Fan Club";
    address.setAttribute("class", "address");
    locationInner.appendChild(address);

}           

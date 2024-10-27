const content = document.querySelector("#content");

const personDetails = [
    {
        personName: "Snorlax",
        personPosition: "Manager",
        personNumber: "1234567891",
        personEmail: "totallyRealEmail.com",
    },
    {
        personName: "Swight Dchrute",
        personPosition:
            "Assistant Regional Manager(Assistant to the Regional Manager)",
        personNumber: "1234567891",
        personEmail: "totallyRealEmail.com",
    },
    {
        personName: "WigglyTuff",
        personPosition: "Waitress",
        personNumber: "1234567891",
        personEmail: "totallyRealEmail.com",
    },
];

export function showAbout() {
    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outer-container title");
    content.appendChild(outerContainer);

    const heading = document.createElement("div");
    heading.textContent = "ABOUT";
    heading.setAttribute("class", "heading");
    outerContainer.appendChild(heading);

    for (let i = 0; i < personDetails.length; i++) {
        const aboutOuterContainer = document.createElement("div");
        aboutOuterContainer.setAttribute("class", "outer-container about-outer");
        content.appendChild(aboutOuterContainer);

        const aboutInnerContainer = document.createElement("div");
        aboutInnerContainer.setAttribute("class", "inner-container about-inner");
        aboutOuterContainer.appendChild(aboutInnerContainer);

        const personName = document.createElement("p");
        personName.setAttribute("class", "person-name");
        personName.textContent = `${personDetails[i].personName}`;
        aboutInnerContainer.appendChild(personName);

        const personDetailsElement = document.createElement("div");
        personDetailsElement.setAttribute("class", "person-details");
        aboutInnerContainer.appendChild(personDetailsElement);

        const personPosition = document.createElement("p");
        personPosition.textContent = `${personDetails[i].personPosition}`;
        personDetailsElement.appendChild(personPosition);

        const personNumber = document.createElement("p");
        personNumber.textContent = `${personDetails[i].personNumber}`;
        personDetailsElement.appendChild(personNumber);

        const personEmail = document.createElement("p");
        personEmail.textContent = `${personDetails[i].personEmail}`;
        personDetailsElement.appendChild(personEmail);
    }
}

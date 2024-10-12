const list = (function () {

    const submitButton = document.querySelector("#submitButton");
    const list = document.querySelector(".nameList");
    const input = document.querySelector("#enterName");
    const stat = document.querySelector(".stat");
    let people = [];
    numberOfPeople = 0
    stat.textContent = numberOfPeople   

    function count() {
        numberOfPeople = people.length
        stat.textContent = numberOfPeople
    }

    function personAdd(value) {
        let name = ""
        if (typeof value === "string") {
            name = value;
            people.push(name);
            render();
        } else {
            name = input.value
            people.push(name);
        }
        
    }

    submitButton.addEventListener("click", () => {
        personAdd();
        count();
        render();

    });


    function render() {
        const node = document.createElement("li");
        const textnode = document.createTextNode(people[people.length - 1]);
        node.appendChild(textnode);
        list.appendChild(node);
    }

    return {
        personAdd: personAdd,
        count: count
    }

})();
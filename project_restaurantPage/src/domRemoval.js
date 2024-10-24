const content = document.querySelector("#content");

export function render() {
    while (document.querySelector(".outer-container") != null) {
        const outerContainer = document.querySelector(".outer-container");
        content.removeChild(outerContainer);
    }
}
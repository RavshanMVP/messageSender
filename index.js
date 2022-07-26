const {hash} = window.location;
const message = (atob(hash.replace("#","")));


if(message){
    document.querySelector("#messageForm").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");
    document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", event=> {
    event.preventDefault();

    const input = document.querySelector("#message");
    document.querySelector("#messageForm").classList.add("hide");
    const encrypted = btoa(input.value);
    const inputLink = document.querySelector("#link");
    document.querySelector("#linkForm").classList.remove("hide");
    inputLink.value = `${window.location}#${encrypted}`;
    inputLink.addEventListener("click", () => {
        inputLink.select()
    });

});
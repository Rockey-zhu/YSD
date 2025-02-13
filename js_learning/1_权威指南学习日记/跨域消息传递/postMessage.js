window.addEventListener("load", function() {
    let origin = "http://davidflanagan.com";
    let gadget = "/demos/TwitterSearch.html";
    let ifarme = document.createElement("iframe");

    ifarme.src = origin;
    ifarme.width = "450";
    ifarme.height = "500";
    ifarme.style.cssFloat = "right";

    document.body.insertBefore(ifarme, document.body.firstChild);

    let links = document.getElementById("as")
    links.addEventListener("mouseover", function() {
        ifarme.contentWindow.postMessage(this.href, origin);
        console.log("111")

    }, false);
}, false);
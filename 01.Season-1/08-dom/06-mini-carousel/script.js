// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var i = 1;
    var img = document.getElementsByTagName("img").item(0);

    document.getElementById("next").addEventListener("click", () => {
        let attr = gallery[i++];
        i > gallery.length ? alert("no more image, reload the page to start again.") : img.setAttribute("src", attr);
    });


})();
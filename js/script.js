const clouds = document.querySelectorAll(".cloud"),
    qush = document.querySelectorAll(".qush"),
    quyosh = document.querySelector(".quyosh");

window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        const speed = cloud.getAttribute("speed")
        cloud.style.transform = `translateX(${windowY * speed}px)`
    }
})



window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    for (let j = 0; j < qush.length; j++) {
        const qushla = qush[j];
        const speed = qushla.getAttribute("speed")
        qushla.style.transform = `translateX(${windowY}px)`

    }
})


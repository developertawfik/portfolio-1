
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });

}


document.querySelector(".homeBtn").addEventListener('click', function () {
    document.querySelector(".home").classList.add("active");
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.remove("active");
})

document.querySelector(".portfolioBtn").addEventListener('click', function () {
    document.querySelector(".portfolio").classList.add("active");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.remove("active");

})
document.querySelector(".aboutBtn").addEventListener('click', function () {
    document.querySelector(".about").classList.add("active")
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.remove("active");
})

document.querySelector(".resumeBtn").addEventListener('click', function () {
    document.querySelector(".resume").classList.add("active");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.remove("active");
})
document.querySelector(".serviceBtn").addEventListener('click', function () {
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".services").classList.add("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.remove("active");
})
document.querySelector(".blogBtn").addEventListener('click', function () {
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.add("active");
    document.querySelector(".contact").classList.remove("active");
})
document.querySelector(".contactBtn").addEventListener('click', function () {
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active")
    document.querySelector(".portfolio").classList.remove("active");
    document.querySelector(".services").classList.remove("active");
    document.querySelector(".blog").classList.remove("active");
    document.querySelector(".contact").classList.add("active");
})
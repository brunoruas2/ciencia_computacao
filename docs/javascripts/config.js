window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
};

window.onload = function () {
    console.log("Chamou a função window.onload");
    myFunction();
}

function myFunction() {
    const logoImg = document.querySelector(".logo");
    logoImg.addEventListener("click", function () {
        window.location.href = "/CC_site/";
    });

    logoImg.addEventListener("mouseover", function() {
        logoImg.style.cursor = "pointer";
    });

    const siteName = document.getElementById("component-site-name");
    siteName.addEventListener("click", function () {
        window.location.href = "/CC_site/";
    });

    siteName.addEventListener("mouseover", function() {
        siteName.style.cursor = "pointer";
    });
}
window.onload = function () {
  console.log("Chamou a função window.onload");
  makeLogoAndTitleClickable();
  importHightlightOnHead();
}

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

// Função para adicionar elementos ao head
function includeExternalScript(src, type = 'text/javascript') {
  var script = document.createElement('script');
  script.type = type;
  script.src = src;
  document.head.appendChild(script);
}

function includeExternalStylesheet(href, rel = 'stylesheet') {
  var link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
}

function importHightlightOnHead() {
  // Adicionar folha de estilo
  includeExternalStylesheet('//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark-reasonable.min.css');

  // Adicionar script do highlight.js
  includeExternalScript('//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js');

  // Adicionar script da linguagem go.min.js
  includeExternalScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/csharp.min.js');

  // Inicializar o highlight.js
  includeExternalScript('script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"');
  includeExternalScript('hljs.initHighlightingOnLoad();');
}

function makeLogoAndTitleClickable() {
  const logoImg = document.querySelector(".logo");
  logoImg.addEventListener("click", function () {
    window.location.href = "/CC_site/";
  });

  logoImg.addEventListener("mouseover", function () {
    logoImg.style.cursor = "pointer";
  });

  const siteName = document.getElementById("component-site-name");
  siteName.addEventListener("click", function () {
    window.location.href = "/CC_site/";
  });

  siteName.addEventListener("mouseover", function () {
    siteName.style.cursor = "pointer";
  });
}
const lockHTML = '<div class="center" style="position: absolute; height: 100%; width: 100%; top: 0; left: 0; background-color: yellow;">\n' +
    '    <marquee><h1>Under Construction</h1></marquee>\n' +
    '</div>'

console.log(document.location.href)

if (document.location.href.includes('https')) {
    console.log("THIS PAGE IS UNDER CONSTRUCTION")
    document.getElementsByTagName("body")[0].innerHTML = lockHTML;
    document.getElementsByTagName("body")[0].style.margin = "0";
}
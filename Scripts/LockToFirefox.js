const lockHTML = '<div class="center" style="position: absolute; height: 100%; width: 100%; top: 0; left: 0; background-color: white;">\n' +
    '    <img src="https://spu.edu/users/lauw/Sage/pic/best-viewed-in-firefox.jpg" />\n' +
    '</div>'

console.log(window.navigator.userAgent)

if (window.navigator.userAgent.includes('Chrome') || window.navigator.userAgent.includes('AppleWebKit')) {
    console.log("KICK THEM OUT!!!")
    document.getElementsByTagName("body")[0].innerHTML += lockHTML;
    document.getElementsByTagName("body")[0].style.margin = "0";
}
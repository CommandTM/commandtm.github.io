console.log("Loading Parsing Script")
const output = document.getElementById("output");

document.getElementById("input").onchange = function (){
    console.log("File Detected")
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function () {
        output.innerText = this.result;
    }

    console.log("Reading File")
    reader.readAsText(file);
}

console.log("Parsing Script Loaded")

var money = 0
var amount = 1
var mult = 1
var workers = 0
var interval = 1

var pounds = 0
var severity = 1
var impact = 1

var yen = 0

const amountPrice = 100
const multPrice = 1000
const workerPrice = 10000
const intervalPrice = 100000
const hackingPrice = 100000000000
const severityPrice = 10
const impactPrice = 20
const optimizePrice = 100
const contractBaseMin = 10
const contractBaseMax = 51

const progressDisplay = document.getElementById("hackProgress")
const contractProgressDisplay = document.getElementById("contractProgress")
const employers = ["Coraline Zelpha", "Sha'ul Glinda", "Persis Aladdin", "Elmira Iosue"]

var workInterval

var hacking
var hackProgress = 0
var hackInterval

var hasContract = false
var contractReward = 0
var contractProgress = document.getElementById("contractProgress")

/*
money = hackingPrice
purchaseHacking()
 */

function test(){
    console.log("Click!")
}

function increment(){
    money = money + (amount*mult)
}

function hack() {
    if (!hacking){
        hacking = true
        hackInterval = setInterval(hack, 1000)
        console.log("Starting To Hack")
        hackProgress++
    } else if (hackProgress === progressDisplay.max){
        hacking = false
        clearInterval(hackInterval)
        hackProgress = 0

        if (document.getElementById("targetSelect").selectedOptions[0].innerText === "The Bank"){
            pounds += (severity*impact)
        }

        if (document.getElementById("targetSelect").selectedOptions[0].innerText === "Contract"){
            contractProgress.value += (severity*impact)
            checkContract()
        }
    } else {
        /*
        if (document.getElementById("targetSelect").selected === "The Bank"){
            hackProgress++
        } else if (document.getElementById("targetSelect").selected === "Contract"){
            contractProgress++
        }
         */
        hackProgress++
    }
}

function checkContract(){
    if (hasContract === false){
        newContract()
    }

    if (contractProgress.value >= contractProgress.max){
        yen += contractReward
        newContract()
    }
}

function newContract(){
    hasContract = true
    let contractName = employers.at(randInt(0, 3))
    document.getElementById("contractName").innerText = contractName
    document.getElementById("contractDisplay").src = "assets/gameAssets/" + contractName + ".png"
    contractProgress.value = 0
    contractProgress.max = Math.floor(randInt(contractBaseMin*(Math.floor((severity*impact)/4)), contractBaseMax*(Math.floor((severity*impact)/4))))
    contractReward = Math.floor(contractProgress.max/10)
    document.getElementById("contractReward").innerText = "¥" + contractReward
}

function randInt(min, max){
    return Math.floor(Math.random() * ((max+1)-min)) + min;
}

function purchaseAmount(){
    if (money >= amountPrice){
        money = money - amountPrice
        amount++

        if (amount === 5){
            unlock("mult")
        }
    }
}

function purchaseMult(){
    if (money >= multPrice){
        money = money - multPrice
        mult++

        if (mult === 10){
            unlock("worker")
        }
    }
}

function purchaseWorker(){
    if (money >= workerPrice){
        money = money - workerPrice
        workers++
        document.getElementById("workerDisplay").innerText += "☺"

        if (workers === 1){
            workInterval = setInterval(work, 1000)
        }

        if (workers === 20){
            unlock("interval")
        }
    }
}

function purcahseInterval(){
    if (money >= intervalPrice){
        money = money - intervalPrice
        interval -= 0.001
        document.getElementById("intervalDisplay").style.width = (300*interval) + "px"

        clearInterval(workInterval)
        workInterval = setInterval(work, (1000*interval))

        if (interval <= 0.001){
            lock("interval")
            unlock("hacking")
        }
    }
}

function purchaseHacking(){
    if (money >= hackingPrice){
        lock("hacking")
        money = money - hackingPrice
        unlock("hSeverity")
        unlock("hImpact")
        unlock("hOptimize")

        document.getElementById("hSeverityDisplay").hidden = false
        document.getElementById("hImpactDisplay").hidden = false
        document.getElementById("mainHackWindow").hidden = false
    }
}

function purchaseSeverity(){
    if (pounds >= severityPrice){
        pounds -= severityPrice
        progressDisplay.max += 1
        severity++
    }
}

function purchaseImpact(){
    if (pounds >= impactPrice){
        pounds -= impactPrice
        progressDisplay.max = Math.round(progressDisplay.max*1.1)
        impact++
    }
}

function purchaseOptimization(){
    if (pounds >= optimizePrice && progressDisplay.max > 1){
        pounds -= optimizePrice
        progressDisplay.max -= 1
    }
}

function display(){
    document.getElementById("moneyDisplay").innerText = "$" + money
    document.getElementById("multDisplay").innerText = "Mult: " + mult
    document.getElementById("amountDisplay").innerText = "Amount: " + amount
    progressDisplay.value = hackProgress
    document.getElementById("poundsDisplay").innerText = "£" + pounds
    document.getElementById("hSeverityDisplay").innerText = "Severity: " + severity
    document.getElementById("hImpactDisplay").innerText = "Impact: " + impact
}

function work(){
    for (let i = 0; i < workers; i++){
        increment()
    }
}

function cheat(type){
    if (type === 0){
        money += parseInt(document.getElementById("cheat").value)
    } else {
        pounds += parseInt(document.getElementById("cheat").value)
    }
}

function save(){
    localStorage.setItem("exists", "yes")
    localStorage.setItem("version", 2)
    localStorage.setItem("money", money)
    localStorage.setItem("amount", amount)
    localStorage.setItem("multUnlocked", !document.getElementById("multText").hidden)
    localStorage.setItem("mult", mult)
    localStorage.setItem("workerUnlocked", !document.getElementById("workerText").hidden)
    localStorage.setItem("workers", workers)
    localStorage.setItem("intervalUnlocked", !document.getElementById("intervalText").hidden)
    localStorage.setItem("interval", interval)
    localStorage.setItem("hackingPurchasable", !document.getElementById("hackingText").hidden)
    localStorage.setItem("hackingUnlocked", !document.getElementById("mainHackWindow").hidden)
    localStorage.setItem("pounds", pounds)
    localStorage.setItem("severity", severity)
    localStorage.setItem("impact", impact)
    localStorage.setItem("optimization", progressDisplay.max)
    localStorage.setItem("cheating", !document.getElementById("cheatWindow").hidden)
    localStorage.setItem("hackProgress", hackProgress)
}

function clearSave(){
    if (window.confirm("Are You Sure You Want To Reset Your Save?")){
        localStorage.setItem("exists", null)
        location.reload()
    }
}

function load(){
    if (localStorage.getItem("exists") === "yes"){
        money = Number(localStorage.getItem("money"))
        amount = parseInt(localStorage.getItem("amount"))
        mult = parseInt(localStorage.getItem("mult"))
        workers = parseInt(localStorage.getItem("workers"))
        interval = parseFloat(localStorage.getItem("interval"))
        pounds = parseInt(localStorage.getItem("pounds"))
        severity = parseInt(localStorage.getItem("severity"))
        impact = parseInt(localStorage.getItem("impact"))
        progressDisplay.max = parseInt(localStorage.getItem("optimization"))

        if (localStorage.getItem("multUnlocked") === "true"){
            unlock("mult")
        }

        if (localStorage.getItem("workerUnlocked") === "true"){
            unlock("worker")
        }

        if (localStorage.getItem("intervalUnlocked") === "true"){
            unlock("interval")
        }

        if (localStorage.getItem("hackingPurchasable") === "true"){
            unlock("hacking")
        }

        if (localStorage.getItem("hackingUnlocked") === "true"){
            money += hackingPrice
            purchaseHacking()
        }

        if (localStorage.getItem("cheating") === "true"){
            document.getElementById("cheatWindow").hidden = false
        }

        if (workers >= 1){
            workInterval = setInterval(work, (1000))
        }

        if (interval < 1){
            document.getElementById("intervalDisplay").style.width = (300*interval) + "px"
            clearInterval(workInterval)
            workInterval = setInterval(work, (1000*interval))
        }

        for (let i = 0; i < workers; i++){
            document.getElementById("workerDisplay").innerText += "☺"
        }

        if (parseInt(localStorage.getItem("version")) >= 2){
            hackProgress = localStorage.getItem("hackProgress")
        }
    }
}

setInterval(display, 1)
setInterval(save, 60000)

const buttonWindow = new Window("buttonWindow");
const moneyWindow = new Window("moneyWindow")
const storeWindow = new Window("storeWindow")
const hackWindow = new Window("mainHackWindow")
const cheatWindow = new Window("cheatWindow")
const contractsWindow = new Window("hackContractsWindow")
const saveWindow = new Window("saveWindow")

load()
checkContract()

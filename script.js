const ancho = document.getElementById('width')
const sizeMod = document.getElementById('sizeModifier')
const extraFabric = document.getElementById('extraFabric')
const fabricFullSize = document.getElementById('fullSize')
let c1 = document.querySelectorAll('.manufacturingPrice')
let pvpConfection = document.querySelectorAll('.confectionPrice')
let totalConfection = document.querySelectorAll('.totalManufacturingPrice')
const totalConfectionsCost = document.getElementById('totalConfectionsCost')
const c1Total = document.getElementById('totalC1')
const fabricPrice = document.getElementById('fabricPrice')
const fabricCost = document.getElementById('totalFabricPrice')
const finalPrice = document.getElementById('finalPrice')
let totalAllConfections = 0

const confections = document.getElementById('confections')

calculateBudget()

function calculateBudget() {
    fabricFullSize.innerText = `${calculateFabricSize()} m`
    fabricCost.innerText = `${calculateFabricPrice()} €`
    c1Total.innerText = `${calculateC1()}`
    calculateConfection()
    finalPrice.innerText = `${calculateFinalPrice()} €`
}

function calculateFabricSize(){
    let a = Number(ancho.value)
    let sm = Number(sizeMod.value)
    let ef = Number(extraFabric.value)
    let ans = Math.floor((a*sm+ef)*100)/100
    return ans
}

function calculateFabricPrice(){
    let ts = calculateFabricSize()
    let fp = Number(fabricPrice.value)
    let ans = Math.floor((ts*fp)*100)/100
    return ans
}

function calculateC1(){
    let ans = 0
    c1.forEach((c) => ans+=Number(c.value))
    return ans
}

function calculateConfection(){
    let ts = calculateFabricSize()
    totalAllConfections = 0
    for (let i = 0; i < totalConfection.length; i++) {
        let tc = totalConfection[i]
        let pvp = Number(pvpConfection[i].value)
        let ans = Math.floor((pvp*ts)*100)/100
        tc.innerText = `${ans} €`
        totalAllConfections += ans
    }
    totalConfectionsCost.innerText = `${Math.floor(totalAllConfections*100)/100} €`
}

function calculateFinalPrice(){
    let fPrice = calculateFabricPrice()
    let ans = Math.floor((fPrice+totalAllConfections)*100)/100
    return ans
}

function addConfection(){
    confections.style.display = 'flex'
    confections.innerHTML += 
        `<div class="confection">
            <div class="cell">
                <p>C1</p>
                <input type="number" class="manufacturingPrice" value="000" min="0" onchange="calculateBudget()">
            </div>
            <div class="cell">
                <p>PVP confección (€)</p>
                <input type="number" class="confectionPrice" value="0.00" min="0" onchange="calculateBudget()">
            </div>
            <div class="cell">
                <p>Coste de confección</p>
                <p class="totalManufacturingPrice">0 €</p>
            </div>
        </div>`
    c1 = document.querySelectorAll('.manufacturingPrice')
    pvpConfection = document.querySelectorAll('.confectionPrice')
    totalConfection = document.querySelectorAll('.totalManufacturingPrice')
    calculateBudget()
}
const ancho = document.getElementById('width')
const sizeMod = document.getElementById('sizeModifier')
const extraFabric = document.getElementById('extraFabric')
const fabricFullSize = document.getElementById('fullSize')
let c1 = document.querySelectorAll('.manufacturingPrice')
let pvpConfection = document.querySelectorAll('.confectionPrice')
let totalConfection = document.querySelectorAll('.totalManufacturingPrice')
const totalConfectionsCost = document.getElementById('totalConfectionsCost')
const c1Total = document.getElementById('totalC1')
const pvpTotal = document.getElementById('totalPVP')
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
    pvpTotal.innerText = `${calculatePVP()} €`
    calculateConfection()
    finalPrice.innerText = `${calculateFinalPrice()} €`
}

function calculateFabricSize(){
    let a = Number(ancho.value)
    let sm = Number(sizeMod.value)
    let ef = Number(extraFabric.value)
    let ans = (a*sm+ef).toFixed(2)
    return Number(ans)
}

function calculateFabricPrice(){
    let ts = calculateFabricSize()
    let fp = Number(fabricPrice.value)
    let ans = (ts*fp).toFixed(2)
    return Number(ans)
}

function calculateC1(){
    let ans = 0
    c1.forEach((c) => ans+=Number(c.value))
    return ans
}

function calculatePVP(){
    let ans = 0
    pvpConfection.forEach((pvp) => ans+=Number(pvp.value))
    return ans
}

function calculateConfection(){
    let ts = calculateFabricSize()
    totalAllConfections = 0
    for (let i = 0; i < totalConfection.length; i++) {
        let tc = totalConfection[i]
        let pvp = Number(pvpConfection[i].value)
        let ans = Number((pvp*ts).toFixed(2))
        tc.innerText = `${ans} €`
        totalAllConfections += ans
    }
    totalConfectionsCost.innerText = `${totalAllConfections} €`
}

function calculateFinalPrice(){
    let fPrice = calculateFabricPrice()
    let ans = Number(fPrice+totalAllConfections).toFixed(2)
    return ans
}

function addConfection(){
    confections.style.display = 'flex'
    let element = document.createElement('div')
    element.classList.add('confection')
    element.innerHTML = `
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
        <button onclick="deleteConfection(this)" class="deleteButton">
            Eliminar
        </button>`
    confections.appendChild(element)
    c1 = document.querySelectorAll('.manufacturingPrice')
    pvpConfection = document.querySelectorAll('.confectionPrice')
    totalConfection = document.querySelectorAll('.totalManufacturingPrice')
    calculateBudget()
}

function deleteConfection(e){
    confections.removeChild(e.parentElement)
}
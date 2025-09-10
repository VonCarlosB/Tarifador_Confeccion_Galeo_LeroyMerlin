const ancho = document.getElementById('width')
const sizeMod = document.getElementById('sizeModifier')
const fabricFullSize = document.getElementById('fullSize')
let c1 = document.querySelectorAll('.manufacturingPrice')
let pvpConfection = document.querySelectorAll('.confectionPrice')
let totalConfection = document.querySelectorAll('.totalManufacturingPrice')
const c1Total = document.getElementById('totalC1')
const fabricPrice = document.getElementById('fabricPrice')
const fabricCost = document.getElementById('totalFabricPrice')
const finalPrice = document.getElementById('finalPrice')

function calculateBudget() {
    fabricFullSize.innerText = `${calculateFabricSize()} m`
    fabricCost.innerText = `${calculateFabricPrice()} €`
}

function calculateFabricSize(){
    let a = Number(ancho.value)
    let sm = Number(sizeMod.value)
    let ans = Math.floor((a*sm+0.1)*100)/100
    return ans
}

function calculateFabricPrice(){
    let ts = calculateFabricSize()
    let fp = Number(fabricPrice.value)
    let ans = Math.floor((ts*fp)*100)/100
    return ans
}
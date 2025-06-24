const transientState = {
    entreeId: 0,
    vegId: 0,
    sideId: 0,
}
export const setEntree = (chosenEntree) => {
    transientState.entreeId = parseInt(chosenEntree)
    document.dispatchEvent(new CustomEvent("stateChange"))
}
export const setVeg = (chosenVeg) => {
    transientState.vegId = parseInt(chosenVeg)
    document.dispatchEvent(new CustomEvent("stateChange"))
}
export const setSide = (chosenSide) => {
    transientState.sideId = parseInt(chosenSide)
    document.dispatchEvent(new CustomEvent("stateChange"))
}




export const purchaseFunction = async () => {

    const orderButton = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", orderButton)
    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)

}



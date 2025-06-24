import { setSide } from "./TransientState.js"

export const SideOptions = async () => {
    const repsonse = await fetch("http://localhost:8088/sides")
    const sides = await repsonse.json()

    const entreeHTML = `
    <h2>Sides</h2>
    ${sides
            .map((side) => {
                return `<input type="radio" name="side" value=${side.id} id="side--${side.id}">${side.title} costs $${side.price}`


            }



            ).join(" ")}
    


    `


    return entreeHTML
}


const handleEntreeSelection = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        setSide(changeEvent.target.value)
    }
}

document.addEventListener("change", handleEntreeSelection)
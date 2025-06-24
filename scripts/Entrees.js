import { setEntree } from "./TransientState.js"

export const EntreeOptions = async () => {
    const repsonse = await fetch("http://localhost:8088/entrees")
    const entrees = await repsonse.json()

    const entreeHTML = `
    <h2>Entrees</h2>
    ${entrees
            .map((entree) => {
                return `<input type="radio" name="entree" value=${entree.id} id="entree--${entree.id}">${entree.name} costs $${entree.price}`


            }



            ).join(" ")}
    


    `


    return entreeHTML
}


const handleEntreeSelection = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntree(changeEvent.target.value)
    }
}

document.addEventListener("change", handleEntreeSelection)
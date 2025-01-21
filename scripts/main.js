import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>${Pairings()}</h2>
    </article>
`

mainContainer.innerHTML = applicationHTML

const kidsList = document.querySelectorAll(".details__kids li")
const celebritiesList = document.querySelectorAll(".details__celebrities li")

for (let i = 0; i < kidsList.length; i++) {
    kidsList[i].addEventListener("click", () => {
        const dataType = kidsList[i].getAttribute("data-type")
        const dataWish = kidsList[i].getAttribute("data-wish")
        if (dataType === "child" && dataWish) {
            window.alert(`${kidsList[i].textContent}'s wish is: ${dataWish}`)
        }
    })
}

for (let i = 0; i < celebritiesList.length; i++) {
    celebritiesList[i].addEventListener("click", () => {
        const dataType = celebritiesList[i].getAttribute("data-type")
        const dataSport = celebritiesList[i].getAttribute("data-sport")
        if (dataType === "celebrity" && dataSport) {
            window.alert(`${celebritiesList[i].textContent.trim()}'s sport is: ${dataSport}`)
        }
    })
}
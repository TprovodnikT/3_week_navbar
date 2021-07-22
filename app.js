const burgerBtnContainer = document.querySelector(".nav_burger_container")

const navMenuBar = document.querySelector(".nav_menu")
const navMenuArr = document.querySelectorAll(".nav_menu_item")

const navMenuBurger = document.querySelectorAll(".nav_burger")
// const rootElement = document.querySelector(":root")


let menuIsBlured = false;
let menuOpen = false;

navMenuBar.addEventListener("mouseover", blureOtherMenuItems, false)
navMenuBar.addEventListener("mouseout", unblureOtherMenuItems, false)
burgerBtnContainer.addEventListener("click", openMenu, false)

window.addEventListener("resize", resetMenuOnResize, false)


function resetMenuOnResize() {
    if (window.innerWidth > 649) {
        navMenuBar.classList.remove("change_nav_bar_location")
        bulkClassAction("remove", navMenuArr, "unhide_menu")
        burgerBtnContainer.classList.remove("open")
    }
}

function openMenu() {
    burgerBtnContainer.classList.toggle("open")
    bulkClassAction("toggle", navMenuArr, "unhide_menu")
    navMenuBar.classList.add("change_nav_bar_location")
    menuOpen = true
}

function blureOtherMenuItems(event) {
    if (!menuIsBlured) {
        // console.log(event.target )
        navMenuArr.forEach(menuItem => {

            if (menuItem != event.target || menuItem != event.target.parent) {
                // console.log(menuItem)
                menuItem.classList.add("blureItem")
            }
        })
        menuIsBlured = !menuIsBlured;
    }
}
function unblureOtherMenuItems(event) {
    if (menuIsBlured) {
        console.log(event)
        navMenuArr.forEach(menuItem => {
            menuItem.classList.remove("blureItem")
        })
        menuIsBlured = !menuIsBlured;
    }
}
// Util function to apply class action to a list of elements
function bulkClassAction(action, list, className) {
    if (action === "toggle") {
        list.forEach(menuItem => {
            menuItem.classList.toggle(className)
        })
    }
    if (action === "remove") {
        list.forEach(menuItem => {
            menuItem.classList.remove(className)
        })
    }
    if (action === "add") {
        list.forEach(menuItem => {
            menuItem.classList.add(className)
        })
    }
}

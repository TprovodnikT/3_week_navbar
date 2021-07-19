const burgerBtnContainer = document.querySelector(".nav_burger_container")

const navMenuBar = document.querySelector(".nav_menu")
const navMenuArr = document.querySelectorAll(".nav_menu_item")

const navMenuBurger = document.querySelectorAll(".nav_burger")

let menuIsBlured = false;
let menuOpen = false;
burgerBtnContainer.addEventListener("click", openMenu, false)
function openMenu() {
    if (!menuOpen) {
        burgerBtnContainer.classList.add("open")
        navMenuArr.forEach(menuItem => {
            menuItem.classList.add("unhide_menu")
        })
        menuOpen = true
    } else {
        burgerBtnContainer.classList.remove("open")
        navMenuArr.forEach(menuItem => {
            menuItem.classList.remove("unhide_menu")
        })
        menuOpen = false
    }
}

// navMenuArr.forEach(menuItem => {
//     menuItem.addEventListener("mouseover", blureOtherMenuItems, false)
// })
// navMenuArr.forEach(menuItem => {
    //     menuItem.addEventListener("mouseout", unblureOtherMenuItems, false)
    // })
        navMenuBar.addEventListener("mouseover", blureOtherMenuItems, false)
        navMenuBar.addEventListener("mouseout", unblureOtherMenuItems, false)
    // navMenuBar.addEventListener("mouseover", blureOtherMenuItems, false)
function blureOtherMenuItems(event) {
    if (!menuIsBlured) {
        console.log(event.target )
        navMenuArr.forEach(menuItem => {

            if (menuItem != event.target || menuItem != event.target.parent) {
                console.log(menuItem)
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



// console.log("Hello Gumagana yung javascript mo idol");

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("active-tab");

function openTab(tabName, event) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

const sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


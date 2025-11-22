
export function profile(container) {
    const profileEl =  document.createElement("div")
    profileEl.classList.add("profile-container")
    profileEl.innerHTML = `
    <div>
    <a>
    <svg width="20" height="15"><use xlink:href="img/sprite.svg#profile-icon" ></use></svg>
    <span>Profile Settings</span>
    </a>
    <a>
    <svg width="20" height="20"><use xlink:href="img/sprite.svg#list-icon" ></use></svg>
    <span>Transaction History</span>
    </a>
    </div>

    <div></div>

    <div></div>`

    container.append(profileEl)
}
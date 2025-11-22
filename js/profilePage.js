
export function profile(container) {
    const profileEl =  document.createElement("div")
    profileEl.classList.add("profile-container")
    profileEl.innerHTML = `
    <div>
    <ul>
    <li><a>
    <svg width="20" height="15"><use xlink:href="img/sprite.svg#profile-icon" ></use></svg>
    <span>Profile Settings</span>
    </a></li>
    <li><a>
    <svg width="20" height="20"><use xlink:href="img/sprite.svg#list-icon" ></use></svg>
    <span>Transaction History</span>
    </a></li>
    <li><a>
    <svg width="20" height="15"><use xlink:href="img/sprite.svg#currency-icon" ></use></svg>
    <span>Currency Exchange</span>
    </a></li>
    </ul>
    
    </div>

    <div>Balance</div>

    <div>
    <ul>
    <li><a>
    <svg width="20" height="15"><use xlink:href="img/sprite.svg#profile-icon" ></use></svg>
    <span>Profile Settings</span>
    </a></li>
    <li><a>
    <svg width="20" height="20"><use xlink:href="img/sprite.svg#list-icon" ></use></svg>
    <span>Transaction History</span>
    </a></li>
    <li><a>
    <svg width="20" height="15"><use xlink:href="img/sprite.svg#currency-icon" ></use></svg>
    <span>Currency Exchange</span>
    </a></li>
    </ul>
    </div>`

    container.append(profileEl)
}


async function moduling(value) {
    const appEl = document.querySelector(".app")

    switch (value) {
        case "login":
        const {login} = await import("./login.js")
        login(appEl)
        break;
        case "register": 
        const {register} = await import("./login.js")
        register(appEl)
        break;
    }
}

moduling("register")


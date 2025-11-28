import { moduling } from "./main.js";

export function login(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form">
      <h2 class="register-title">Login</h2>
      
      <input class="login-name" type="text" placeholder="login" name="login" required />
      <input class="login-password" type="password" placeholder="password" name="password" required />
      
      <div class="login-inner">
        <button class="allSubmit" type="submit">Login</button>
        
        <div class="linkToRegister  pop">
          <span class="login-reset">forgot login or password?</span> 
          <button type="button" class="btnToReset">Reset</button>
        </div>
        
        <div class="linkToRegister">
          <span class="login-reset">new user?</span> 
          <button type="button" class="btnToRegister">Register</button>
        </div>
      </div>
    </form>`;

  const linktoregister = appWrapper.querySelector(".btnToRegister");
  const formEl = appWrapper.querySelector(".login-form");

  let count = 0;

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(formEl);
    const userLogin = data.get("login");
    const userPassword = data.get("password");

    const memory = JSON.parse(localStorage.getItem("userLogin"));

    if (
      memory.find(
        (el) => el.login === userLogin && el.password === userPassword
      )
    ) {
      moduling("profile");
    } else {
      alert("wrong login or password");
      count += 1;
      if (count === 2) {
        appWrapper.querySelector(".pop").classList.remove("pop");
      }
    }
  });

  linktoregister.addEventListener("click", function (e) {
    moduling("register");
  });

  container.append(appWrapper);
}

export function register(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="register-form">
    <h2 class="register-titile">Register</h2>

    <input class="register-name" placeholder="full name" name="userFullName" required>

    <input class="register-surname" placeholder="login" name="userLogin" required>

     <input class="login-passsword" placeholder="password" name="userPassowrd" required>

     <div class="register-inner">

     <button type="submit">Register</button>

      <div class="linkToLogin">
      <span class="login-reset">already registered?</span>
       <button type="button" class="btnToLogin">Login</button>
      </div>
      </div>
      
    </form>`;

  const formEl = appWrapper.querySelector(".register-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(formEl);
    const userLogin = data.get("userLogin");
    const userPassword = data.get("userPassowrd");

    const userData = {
      login: userLogin,
      password: userPassword,
    };

    const memory = JSON.parse(localStorage.getItem("userLogin")) || [];
    if (memory.find((el) => el.login === userData.login)) {
      alert("data is not the same");
    } else {
      memory.push(userData);
      alert("success");
    }


    localStorage.setItem("userLogin", JSON.stringify(memory));
  });

  formEl.querySelector(".btnToLogin").addEventListener("click" , function(e) {[
    moduling("login")
  ]})

  container.append(appWrapper);
}

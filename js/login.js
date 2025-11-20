export function login(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form">
      <h2 class="register-title">Login</h2>
      
      <input class="login-name" type="text" placeholder="login" name="email" required />
      <input class="login-password" type="password" placeholder="password" name="password" required />
      
      <div class="login-inner">
        <button class="allSubmit" type="submit">Login</button>
        
        <div class="linkToRegister">
          <span class="login-reset">forgot login or password?</span> 
          <button type="button" class="btnToRegister">Reset</button>
        </div>
        
        <div class="linkToRegister">
          <span class="login-reset">new user?</span> 
          <button type="button" class="btnToRegister">Register</button>
        </div>
      </div>
    </form>`;

  
  const formEl = appWrapper.querySelector(".login-form")

    formEl.addEventListener("submit", function(e) {
      e.preventDefault()
      const data = new FormData(formEl)
      const obj = Object.fromEntries(data)
      console.log(obj)
      const memory = JSON.parse(localStorage.getItem("userLogin")) || []
      memory.push(obj)

      localStorage.setItem("userLogin", JSON.stringify(memory))
    }) 

  container.append(appWrapper);
}

export function register(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="register-form" type="submit">
    <h2 class="register-titile">Register</h2>

    <input class="register-name" placeholder="login" name="registerElementName" required>

    <input class="register-surname" placeholder="login" name="registerElementSurname" required>

     <input class="login-passsword" placeholder="password" name="registerElement" required>

     <div class="register-inner">

     <button type="submit">Register</button>

      <div class="linkToLogin">
      <span class="login-reset">already registered?</span>
       <button class="btnToLogin">Login</button>
      </div>
      </div>
      
    </form>`;

  container.append(appWrapper);
}

export function login(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form" type="submit">
    <h2 class="register-titile">Login</h2>
    <input class="login-name" placeholder="login" name="loginElement"></input>
     <input class="login-passsword" placeholder="password" name="passwordElement"></input>
    
      <div class="login-inner">
     <button type="submit">Login</button>
     
     <div class="linkToRegister"><span class="login-reset">forgot login or password?</span> <button class="btnToRegister">Reset</button></div>
      <div class="linkToRegister"><span class="login-reset">new user?</span> <button class="btnToRegister">Register</button></div>
      </div>
    </form>`;

  container.append(appWrapper);
}



export function register(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="register-form" type="submit">
    <h2 class="register-titile">Register</h2>
    <input class="register-name" placeholder="login" name="registerElementName"></input>
    <input class="register-surname" placeholder="login" name="registerElementSurname"></input>
     <input class="login-passsword" placeholder="password" name="registerElement"></input>
     <div class="register-inner">
     <button type="submit">Register</button>
      <div class="linkToLogin"><span class="login-reset">already registered?</span> <button class="btnToLogin">Login</button>
      </div>
      </div>
      
    </form>`;

  container.append(appWrapper);
}

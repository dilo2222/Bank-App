export function login(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form" type="submit">
    <input class="login-name" placeholder="login" name="loginElement"></input>
     <input class="login-passsword" placeholder="password" name="passwordElement"></input>
      <button type="submit">Login</button>
      <span class="login-reset">forgot login or password?</span>
      <button class="linkToRegister">New User?</button>
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
      <div class="linkToLogin"><span>already registered?</span> <button class="btnToLogin">Login</button> </div>
      </div>
      
    </form>`;

  container.append(appWrapper);
}

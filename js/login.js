export function login(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form" type="submit">
    <input class="login-name" placeholder="login" name="loginElement"></input>
     <input class="login-passsword" placeholder="password" name="passwordElement"></input>
      <button type="submit">Login</button>
      <span class="login-reset">forgot login or password?</span>
    </form>`;

  container.append(appWrapper);
}

export function register(container) {
  const appWrapper = document.createElement("div");

  appWrapper.innerHTML = `
    <form class="login-form" type="submit">
    <input class="register-name" placeholder="login" name="registerElementName"></input>
    <input class="register-surname" placeholder="login" name="registerElementSurname"></input>
     <input class="login-passsword" placeholder="password" name="registerElement"></input>
      <button type="submit">Register</button>
    </form>`;

  container.append(appWrapper);
}

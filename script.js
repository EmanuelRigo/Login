let savedPIN = "1234";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("ingrese su pin, tienes " + (i + 1) + " intentos");
    if (userPIN === savedPIN) {
      alert("ingreso exitoso. Bienvenido/a");
      ingresar = true;
      break;
    } else {
      alert("error te quedan " + i + " intentos");
    }
  }

  return ingresar;
}

login();

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

if (login()) {
  let saldo = 200000;
  let opcion = prompt(
    "Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresiona X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("tu saldo es $ " + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("ingresa la cantidad  a retirar"));
        if (retiro <= saldo) {
          saldo -= retiro;
          alert("Retiro exitoso. Tu nuevo saldo es $ " + saldo);
        } else {
          alert("fondos insuficientes");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("ingresa monto a depositar"));
        saldo += deposito;
        alert("Deposito exitoso, su nuevo saldo es $ " + saldo);
        break;
      default:
        alert("elegiste una opcion invalida");
        break;
    }
    opcion = prompt(
      "Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresiona X para finalizar."
    );
  }
} else {
  alert("nos quedaremos con tu tarjeta");
}
alert("adios");
login();

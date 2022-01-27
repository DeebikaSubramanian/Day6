let login = 'Employee';
let message = (login == 'Employee') ? "hello":
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);
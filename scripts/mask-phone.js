function applyMask() {
  const input = document.getElementById('phone');
  let value = input.value;

  // Remove tudo que não for número
  value = value.replace(/\D/g, '');

  // Adiciona o +55 automaticamente, mas permite que o usuário edite
  if (value.length <= 2) {
    input.value = `(${value})`;
  } else if (value.length <= 6) {
    input.value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
  } else if (value.length <= 10) {
    input.value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
  } else {
    input.value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
  }
}
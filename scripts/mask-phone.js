function applyMask() {
  const input = document.getElementById('phone');
  let value = input.value;

  value = value.replace(/\D/g, '');

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
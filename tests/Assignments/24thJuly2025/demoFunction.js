function generteRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  for (let i = 0; i < 10; i++) {
    email += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return email + '@example.com';
}

console.log(generteRandomEmail()); // Example output: '
console.log(generteRandomEmail()); // Example output: '
console.log(generteRandomEmail()); // Example output: '
console.log(generteRandomEmail()); // Example output: '
console.log(generteRandomEmail()); // Example output: '
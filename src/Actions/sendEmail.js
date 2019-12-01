async function sendEmail(message) {
  const response = await fetch('https://www.julienorcross.com/contact.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });

  const result = await response.json();
  return result;
}

export default sendEmail;

async function action({ request }) {
  const formData = await request.formData();

  formData.append("access_key", "35418066-5a76-4d8b-9444-511e467caeac");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data;
}

export { action };

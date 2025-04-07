const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

fetch(`${apiUrl}?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

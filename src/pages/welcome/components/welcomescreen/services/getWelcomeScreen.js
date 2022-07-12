export default async function getWelcomeScreen() {
  const response = await fetch(
    "https://smarthouse-renewed.herokuapp.com/api/welcome-screen",
    {
      method: "GET",
    }
  );

  const json = await response.json();

  return json;
}

export default async function getWelcomeScreen() {
  const response = await fetch("http://192.168.1.8:3001/api/welcome-screen", {
    method: "GET",
  });

  const json = await response.json();

  return json;
}

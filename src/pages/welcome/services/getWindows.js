export default async function getWindows() {
  const response = await fetch(
    "https://smarthouse-renewed.herokuapp.com/api/windows",
    {
      method: "GET",
    }
  );

  const json = await response.json();

  return json;
}

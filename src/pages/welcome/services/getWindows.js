export default async function getWindows() {
  const response = await fetch("http://localhost:3001/api/windows", {
    method: "GET",
  });

  const json = await response.json();

  return json;
}

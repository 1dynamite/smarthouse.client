export default async function getWindows() {
  const response = await fetch("http://192.168.1.8:3001/api/windows", {
    method: "GET",
  });

  const json = await response.json();

  return json;
}

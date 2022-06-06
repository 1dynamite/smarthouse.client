export default async function getWindows() {
  const response = await fetch("http://192.168.0.166:3001/api/windows", {
    method: "GET",
  });

  const json = await response.json();

  return json;
}

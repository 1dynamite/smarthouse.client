export default async function getDetails(detailId) {
  const response = await fetch(
    `http://192.168.0.166:3001/api/details/${detailId}`,
    {
      method: "GET",
    }
  );

  const json = await response.json();

  return json;
}

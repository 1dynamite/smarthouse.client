export default async function getDetails(detailId) {
  const response = await fetch(
    `http://localhost:3001/api/details/${detailId}`,
    {
      method: "GET",
    }
  );

  const json = await response.json();

  return json;
}

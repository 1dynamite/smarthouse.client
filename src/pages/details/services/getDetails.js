export default async function getDetails(detailId) {
  const response = await fetch(
    `https://smarthouse-renewed.herokuapp.com/api/details/${detailId}`,
    {
      method: "GET",
    }
  );

  const json = await response.json();

  return json;
}

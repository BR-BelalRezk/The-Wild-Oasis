export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );

    return await res.json();
  } catch {
    throw new Error("Could not fetch countries");
  }
}

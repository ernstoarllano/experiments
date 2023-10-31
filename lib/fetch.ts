/**
 * Fetches data from the given url and returns it as a JSON object.
 * 
 * @param {string} url - The url to fetch data from
 * @returns {Promise<T>} The data as a JSON object
 */
export async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}
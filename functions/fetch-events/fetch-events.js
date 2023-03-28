// const handler = async (event) => {
//   const API_USER_ID = "b55d31245eed38be8b289fce8a41b7c82d0bd17229f0d3e14d89cddfead62dd8"
//   const API_SECRET = "3fb446ebf099196055056feaa74af8f4cd9c26068c1bb97ef917d9210d59cf8c"

const handler = async () => {
  
  const API_USER_ID = process.env.API_USER_ID
  const API_SECRET = process.env.API_SECRET
  const headers = { Authorization: `Basic ${Buffer.from(`${API_USER_ID}:${API_SECRET}`, "utf-8").toString("base64")}` };
  const url = "https://api.planningcenteronline.com/calendar/v2/event_instances?per_page=4&order=starts_at&where[tag_ids]=214556&include=event&filter=future,approved";

  try {
    const response = await fetch(url, { headers: headers })

    var data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    console.log(error)
    return {
    }
  }
}

module.exports = { handler }
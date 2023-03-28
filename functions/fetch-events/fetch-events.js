const handler = async () => {
  
  const API_USER_ID = process.env.API_USER_ID
  const API_SECRET = process.env.API_SECRET
  var headers = new Headers({
    'Authorization': `Basic ${btoa(API_USER_ID + ':' + API_SECRET)}`})
  const url = "https://api.planningcenteronline.com/calendar/v2/event_instances?per_page=4&order=starts_at&where[tag_ids]=214556&include=event&filter=future,approved";

  try {
    const response = await fetch(url, { headers: headers })

    var data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
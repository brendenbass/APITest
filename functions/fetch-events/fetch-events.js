// const handler = async (event) => {
//   const API_USER_ID = "b55d31245eed38be8b289fce8a41b7c82d0bd17229f0d3e14d89cddfead62dd8"
//   const API_SECRET = "3fb446ebf099196055056feaa74af8f4cd9c26068c1bb97ef917d9210d59cf8c"

const handler = async () => {
  const axios = require('axios');
  
  const username = process.env.API_USER_ID
  const password = process.env.API_SECRET

  const url = 'https://api.planningcenteronline.com/calendar/v2/event_instances?where[event_name]=Ocala.Youth&include=event&filter=future,approved&order=starts_at&per_page=5'

  try {
    const { data } = axios.get(url, { auth: { username, password } })

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }

}

module.exports = { handler }
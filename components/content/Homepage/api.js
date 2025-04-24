import axios from 'axios'

const endpoint = 'https://tmy08329lf.execute-api.eu-central-1.amazonaws.com/Prod/myFirstResource'

export const sendEmailRequest = async ({ waitSeconds, message, email }) => {
  const res = await axios.post(endpoint, JSON.stringify({ waitSeconds, message, email }), {})
  return res.data
}

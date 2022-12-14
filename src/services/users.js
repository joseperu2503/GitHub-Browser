import { urlFetch } from "../constants";
import axios from 'axios'

export const getGithubUser = async (user) => {
  const response = await axios.get(`${urlFetch}/${user}`)
  console.log(response)
  return response
}

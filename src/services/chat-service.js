// import { CHAT_CONSTANTS } from "../config/apiUrls";
// import axios from "../config/axios";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || '/api';  
export async function getPromptResponse({ query, onSuccess, onError }) {
  try {
    // const response = await axios.get(
    //   CHAT_CONSTANTS.GET_PROMPT_RESPONSE + "?" + query
    // );
    // const response = await axios.get(
    //   "http://127.0.0.1:8000/api/prompts" + "?" + query
    // );
    const response = await axios.get(`${apiUrl}/prompts?${query}`);
    console.log("API response:", response);
    onSuccess(response?.data?.response);
  } catch (error) {
    console.log("Error occured in getPromptResponse: ", error);
    onError(error);
  }
}

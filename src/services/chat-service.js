import { CHAT_CONSTANTS } from "../config/apiUrls";
import axios from "../config/axios";

export async function getPromptResponse({ query, onSuccess, onError }) {
  try {
    const response = await axios.get(
      CHAT_CONSTANTS.GET_PROMPT_RESPONSE + "?" + query
    );
    console.log("API response:", response);
    onSuccess(response?.data?.response);
  } catch (error) {
    console.log("Error occured in getPromptResponse: ", error);
    onError(error);
  }
}

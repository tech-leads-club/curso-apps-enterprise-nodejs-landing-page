import axios from "axios"
import { IInputs } from "../components/forms-sign-in"

export async function sendRequest_form(url: string, body: IInputs) {
    try {
      await axios.post(url, body)
    } catch (error) {
      console.log(error)
    }
  }

  
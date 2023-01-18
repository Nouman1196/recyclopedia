import { baseURL } from "./instance"
import axios from "axios";
import { get_data } from "../AsyncStorage/AsyncStorage";
import { ApiStatus } from "./ApiValidation";
const post_request = async ({ target, body, navigation }) => {
    try {
        let token = await get_data("token");
        const instance = axios.create({
            baseURL: baseURL,
            // timeout: 2000,
            headers: { Authorization: "Bearer " + token },
        });
        const response = await instance.post(target, body)
            .catch((e) => {
                ApiStatus(e, navigation)
                return 'Error'
            }
            )
        return response
    } catch (e) {
        ApiStatus(e, navigation)
        return 'Error'
    }
}



const get_request = async ({ target, params, navigation }) => {
    try {
        let token = await get_data("token");
        const instance = axios.create({
            baseURL: baseURL,
            // timeout: 2000,
            headers: { Authorization: "Bearer " + token },
        });
        const response = await instance.get(target, { params })
            .catch((e) => {
                ApiStatus(e, navigation)
                return 'Error'
            }
            )
        return response
    } catch (error) {
        ApiStatus(error, navigation)
        return "Error"
    }
}

export { post_request, get_request }

import axios from "./axiosInstance";

export const PostRequest = async (data, url) => {
    let responseData = await axios.post(url, data)
    return responseData
}

export const GetRequest = async (Params, url) => {
    let responseData = await axios.get(url, {params: Params})
    return responseData
}
import axios from "axios";
import {BASE_PATH, TIME_OUT} from "./Variable";

const instance = axios.create({
    baseURL: BASE_PATH,
    timeout: TIME_OUT
});

export default instance
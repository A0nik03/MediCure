
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.NODE === "development" ? "http://localhost:5001/api/" : "",
});

export default instance;
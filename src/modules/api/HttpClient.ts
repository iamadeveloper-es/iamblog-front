import axios from "axios";

export class HttpClient{
    private API_URL: string = import.meta.env.VITE_API_URL;

    async get(url: string, options?: object){
        const {data, status} = await axios.get(`${this.API_URL}${url}`, options)
        return {data, status}
    }

    handleError(error){
        
    }
}
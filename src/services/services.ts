import axios from "axios";
import Datas from "../types";

const API_URL: string = "http://localhost:3000";

const getHotels = async (): Promise<Datas[]> => {
    try {
        const hotels = await axios.get(`${API_URL}/hotels`);
        return hotels.data;
    }
    catch (err: any) {
        return err.message;
    }
}

const getShows = async (): Promise<Datas[]> => {
    try {
        const shows = await axios.get(`${API_URL}/shows`);
        return shows.data;
    }
    catch (err: any) {
        return err.message;
    }
}

export default {
    getHotels,
    getShows,
}
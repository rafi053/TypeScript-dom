import Scooter from "./scooter.js";
import { Status } from "./status.js";

class DataApi {
    static url: string = "https://66e9433f87e417609448b1e3.mockapi.io/api/v1/Storeroom";
    constructor() {
    }
    static getAllScooters = async (): Promise<Scooter[] | void> => {
        try {
            const res = await fetch(this.url);
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            const scootersArray: Scooter[] = await res.json()
            return scootersArray
        } catch (error) {
            console.log(error);
        }
    }
    static getScooter = async (id: string): Promise<Scooter | void> => {
        try {
            const res = await fetch(`${this.url}/${id}`);
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            const scootersArray: Scooter = await res.json()
            return scootersArray
        } catch (error) {
            console.log(error);
        }
    }
    static async addScooter(scooter: Scooter): Promise<Scooter | void> {
        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(scooter)
            });
            const newScooter: Scooter = await res.json();
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            return newScooter;
        } catch (error) {
            console.log(error);
        }
    }
    static deleteScooter = async (id: string): Promise<void> => {
        try {
            const res = await fetch(`${this.url}/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    static editScooter = async (id: string, scooter: Scooter): Promise<Scooter | void> => {
        try {
            const res = await fetch(`${this.url}/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(scooter)
            });
            const newScooter: Scooter = await res.json();
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            return newScooter;
        } catch (error) {
            console.log(error);
        }
    }
}
export default DataApi;











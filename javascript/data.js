var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
class DataApi {
    constructor() {
    }
    static addScooter(scooter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(this.url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(scooter)
                });
                const newScooter = yield res.json();
                if (!res.ok) {
                    throw new Error(`Response status: ${res.status}`);
                }
                return newScooter;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
_a = DataApi;
DataApi.url = "https://66e9433f87e417609448b1e3.mockapi.io/api/v1/Storeroom";
DataApi.getAllScooters = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(_a.url);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const scootersArray = yield res.json();
        return scootersArray;
    }
    catch (error) {
        console.log(error);
    }
});
DataApi.getScooter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${_a.url}/${id}`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const scootersArray = yield res.json();
        return scootersArray;
    }
    catch (error) {
        console.log(error);
    }
});
DataApi.deleteScooter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${_a.url}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
    }
    catch (error) {
        console.log(error);
    }
});
DataApi.editScooter = (id, scooter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${_a.url}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scooter)
        });
        const newScooter = yield res.json();
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        return newScooter;
    }
    catch (error) {
        console.log(error);
    }
});
export default DataApi;

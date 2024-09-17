"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://66e9433f87e417609448b1e3.mockapi.io/api/v1/Storeroom";
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    // const name = document.querySelector("#name");
    const response = yield fetch(url);
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = yield response.json();
        console.log(json);
    }
    catch (error) {
        console.error(error.message);
    }
});
getData();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scooter {
    constructor(serialNumber, model, batteryLevel, imageUrl, color, status) {
        this.serialNumber = this.generateId();
        this.model = model;
        this.batteryLevel = batteryLevel;
        this.imageUrl = imageUrl;
        this.color = color;
        this.status = status;
    }
    generateId() {
        const random = Math.floor(Math.random() * (9000000 - 1000000 + 1) + 1000000);
        return random.toString();
    }
}

class Scooter {
    constructor(serialNumber, model, batteryLevel, imageUrl, color, status) {
        this.serialNumber = Scooter.generateId();
        this.model = model;
        this.batteryLevel = batteryLevel;
        this.imageUrl = imageUrl;
        this.color = color;
        this.status = status;
    }
    static generateId() {
        const random = Math.floor(Math.random() * (9000000 - 1000000 + 1) + 1000000);
        return random.toString();
    }
}
export default Scooter;

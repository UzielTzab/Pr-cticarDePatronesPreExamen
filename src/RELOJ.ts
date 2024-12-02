
class Reloj {

    date: string = "";
    hour: string = "";

    GetLocalDate(): string {
        const date = new Date();
        this.date = date.toLocaleDateString();
        this.hour = date.toLocaleTimeString();
        return `${this.date} ${this.hour}`;

    }
}

export default Reloj;
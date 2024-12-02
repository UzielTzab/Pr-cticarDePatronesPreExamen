class HoraEn extends Observador {
    private ciudad: string;
    private diferenciaHoraria: number;
    private reloj: Reloj;

    constructor(ciudad: string, diferenciaHoraria: number, reloj: Reloj) {
        super();
        if (diferenciaHoraria < -12 || diferenciaHoraria > 12) {
            throw new Error("La diferencia horaria debe estar entre -12 y 12");
        }

        this.ciudad = ciudad;
        this.diferenciaHoraria = diferenciaHoraria;
        this.reloj = reloj;
        this.reloj.agregarObservador(this);
    }

    actualizar(): void {
        const fechaLocal = this.reloj.getFecha();
        const fechaAjustada = new Date(fechaLocal.getTime() + this.diferenciaHoraria * 60 * 60 * 1000);
        const hora = fechaAjustada.toTimeString().split(" ")[0]; // Obtener solo HH:mm:ss
        console.log(`${this.ciudad}, ${hora}`);
    }
}

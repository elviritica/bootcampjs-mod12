import "./style.css";

const __STANDARD = 100;
const __SUITE = 150;
const __HABTOUROP = 100;
const __PAXEXTRA = 40;
const __IVA = 21;
const __DESCUENTOTOUROP = 15;

interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservas : Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class CalcularReservas {
    reservas : Reserva[];

    constructor(reservas: Reserva[]) {
        this.reservas = reservas;
    }

    calculaSubtotal(){
        let subtotal = 0;
        this.reservas.forEach((reserva) => {
            if (reserva.tipoHabitacion === "standard") {
                subtotal += __STANDARD * reserva.noches;
            } else if (reserva.tipoHabitacion === "suite") {
                subtotal += __SUITE * reserva.noches;
            }
            if (reserva.pax > 1) {
                subtotal += __PAXEXTRA * (reserva.pax - 1) * reserva.noches;
            }
        });
        return subtotal;
    }

    calculaTotal(){
        let subtotal = this.calculaSubtotal();
        let total = subtotal + (subtotal * __IVA)/ 100;

        return total;
    }
};

const calculadora1 = new CalcularReservas(reservas);
console.log("Subtotal Reservas: ",calculadora1.calculaSubtotal());
console.log("Total Reservas: ",calculadora1.calculaTotal());

class CalcularReservasTourOperador extends CalcularReservas {
    calculaSubtotal() : number{
        let subtotal = 0;

        this.reservas.forEach((reserva) => {
            subtotal = subtotal + (reserva.pax * __HABTOUROP) * reserva.noches;

            if (reserva.pax > 1) {
                subtotal += __PAXEXTRA * (reserva.pax - 1) * reserva.noches;
            }
        });

        return subtotal;
    }

    calculaTotal(): number {
        let total = super.calculaTotal();
        let totalDescuento = total - (total * __DESCUENTOTOUROP) / 100;
    
        return totalDescuento;
        
    }
    
}

const calculadora2 = new CalcularReservasTourOperador(reservas);
console.log("Subtotal Reservas Tour Operador: ",calculadora2.calculaSubtotal());
console.log("Total Reservas Tour Operador: ",calculadora2.calculaTotal());


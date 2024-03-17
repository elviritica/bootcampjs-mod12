import "./style.css";

const __STANDARD = 100;
const __SUITE = 150;
const __HABTOUROP = 100;
const __PAXEXTRA = 40;
const __IVA = 21;
const __DESCUENTOTOUROP = 15;
const __DESAYUNO = 15;

interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class CalcularReservas {
  reservas: Reserva[];
  precios: {
    standard: number;
    suite: number;
  };

  constructor(
    reservas: Reserva[],
    precios: { standard: number; suite: number }
  ) {
    this.reservas = reservas;
    this.precios = precios;
  }

  calculaSubtotal() {
    let subtotal = 0;
    this.reservas.forEach((reserva) => {
      if (reserva.tipoHabitacion === "standard") {
        subtotal += this.precios.standard * reserva.noches;
      } else if (reserva.tipoHabitacion === "suite") {
        subtotal += this.precios.suite * reserva.noches;
      }
      if (reserva.pax > 1) {
        subtotal += __PAXEXTRA * (reserva.pax - 1) * reserva.noches;
      }
      if (reserva.desayuno) {
        subtotal += __DESAYUNO * reserva.noches * reserva.pax;
      }
    });
    return subtotal;
  }

  calculaTotal() {
    let subtotal = this.calculaSubtotal();
    let total = subtotal + (subtotal * __IVA) / 100;

    return total;
  }
}

const preciosHabitaciones = {
  standard: __STANDARD,
  suite: __SUITE,
};

const calculadora1 = new CalcularReservas(reservas, preciosHabitaciones);
console.log("Subtotal Reservas: ", calculadora1.calculaSubtotal());
console.log("Total Reservas: ", calculadora1.calculaTotal());

class CalcularReservasClienteParticular extends CalcularReservas {
  constructor(reservas: Reserva[]) {
    const precios = {
      standard: 100,
      suite: 150,
    };

    super(reservas, precios);
  }
}

class CalcularReservasTourOperador extends CalcularReservas {
  constructor(reservas: Reserva[]) {
    const precios = {
      standard: __HABTOUROP,
      suite: __HABTOUROP,
    };

    super(reservas, precios);
  }

  calculaTotal(): number {
    let total = super.calculaTotal();
    let totalDescuento = total - (total * __DESCUENTOTOUROP) / 100;

    return totalDescuento;
  }
}

const calculadora2 = new CalcularReservasTourOperador(reservas);
console.log(
  "Subtotal Reservas Tour Operador: ",
  calculadora2.calculaSubtotal()
);
console.log("Total Reservas Tour Operador: ", calculadora2.calculaTotal());

const calculadora3 = new CalcularReservasClienteParticular(reservas);
console.log(
  "Subtotal Reservas Cliente Particular: ",
  calculadora3.calculaSubtotal()
);
console.log("Total Reservas Cliente Particular: ", calculadora3.calculaTotal());

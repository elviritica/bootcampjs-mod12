# Bootcamp JS - Laboratorio Módulo 12

- Clónate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

# Laboratorio - Reservas de Hotel

Este proyecto es un sistema de reservas de hotel donde los clientes pueden especificar qué habitaciones desean reservar, así como la cantidad de personas que ocuparán cada habitación y la duración de su estancia.

## Funcionalidades

### Caso 1: Cliente Particular

- **Habitación / día (IVA No Incluido):**
  - Standard: 100 €.
  - Suite: 150 €.
- **Cargos adicionales:**
  - Por cada persona adicional, se sumarán 40 € al precio de cada noche.
  - Se aplicará un 21% de IVA al total.

### Caso 2: Tour Operador

- Todas las habitaciones tienen el mismo precio: 100 €.
- Se aplica un 15% de descuento a los servicios contratados por el tour operador.


Se ha implementado una clase base con la funcionalidad común y dos clases hijas para cubrir los casos de cliente particular y tour operador.

Se ha añadido un campo a cada reserva para indicar si el **desayuno** está incluido o no. En caso de estar incluido, se aplicará un cargo adicional de 15 € por persona y noche.

Se calculan totales y subtotales tanto para la tarifa particular como para el tour operador, teniendo en cuenta el precio de las habitaciones y los cargos adicionales.

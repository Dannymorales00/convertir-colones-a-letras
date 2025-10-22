# 🇨🇷 convertir-colones-a-letras

Convierte valores numéricos en **colones costarricenses (₡)** a texto en español.  
Ideal para sistemas de facturación, reportes, contratos o comprobantes donde se requiere mostrar montos en letras.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso en Node.js](#implementación-en-nodejs--javascript-moderno-esm)
- [API](#api---convertircolonesaletrasnum-number-string)
- [Ejemplo completo](#ejemplo-completo-en-un-proyecto-nodejs)
- [Licencia](#licencia)
- [Autor](#autor)


##  Instalación

Instálalo directamente desde **npm**:

```bash
npm install convertir-colones-a-letras
```
Una vez instalado, podrás importarlo y usarlo en tu proyecto.

## Implementación en Node.js / JavaScript moderno (ESM)
Importa la función numeroALetrasColones y úsala directamente:

```bash
import { numeroALetrasColones } from "convertir-colones-a-letras";

// Ejemplos de uso
console.log(numeroALetrasColones(1));       // "Un colón"
console.log(numeroALetrasColones(25));      // "Veinticinco colones"
console.log(numeroALetrasColones(432));     // "Cuatrocientos treinta y dos colones"
console.log(numeroALetrasColones(123456));  // "Ciento veintitrés mil cuatrocientos cincuenta y seis colones"
```

## API numeroALetrasColones(num: number): string
Convierte un número entero o decimal en letras, con formato de moneda de Costa Rica.

|Parámetro |Tipo |Descripción|
| ------------ | ------------ | ------------ |
| num  |  number   | El número que se desea convertir.   |

Retorna: Una cadena con el número expresado en letras, seguida de “colones” o “colón”.


## Ejemplo completo en un proyecto Node.js

Instalar la libreria 
```bash
npm install convertir-colones-a-letras
```


Importación y uso　
```javascript
import { numeroALetrasColones } from "convertir-colones-a-letras";

const valores = [0, 1, 25, 432, 123456, 1000000];
for (const valor of valores) {
  console.log(`${valor} → ${numeroALetrasColones(valor)}`);
}
```
Ejecuta el script:
```bash
node index.js
```

Salida esperada:
```bash
0 → Cero colones
1 → Un colón
25 → Veinticinco colones
432 → Cuatrocientos treinta y dos colones
123456 → Ciento veintitrés mil cuatrocientos cincuenta y seis colones
1000000 → Un millón colones
```
## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Puedes usarlo libremente en proyectos personales o comerciales.

## Autor
> Creado por Danny Morales 🇨🇷

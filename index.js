function unidades(num) {
  switch (num) {
    case 1: return "Un";
    case 2: return "Dos";
    case 3: return "Tres";
    case 4: return "Cuatro";
    case 5: return "Cinco";
    case 6: return "Seis";
    case 7: return "Siete";
    case 8: return "Ocho";
    case 9: return "Nueve";
    default: return "";
  }
}

function decenasY(strSin, numUnidades) {
  return numUnidades > 0 ? `${strSin} y ${unidades(numUnidades)}` : strSin;
}

function decenas(num) {
  const decena = Math.floor(num / 10);
  const unidad = num % 10;

  switch (decena) {
    case 1:
      switch (unidad) {
        case 0: return "Diez";
        case 1: return "Once";
        case 2: return "Doce";
        case 3: return "Trece";
        case 4: return "Catorce";
        case 5: return "Quince";
        default: return "Dieci" + unidades(unidad).toLowerCase();
      }
    case 2:
      return unidad === 0 ? "Veinte" : "Veinti" + unidades(unidad).toLowerCase();
    case 3: return decenasY("Treinta", unidad);
    case 4: return decenasY("Cuarenta", unidad);
    case 5: return decenasY("Cincuenta", unidad);
    case 6: return decenasY("Sesenta", unidad);
    case 7: return decenasY("Setenta", unidad);
    case 8: return decenasY("Ochenta", unidad);
    case 9: return decenasY("Noventa", unidad);
    case 0: return unidades(unidad);
    default: return "";
  }
}

function centenas(num) {
  const centenas = Math.floor(num / 100);
  const resto = num % 100;

  switch (centenas) {
    case 1: return resto > 0 ? "Ciento " + decenas(resto) : "Cien";
    case 2: return "Doscientos " + decenas(resto);
    case 3: return "Trescientos " + decenas(resto);
    case 4: return "Cuatrocientos " + decenas(resto);
    case 5: return "Quinientos " + decenas(resto);
    case 6: return "Seiscientos " + decenas(resto);
    case 7: return "Setecientos " + decenas(resto);
    case 8: return "Ochocientos " + decenas(resto);
    case 9: return "Novecientos " + decenas(resto);
    default: return decenas(resto);
  }
}

function seccion(num, divisor, singular, plural) {
  const cientos = Math.floor(num / divisor);
  let letras = "";
  if (cientos > 0) {
    letras = cientos > 1 ? `${centenas(cientos)} ${plural}` : singular;
  }
  return letras;
}

function miles(num) {
  const resto = num % 1000;
  const strMiles = seccion(num, 1000, "Mil", "Mil");
  const strCentenas = centenas(resto);
  return strMiles ? `${strMiles} ${strCentenas}`.trim() : strCentenas;
}

function millones(num) {
  const resto = num % 1000000;
  const strMillones = seccion(num, 1000000, "Un millón", "Millones");
  const strMiles = miles(resto);
  return strMillones ? `${strMillones} ${strMiles}`.trim() : strMiles;
}

export function numeroALetrasColones(num) {
  const enteros = Math.floor(num);
  const letrasEnteros =
    enteros === 0
      ? "Cero colones"
      : enteros === 1
      ? "Un colón"
      : `${millones(enteros)} colones`;
  return letrasEnteros;
}

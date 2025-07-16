
export interface Unit {
  name: string;
  symbol: string;
  toBase: number; // Multiplier to convert to base unit
}

export interface Category {
  name: string;
  icon: string;
  units: Record<string, Unit>;
}

export const conversionCategories: Record<string, Category> = {
  length: {
    name: 'Length',
    icon: '📏',
    units: {
      meter: { name: 'Meter', symbol: 'm', toBase: 1 },
      kilometer: { name: 'Kilometer', symbol: 'km', toBase: 1000 },
      centimeter: { name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      millimeter: { name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      inch: { name: 'Inch', symbol: 'in', toBase: 0.0254 },
      foot: { name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      yard: { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
      mile: { name: 'Mile', symbol: 'mi', toBase: 1609.344 },
      nauticalMile: { name: 'Nautical Mile', symbol: 'nmi', toBase: 1852 },
    },
  },
  weight: {
    name: 'Weight',
    icon: '⚖️',
    units: {
      kilogram: { name: 'Kilogram', symbol: 'kg', toBase: 1 },
      gram: { name: 'Gram', symbol: 'g', toBase: 0.001 },
      pound: { name: 'Pound', symbol: 'lb', toBase: 0.453592 },
      ounce: { name: 'Ounce', symbol: 'oz', toBase: 0.0283495 },
      ton: { name: 'Ton', symbol: 't', toBase: 1000 },
      stone: { name: 'Stone', symbol: 'st', toBase: 6.35029 },
    },
  },
  temperature: {
    name: 'Temperature',
    icon: '🌡️',
    units: {
      celsius: { name: 'Celsius', symbol: '°C', toBase: 1 },
      fahrenheit: { name: 'Fahrenheit', symbol: '°F', toBase: 1 },
      kelvin: { name: 'Kelvin', symbol: 'K', toBase: 1 },
    },
  },
  volume: {
    name: 'Volume',
    icon: '🥤',
    units: {
      liter: { name: 'Liter', symbol: 'L', toBase: 1 },
      milliliter: { name: 'Milliliter', symbol: 'mL', toBase: 0.001 },
      gallon: { name: 'Gallon (US)', symbol: 'gal', toBase: 3.78541 },
      quart: { name: 'Quart', symbol: 'qt', toBase: 0.946353 },
      pint: { name: 'Pint', symbol: 'pt', toBase: 0.473176 },
      cup: { name: 'Cup', symbol: 'cup', toBase: 0.236588 },
      fluidOunce: { name: 'Fluid Ounce', symbol: 'fl oz', toBase: 0.0295735 },
    },
  },
  area: {
    name: 'Area',
    icon: '📐',
    units: {
      squareMeter: { name: 'Square Meter', symbol: 'm²', toBase: 1 },
      squareKilometer: { name: 'Square Kilometer', symbol: 'km²', toBase: 1000000 },
      squareCentimeter: { name: 'Square Centimeter', symbol: 'cm²', toBase: 0.0001 },
      squareInch: { name: 'Square Inch', symbol: 'in²', toBase: 0.00064516 },
      squareFoot: { name: 'Square Foot', symbol: 'ft²', toBase: 0.092903 },
      acre: { name: 'Acre', symbol: 'ac', toBase: 4046.86 },
      hectare: { name: 'Hectare', symbol: 'ha', toBase: 10000 },
    },
  },
  speed: {
    name: 'Speed',
    icon: '🚗',
    units: {
      meterPerSecond: { name: 'Meter/Second', symbol: 'm/s', toBase: 1 },
      kilometerPerHour: { name: 'Kilometer/Hour', symbol: 'km/h', toBase: 0.277778 },
      milePerHour: { name: 'Mile/Hour', symbol: 'mph', toBase: 0.44704 },
      knot: { name: 'Knot', symbol: 'kn', toBase: 0.514444 },
      footPerSecond: { name: 'Foot/Second', symbol: 'ft/s', toBase: 0.3048 },
    },
  },
  time: {
    name: 'Time',
    icon: '⏰',
    units: {
      second: { name: 'Second', symbol: 's', toBase: 1 },
      minute: { name: 'Minute', symbol: 'min', toBase: 60 },
      hour: { name: 'Hour', symbol: 'h', toBase: 3600 },
      day: { name: 'Day', symbol: 'd', toBase: 86400 },
      week: { name: 'Week', symbol: 'wk', toBase: 604800 },
      month: { name: 'Month', symbol: 'mo', toBase: 2629746 },
      year: { name: 'Year', symbol: 'yr', toBase: 31556952 },
    },
  },
  energy: {
    name: 'Energy',
    icon: '⚡',
    units: {
      joule: { name: 'Joule', symbol: 'J', toBase: 1 },
      kilojoule: { name: 'Kilojoule', symbol: 'kJ', toBase: 1000 },
      calorie: { name: 'Calorie', symbol: 'cal', toBase: 4.184 },
      kilocalorie: { name: 'Kilocalorie', symbol: 'kcal', toBase: 4184 },
      wattHour: { name: 'Watt Hour', symbol: 'Wh', toBase: 3600 },
      kilowattHour: { name: 'Kilowatt Hour', symbol: 'kWh', toBase: 3600000 },
    },
  },
  pressure: {
    name: 'Pressure',
    icon: '🌪️',
    units: {
      pascal: { name: 'Pascal', symbol: 'Pa', toBase: 1 },
      kilopascal: { name: 'Kilopascal', symbol: 'kPa', toBase: 1000 },
      bar: { name: 'Bar', symbol: 'bar', toBase: 100000 },
      atmosphere: { name: 'Atmosphere', symbol: 'atm', toBase: 101325 },
      psi: { name: 'PSI', symbol: 'psi', toBase: 6894.76 },
      torr: { name: 'Torr', symbol: 'Torr', toBase: 133.322 },
    },
  },
  power: {
    name: 'Power',
    icon: '🔋',
    units: {
      watt: { name: 'Watt', symbol: 'W', toBase: 1 },
      kilowatt: { name: 'Kilowatt', symbol: 'kW', toBase: 1000 },
      horsepower: { name: 'Horsepower', symbol: 'hp', toBase: 745.7 },
      btu: { name: 'BTU/Hour', symbol: 'BTU/h', toBase: 0.293071 },
    },
  },
};

export function convertUnit(value: number, fromUnit: string, toUnit: string, category: string): number {
  const categoryData = conversionCategories[category];
  if (!categoryData) return 0;

  const fromUnitData = categoryData.units[fromUnit];
  const toUnitData = categoryData.units[toUnit];
  
  if (!fromUnitData || !toUnitData) return 0;

  // Special handling for temperature
  if (category === 'temperature') {
    return convertTemperature(value, fromUnit, toUnit);
  }

  // Convert to base unit, then to target unit
  const baseValue = value * fromUnitData.toBase;
  const result = baseValue / toUnitData.toBase;
  
  return Math.round(result * 1000000) / 1000000; // Round to 6 decimal places
}

function convertTemperature(value: number, fromUnit: string, toUnit: string): number {
  let celsius: number;

  // Convert from source to Celsius
  switch (fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      return 0;
  }

  // Convert from Celsius to target
  switch (toUnit) {
    case 'celsius':
      return Math.round(celsius * 100) / 100;
    case 'fahrenheit':
      return Math.round((celsius * 9/5 + 32) * 100) / 100;
    case 'kelvin':
      return Math.round((celsius + 273.15) * 100) / 100;
    default:
      return 0;
  }
}

export class TempConverter {
    static convertFtoC(temp) {
    return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
   }
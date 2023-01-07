const convertTemp = (temp, celsius) =>{
    if (celsius) {
      return Math.ceil(temp - 273.15) + String.fromCharCode(176) + "C";
    } else {
      return (
        Math.ceil((9 / 5) * (temp - 273) + 32) + String.fromCharCode(176) + "F"
      );
    }
  }
  export default convertTemp
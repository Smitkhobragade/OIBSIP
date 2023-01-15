const calulateTemp = () => {

  const numberTemp = document.getElementById('temp').value;
  // console.log(numberTemp);

  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  // console.log(valueTemp);

  const celius = (celc) => {
    let farhn = ((celc * 9/5) + 32);
    return farhn.toFixed(2);
  }

  const farrenheit = (fah) => {
    let celci = ((fah - 32) * 5/9);
    return celci.toFixed(2);
  }


  let result;

  if(valueTemp == 'cel'){
    result = celius(numberTemp);
    document.getElementById('resultContainer').innerHTML = `=> ${result} °F`;
  }
  else{
    result = farrenheit(numberTemp);
    document.getElementById('resultContainer').innerHTML = `=> ${result} °C`;
  }

}
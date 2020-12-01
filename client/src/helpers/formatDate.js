const addZero = numero => {
  if (numero <= 9) return '0' + numero;
  else return numero;
};

const formatsDate = dates => {
  if (NaN || undefined)
    return 'It was not possible to format the date';

  try {
    let date = new Date(dates);
    let formattedDate =
      addZero(date.getDate().toString()) +
      '/' +
      addZero(date.getMonth() + 1).toString() +
      '/' +
      date.getFullYear();

    return formattedDate;
  } catch (err) {
    console.log(err);
  }
};

export default formatsDate;

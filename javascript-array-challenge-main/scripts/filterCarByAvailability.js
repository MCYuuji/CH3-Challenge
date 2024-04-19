function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  // Tulis code-mu disini
  var i = 0;
  cars.forEach(() => {
    if (cars[i].available == true) {
      result.push(cars[i]);
    }
    i = i + 1;
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

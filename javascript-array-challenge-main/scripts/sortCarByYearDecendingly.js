function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const clone = [...cars];

  // Tulis code-mu disini
  // function DescendSort(array) {
  //   const length = array.length;
  //   for (var i = 0; i < length; i++) {
  //     for (var j = i + 1; j < length; j++) {
  //       if (array[i].year < array[j].year) {
  //         var temp = array[i];
  //         array[i] = array[j];
  //         array[j] = temp;
  //       }
  //     }
  //   }
  //   return array;
  // }
  function DescendSort(array) {
    if (array.length <= 1) {
      return array;
    }

    var pivot = array[0];
    var pivotYear = array[0].year;

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
      array[i].year > pivotYear ? left.push(array[i]) : right.push(array[i]);
    }

    array = DescendSort(left).concat(pivot, DescendSort(right));
    return array;
  }

  const result = DescendSort(clone);
  console.log(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}

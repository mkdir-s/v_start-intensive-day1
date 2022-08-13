
const arrays = [
    [0, 1, 2, 3],
    [10, 2, 5, 8],
    [12, 5, 23, 25],
    [0, -2, 4, 10],
    [-1, 0, 54, 32]
  ];
  
  for(let i=0; i<arrays.length; i++) {
    for(let j=0; j<arrays[i].length; j++) {
        if(arrays[i][0] === 0) {
            arrays[i].shift()
        }
    }
  }
  
  console.log(arrays);
  /*
  [
    [1, 2, 3],
    [10, 2, 5, 8],
    [12, 5, 23, 25],
    [-2, 4, 10],
    [-1, 0, 54, 32]
  ]
  */
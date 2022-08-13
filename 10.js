
const computers = [
    {
      name: 'MacBook Pro 13',
      price: 150000
    },
    {
      name: 'MacBook Pro 14',
      price: 200000
    },
    {
      name: 'MacBook Pro 16',
      price: 300000
    },
  ];
  
  computers.findIndex((e, idx) => {
    if (e.name === 'MacBook Pro 13') {
        return e;
    }
    computers.splice(e, 1);
  })
  
  console.log(computers);
  /*
  [ 
    {name: 'MacBook Pro 14', price: 200000},
    {name: 'MacBook Pro 16', price: 300000}
  ]
  */
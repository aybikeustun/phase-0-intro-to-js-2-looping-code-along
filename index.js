// Code your solutions in this file
function writeCards( names, e) {
    let newArray = []
    for( let i = 0; i < names.length; i++ ) {
      
        newArray.push( `Thank you, ${names[i]}, for the wonderful ${e} gift!` )
    
    
    }
    return newArray
  }

function countDown(num) {
    while (num > 0) {
      console.log(num);
      num--;
    }
    console.log(num);
  }
  


  
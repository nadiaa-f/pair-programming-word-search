
const wordSearch = (letters, word) => {
    let result = false;
  
    if (letters.length < 1 || word.length < 1) {
      result = false;
    }
  
  
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    let vertical = [];
  
    for (let row = 0; row < letters.length; row++) {
      for (let column = 0; column < letters[row].length; column++) {
        if (row === 0) {
          vertical.push([letters[row][column]]);
        } else {
          vertical[column].push(letters[row][column]);
        }
      }
  
    }
  
    const verticalJoin = vertical.map(ls => ls.join(''));
    console.log(verticalJoin);
     
      
    for (let l of verticalJoin) {
      console.log(l);
        
      if (l.includes(word)) {
        console.log("Found");
        result = true;
        break;
      }
          
    }
  
    for (let l of horizontalJoin) {
      console.log(l);
        
      if (l.includes(word)) {
        console.log("Found");
        result = true;
        break;
      }
          
    }
    return result;
  };

module.exports = wordSearch
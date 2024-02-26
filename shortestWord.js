function findShort(s){
    let words = s.split(" ")
    let x = []; let shortest = 0;
  
      for (let i = 0; i < words.length; ++i){
          x = words[i];
  
      if (shortest == 0 || x.length < shortest){
          shortest = x.length;
        }         
      }
    return shortest;
  }


console.log(findShort("Sunshine State Spectacular"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("lets talk about javascript the best language"))
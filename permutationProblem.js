let s = 'ela';                                                  // Default string given.
let level = 0;                                                  // Initializing the level of recursion to be 0.

/** 
* Funtion findPerms
*  is a funtion that calculates the permutations of each string passed
*  as a parameter.
*/
let findPerms = (s) => {                                        
  level++;                                                      // Plus one level, because we enter this level of recursion.
  
  if(!s || typeof s !=="string"){                               // If string is empty or a number
    return "empty string or a number";                          // then, return an error string.
  } else if (s.length < 2){                                     // Else if the string passed is less than 2.
    return s;                                                   // then, return the string. This is also the stop flag of the recursion.
  }  

  let permsArray = [];                                         // Initiazing a array to store each permutation in.
  for (let i = 0; i < s.length; i++){                          // Looping to access each letter individually.
    let char = s[i];                                           // Assigning for each loop a character in variable.
    console.log("Left Out: " + char + " at level " + level); 
    
    if (s.indexOf(char) != i)                                  // If the current character is in the string then ignore.
      continue;
    
    let subProblems = s.slice(0, i) + s.slice(i + 1, s.length); // Creating the substring of which the char is left out thus a         
    console.log("subProblems: " + subProblems);                 // subproblem is created.
    
    for(let merge of findPerms(subProblems)) {                  // For every recursion save to merge variable each return from the function. 
      permsArray.push(char + merge);                            // Store to permsArray variable the left out character (first character)
    }                                                           // and the merge variable which contains all computed sub problems.
    
    level--;                                                    // Minus one level, because we exit this level of recursion.
  }
  
  return permsArray;                                            // When the loop ends, return the result array.
}


console.log(findPerms(s));                                      // Runs the funtion and prints the results.

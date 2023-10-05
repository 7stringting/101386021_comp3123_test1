//Made by Ali Al Aoraebi
//Student Number: 101386021

//Question 1 

function lowerCaseWords(){
    function lowerCaseWords(mixedArray) {
        return new Promise((resolve, reject) => {
          if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
          }
      
          const filteredAndLowercased = mixedArray
            .filter((item) => typeof item === "string")
            .map((word) => word.toLowerCase());
      
          if (filteredAndLowercased.length === 0) {
            reject("No valid strings found in the input array");
          } else {
            resolve(filteredAndLowercased);
          }
        });
      }
      
      // Example 
      const mixedArray = [1, "Hello", "WORLD", true, "JavaScript"];
      lowerCaseWords(mixedArray)
        .then((result) => {
          console.log("Filtered and Lowercased Words:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
}

lowerCaseWords()
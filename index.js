function hasTargetSum(array, target) {
  // Write your algorithm here
  let filteredArray=[];
  let decidingArray=[];
  for(x=0; x<array.length; x++){
        if(array[x]<target){
          filteredArray.push(array[x]);
        }    
  }

  for(x=0; x<array.length; x++){
    let workingRemainder;
    let negativeCheck = Math.sign(array[x]);
    if (negativeCheck===-1){
      console.log("negative integer processed");
      filteredArray.push(array[x]);
      let negativeOffSetNumber = -array[x]+target;
          array.find(element =>{
            if (element===negativeOffSetNumber){
              decidingArray.push(element, array[x]);
              }
          })
    
    }

      if (negativeCheck===1)
      {console.log('positive integer processed');
      workingRemainder = target-filteredArray[x];
        filteredArray.find(element=> {if (element===workingRemainder){
                      decidingArray.push(element)
                      
              }
          }
        )
      }
  }
  console.log("filtered Array " + filteredArray);
  console.log("deciding array  "+ decidingArray + "  target " + target)
  
  if (decidingArray.length>=2){
    return true
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  For each number less than the target see if the remainder is in the array  
  As a point of efficiecy we can rule out 
  any number larger that the target
  and any number that is one less than the target if there is no number 1
*/

/*
  Add written explanation of your solution here
  first make a filtered array of all numbers less than the target number 
  as they are all candidates becasue they could be added to to make the target.
  then if an integer is positive see if there is another positive integer that equals the 
  remainder of the target minus that first integer. if there is add them to the deciding array.

  for negative integers make that number positive (negating it) then add the 
  target to it and see if there is number in the array that equals that. if so add them both to the deciding 
  array as they will create the target. 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log('Expecting True')
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
 console.log("=>", hasTargetSum([2,7,8,4,22,-5],17));
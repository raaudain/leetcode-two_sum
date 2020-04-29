nums = [2, 11, 7, 15]

var twoSum = function(nums, target) {
    
    // Check each number in  array
    for(let i = 0; i < nums.length; i++){
        
        // Check each other number in the array
        for(let j = i+1; j < nums.length; j++){
            
            // Add numbers to see if they equal target
            if(nums[i] + nums[j] === target){
                
                // Return indexes of numbers if equal target
                return [i, j];
            }
        }
    }
};

twoSum(nums, 9)

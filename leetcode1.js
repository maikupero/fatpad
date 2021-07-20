var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            var check = (nums[i] + nums[j] == target);
            if (check == true) {
             return [i, j];
            }
        }
    }
}; 
//Eric's version best version
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length - 1; i++) {
        var difference = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            var check = (nums[j] == difference);
            if (check == true) {
                return [i, j];
            }
        }
    }
}; 
//net solution
var twoSum = function(nums, target) {
    const hash = {};
    for(let i = 0; i < nums.length; i++){
      const difference = target - nums[i];
      if(difference in hash){
        return [i, hash[difference]];
      }else{
        hash[nums[i]] = i;
      }
    }
    return [];
  };
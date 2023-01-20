/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target){
    let len = nums.length
    let halfLen = Math.ceil(len/2)
    if(target >=nums[halfLen - 1]){
        for(let i= halfLen-1; i<=nums.length;i++){
            if(target<= nums[i]){
                return i
            }
            if(target>nums[len-1]){
                return len
            }
        }
    } 
    else{
        for (let i=0; i<=halfLen;i++){
            if (target<=nums[i]){
                return i
            }
            if(target < nums[0]){
                return 0
            }
        }
    }
};  // simple logarithmic time searching algorith for insert a target with in a array of integer- finding the right inde where shalll it go

a = searchInsert([4, 5, 7, 9],8) // 3
console.log(a)
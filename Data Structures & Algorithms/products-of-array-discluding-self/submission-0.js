class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array();
        let total = 0;
        let numString = nums.join("*");
        
        for(const i in nums){
            output.push(eval(nums.toSpliced(i,1).join("*")))
        }
        return output;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array().fill(0);
        let pref = new Array(nums.length);
        let suffix = new Array(nums.length);
        let total = 0;
        if(nums.length<=1) return [];       
        pref[0] = 1; //1,0,0,0 [1,1,2,8]
        let last = nums.length-1;
        suffix[last] = 1; //0,0,0,6 [48,24,6,1]
        for(let i=0;i<nums.length;i++){
            pref[i+1] = pref[i]*nums[i] //1,2,8,0
            suffix[last-(i+1)] = suffix[last-i]*nums[last-i]//0,0,24,6
        }
        
        for(let i=0;i<nums.length;i++){
            output[i]= pref[i] * suffix[i];
        }
        return output;
    }
}

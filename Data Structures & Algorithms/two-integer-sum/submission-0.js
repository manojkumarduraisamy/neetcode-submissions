class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(let i=0;i<nums.length;i++){
            let ramaining = target - nums[i];
            if(hashMap[ramaining] !=undefined) return [hashMap[ramaining],i];
            hashMap[nums[i]] = i;
        }
        return [];
    }
}

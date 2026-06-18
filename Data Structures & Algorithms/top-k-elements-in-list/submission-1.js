class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numbers = new Map();
        let mF = new Array();
        for (let num of nums){
            numbers.set(num,(numbers.get(num)||0)+1);
        }
        for (const [key, freq] of numbers){
            mF.push([freq,key])
        }
        console.log(mF)
        mF = mF.sort((a,b)=>b[0]-a[0]);
        return mF.slice(0,k).map((a)=>a[1])
    }
}

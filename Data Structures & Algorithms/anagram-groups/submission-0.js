class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMaps = {};
        for(const str of strs){
            let sortedString = str.split('').sort().join('');
            if(hashMaps[sortedString]==undefined){
                hashMaps[sortedString] = []
            }
            hashMaps[sortedString].push(str)
        }
        return Object.values(hashMaps);
        
    }
}

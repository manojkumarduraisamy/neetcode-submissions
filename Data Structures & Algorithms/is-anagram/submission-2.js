class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hasMapS = {};
        let hasMapT = {}
        if(s.length!=t.length) return false;
        for(let i=0;i<s.length;i++){
            hasMapS[""+s[i]] = hasMapS[""+s[i]]!=undefined?++hasMapS[""+s[i]]:1;
            hasMapT[""+t[i]] = hasMapT[""+t[i]]!=undefined?++hasMapT[""+t[i]]:1;
        }
        console.log(hasMapS, hasMapT)
        for(let i in hasMapS){
            if(hasMapT[i]!=hasMapS[i]) return false;
        }
        return true;
    }
}

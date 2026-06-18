class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str)=>btoa("{"+str+"}")).join("|")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length===0) return [];
        return str.split("|").map((s)=> atob(s).substring(1,atob(s).length-1))
    }
}

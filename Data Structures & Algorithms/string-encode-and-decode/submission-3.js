class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str)=>`${str.length}#${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let strs = [];
        let i=0
        while(str.length>0){
            let countString = "";
            let index = str.indexOf("#");
            let count = parseInt(str.substring(0,index));
            strs.push(str.substring(index+1,index+1+count));
            str = str.slice(index+1+count)
        }
        return strs;
    }
}

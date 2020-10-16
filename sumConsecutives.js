/*You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.
Same meaning: 1 == 1
1 != -1 */
function sumConsecutives(s) {
    // your code                
    let respose = [];             
    let aux = 0;
    s.map((n, i) => {
        if (s[i + 1] === n) { aux = aux + n; }
        else {
            if (s[i - 1] === n) { aux = aux + n; }
            if (aux != 0) {
                respose.push(aux);
                aux = 0
            }
            else { respose.push(n); }                
        }
        
    })
    return respose;
}

sumConsecutives();
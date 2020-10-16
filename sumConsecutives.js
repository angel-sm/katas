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
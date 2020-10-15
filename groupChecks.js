/*In English and programming, groups can be made using symbols such as () and {} that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.
Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:
*/

function groupCheck(s = '[(])'){
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    const solves = {
        "()": true,
        "{}": true,
        "[]": true,
    };
    const stack = [];
    const newS = s.split('');
    let option;
    let result = true;
    newS.map(simbol => {
        if(open.includes(simbol)){
            stack.push(simbol);
        }
        if(close.includes(simbol)){
            option = `${stack.pop()}${simbol}`;
            if(!solves[`${option}`]){
                result = false;
                return result;
            }
        }
    });
    if(stack.length > 0){
        return false;
    }
    return result;
}

console.log(groupCheck());

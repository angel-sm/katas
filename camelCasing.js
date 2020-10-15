/*Complete the solution so that the function will break up camel casing, using a space between words.*/

function solution(string) {
    const final = string.split('');
    final.map((letter, i) => {
        letter === letter.toUpperCase() ? final[i] = ` ${letter}` : null
    });
    return final.join('');
}

console.log(solution('camelCasing'));


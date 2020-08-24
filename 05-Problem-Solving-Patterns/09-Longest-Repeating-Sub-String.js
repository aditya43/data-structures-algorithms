function occurances (str) {
    let curMaxOccur = 0;
    let curLongStr = '';
    const checked = {};

    for (let i = 0; i <= str.length - 1; i++) {
        let sub = str[i];
        for (let j = i + 1; j <= str.length - 1; j++) {
            sub += str[j];

            if (!checked[sub]) {
                checked[sub] = true;
                const regex = new RegExp(sub, 'g');
                const matches = (str.match(regex) || []).length;

                if (sub.length > curLongStr.length && matches > curMaxOccur) {
                    curMaxOccur = matches;
                    curLongStr = sub;
                }
            }
        }
    }

    return {
        Str: curLongStr,
        Occurances: curMaxOccur
    };
}

console.log(occurances('aaaadityaadityaadityanisadityanishiadityanishi'));

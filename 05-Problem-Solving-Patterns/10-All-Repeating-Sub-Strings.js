function occurances (str) {
    const long = {
        str: '',
        occurances: 0,
        strs: []
    };

    const checked = {};

    for (let i = 0; i <= str.length - 1; i++) {
        let sub = str[i];
        for (let j = i + 1; j <= str.length - 1; j++) {
            sub += str[j];

            if (!checked[sub]) {
                checked[sub] = true;
                const regex = new RegExp(sub, 'g');
                const matches = (str.match(regex) || []).length;

                if (matches >= long.occurances) {
                    long.str = sub;
                    long.occurances = matches;
                    long.strs.push({
                        str: sub,
                        occurances: matches
                    });
                } else if (matches === 0) {
                    i = j;
                    break;
                }
            }
        }
    }

    long.strs.sort((a, b) => a.str.length - b.str.length);

    return long;
}

console.log(occurances('aaaadityaadityaadityanisadityanishiadityanishi'));

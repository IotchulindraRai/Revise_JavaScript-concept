function merge(a, m, b, n, r) {
    let i = 0, j = 0, k = 0;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            r[k] = a[i];
            k++;
            i++;
        } else {
            r[k] = b[j];
            k++;
            j++;
        }
    }

    while (i < m) {
        r[k] = a[i];
        k++;
        i++;
    }

    while (j < n) {
        r[k] = b[j];
        k++;
        j++;
    }
}

const a1 = [1, 3, 5, 7, 9];
const a2 = [2, 4, 5, 6, 8];
const r = new Array(10);

merge(a1, 5, a2, 5, r);

for (let i = 0; i < 10; i++) {
    console.log(`r[${i}] = ${r[i]}`);
}

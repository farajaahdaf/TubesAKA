
function findOddEvenIterative(arr) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return { even, odd };
}

// Fungsi Rekursif
function findOddEvenRecursive(arr, index = 0, even = [], odd = []) {
    if (index === arr.length) {
        return { even, odd };
    }
    if (arr[index] % 2 === 0) {
        even.push(arr[index]);
    } else {
        odd.push(arr[index]);
    }
    return findOddEvenRecursive(arr, index + 1, even, odd);
}

// Fungsi untuk memproses input (Iteratif)
function processIterative() {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);

    const result = findOddEvenIterative(arr);

    displayResults(result, "Iteratif");
}

// Fungsi untuk memproses input (Rekursif)
function processRecursive() {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);

    const result = findOddEvenRecursive(arr);

    displayResults(result, "Rekursif");
}

// Fungsi Menampilkan Hasil
function displayResults(result, method) {
    document.getElementById("evenResults").innerText = `Bilangan Genap (${method}): ${result.even.join(", ")}`;
    document.getElementById("oddResults").innerText = `Bilangan Ganjil (${method}): ${result.odd.join(", ")}`;
}

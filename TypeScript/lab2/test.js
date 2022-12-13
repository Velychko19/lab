let text = [];

function makeId(amount, lenght, sample) { 
    const start = new Date().getTime();
    let result = [];
    for (let j = 0; j < amount; j++) {
        let res = "";
        do {
            for (let i = 0; i < lenght; i++) {
                res += sample.charAt(Math.random() * sample.length);
            }
        } while (!result.indexOf(res) === -1)
        result[j] = res;
    }
    alert('Операція зайняла: ' + (new Date().getTime() - start) + 'ms');
    return result;
}

document.getElementById('generate').onclick = function () {
    text = makeId(document.getElementById("amount").value,
        document.getElementById("length").value,
        document.getElementById("sample").value);
}
document.getElementById('toRead').onclick = function () {
    if (text.length != 0) {
        document.getElementById("result").innerHTML = ""
        for (const element of text) {
            document.getElementById("result").innerHTML += element + " <br/>";
        }
    } else { alert("Ви не згенерували індентифікатори") }
}
document.getElementById('toDownload').onclick = function () {
    if (text.length != 0) {
        const start = new Date().getTime();
        let text1 = "";
        for (const element of text) {
            text1 += element + "\n";
        }
        let myData = 'data:application/txt;charset=utf-8,' + text1;
        this.href = myData;
        this.download = 'data.txt';
        alert('Операція зайняла: ' + (new Date().getTime() - start) + 'ms');
    } else { alert("Ви не згенерували індентифікатори"); }
}



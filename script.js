// コンテナーを取得
const container = document.querySelector(".container");
// 四角いdivを１６×１６個作る
for (let i = 0; i < 16; i++) {
    //　その列のdivを収納するdivを作る
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = `row${i}`;
    container.appendChild(row);
    // divを列に挿入
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
}



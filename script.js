// コンテナーを取得
const container = document.querySelector(".container");

// グリッドの数を聞く
const button = document.querySelector("button");
button.addEventListener("click", initializeGrid);

// グリッドを初期化
function initializeGrid() {
    let grid; // グリッド変数
    do {
        grid = prompt("how many grid do you want under 100");
    } while (grid > 100)
    // キャンセルならば初期化はしない
    if (grid === null) {
        return;
    }
    makeGrid(grid);// グリッドの生成
    coloring(); // マスの上にマウスが来たら色づけ
}


// 四角いグリッドを作る関数
function makeGrid(grid) {

    // 既存のグリッドがあれば削除
    if (container.hasChildNodes) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    // グリッドを生成
    for (let i = 0; i < grid; i++) {
        //　マスを収納する列(row)を作る
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = `row${i}`;
        container.appendChild(row);
        // マスを列に挿入
        for (let j = 0; j < grid; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

// マウスがマスの上に来たとき色をつける関数
function coloring () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => square.classList.add("hover")));
}
//　ランダムなRGBの数字の入った配列を返す
// function pickRandomColor () {
//     const RGB = [];
//     for (let i = 0; i < 3; i++) {
//         RGB.push(Math.floor(Math.random()*255) + 1);
//     }
//     return RGB;
// }



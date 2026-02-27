let score = 0;
let answers = 0;

function answer(value) {
    score += value;
    answers++;
}

function showResult() {

    if (answers < 5) {
        alert("すべて回答してください");
        return;
    }

    let resultText = "";

    if (score >= 4) {
        resultText = "【構造覚醒型】";
    } else if (score >= 2) {
        resultText = "【転換期型】";
    } else {
        resultText = "【努力依存型】";
    }

    document.getElementById("result").innerHTML = `

<h2>徳田OS診断結果</h2>

<h3>${resultText}</h3>

<p>
能力ではなく構造で世界を見る思考タイプ。
</p>

<hr>

<p>
私は徳田OS診断で<br>
<strong>${resultText}</strong>でした。
</p>

<hr>

<p>
あなたは少数派タイプです。
</p>

<p>
同じ思考の人だけAI時代研究を公開しています。
</p>

<a href="https://x.com/bJ1JL7JM6x77440" target="_blank">
▶ Xを見る
</a>

<hr>

<button onclick="shareX('${resultText}')">
🔥 Xで結果をシェア
</button>

<p>#徳田OS</p>

<p>※診断結果はAI時代の思考分類モデルです</p>
`;
}

/* Xシェア */
function shareX(result) {

    const text = `徳田OS診断をやってみた。

結果は ${result} でした。

あなたの思考OSは？

https://hohkeky2588-droid.github.io/tokuda-os/

#徳田OS`;

    const url =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");
}

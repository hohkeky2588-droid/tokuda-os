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
    }
    else if (score >= 2) {
        resultText = "【転換期型】";
    }
    else {
        resultText = "【努力依存型】";
    }

    document.body.innerHTML = `
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
同じ思考の人だけAI時代の研究を公開しています。
</p>

<p>
<a href="https://x.com/bJ1JL7JM6x77440" target="_blank">
▶ Xはこちら
</a>
</p>

<hr>

<p>#徳田OS</p>

<p>※診断結果はAI時代の思考分類モデルです</p>

<br>

<button onclick="shareX('${resultText}')">
Xで結果をシェア
</button>

<hr>

<p>
この診断はまだ公開初期です。
</p>

<p>
今ここに来ている人は
<strong>初期発見者</strong>です。
</p>

<p>
同じ思考タイプの研究を
リアルタイム公開しています。
</p>

<p>
<a href="https://x.com/bJ1JL7JM6x77440" target="_blank">
▶ 続きはXで公開中
</a>
</p>
`;

    /* 🔥診断完了と同時に自動拡散 */
    setTimeout(() => {
        shareX(resultText);
    }, 800);
}


/* ===== X投稿 ===== */

function shareX(result) {

    const text = `徳田OS診断をやってみた。

結果：
${result}

あなたの思考OSは？

https://hohkeky2588-droid.github.io/tokuda-os/

#徳田OS`;

    const url =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");
}

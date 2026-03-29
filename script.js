// 【占卜結果資料庫】
// 集中管理所有的運勢結果，可在此輕鬆修改內容或擴增種類
const fortuneData = [
    {
        title: "大吉 ✨",
        description: "星辰指引著你，今天將是充滿奇蹟與驚喜的一天！",
        work: "靈感湧現，所有的提案與任務都能無懈可擊地完成。",
        study: "思緒如泉湧，困難的題目稍微思考就能得出解答。",
        love: "魅力難以抵擋！預期外的一場浪漫對話即將發生。",
        money: "財運大開，可能會有意料之外的進帳或他人請客。",
        quote: "「放手去飛吧，整個宇宙都在為你撐腰！」"
    },
    {
        title: "中吉 🌟",
        description: "平穩的大步向前，踏實的腳步會帶你走向美好的結果。",
        work: "團隊默契佳，與同事合作無間，遇到的阻礙都能迎刃而解。",
        study: "進度穩定超前，複習的效果出乎意料的好。",
        love: "感情升溫，一個微小的貼心舉動就能感動對方。",
        money: "適合採取保守理財，也許會收到實用的小禮物。",
        quote: "「好運總是藏在每一個用心的細節裡。」"
    },
    {
        title: "小吉 🍀",
        description: "微風拂面，是個平淡卻充滿生活小確幸的日子。",
        work: "例行公事順利推進，能準時下班享受屬於自己的時間。",
        study: "找到適合自己的節奏，沒有壓力地享受獲取新知的過程。",
        love: "平淡是福，和伴侶的日常互動帶來滿滿安心感。",
        money: "或許會在舊外套的口袋裡發現被遺忘的鈔票！",
        quote: "「請好好享受今天微弱但溫暖的陽光吧。」"
    },
    {
        title: "吉 🕊️",
        description: "好壞參半，但你的好心態能將一切化為順境。",
        work: "稍微有些忙碌，正是展現你時間管理能力的好時機。",
        study: "遇到瓶頸時，換個環境或喝杯好茶就能豁然開朗。",
        love: "需要多點傾聽，主動關心能化解潛在的微小誤會。",
        money: "有想買的東西，但多等兩天可能會有不錯的折扣喔！",
        quote: "「微笑，是你今天最好的魔法防禦。」"
    },
    {
        title: "末吉 🍂",
        description: "需要一點點耐心，你的專屬好運正在來的路上塞車了。",
        work: "別急於表現，默默耕耘、做好分內事才是今天的生存法則。",
        study: "進度可能有些落後，不如重新規劃行事曆再出發。",
        love: "保持一點距離的美感，給彼此適度的個人空間。",
        money: "守財為主，今天絕對不適合做任何衝動的財務決定。",
        quote: "「所有的等待，都是為了迎接更好的綻放。」"
    },
    {
        title: "凶 🌧️",
        description: "天空烏雲密布，今天是個適合低調行事的日子。",
        work: "容易粗心犯錯，發送郵件或檔案前請務必再三檢查。",
        study: "心浮氣躁，看不下書的話就去運動流點汗轉換心情吧。",
        love: "容易有口角爭執，深呼吸，別在情緒高漲當下說重話。",
        money: "可能會有一筆意料之外的必要支出，荷包稍微失血。",
        quote: "「雨天總會過去，記得在心中為自己撐把傘。」"
    },
    {
        title: "大凶 🌩️",
        description: "命運的考驗降臨！請保持最高警戒，小心行事。",
        work: "諸事不順，甚至可能背黑鍋，請務必留存所有溝通紀錄與信件。",
        study: "完全無法集中精神，出門前請再三確認是否帶齊所需文具。",
        love: "感情面臨考驗，切忌冷戰猜忌，請勇敢面對問題核心溝通。",
        money: "破財危機，絕對不要借錢給別人，也別聽信他人的投資建議。",
        quote: "「跌落谷底後，無論往哪走都是向上前進！」"
    },
    {
        title: "財星高照 💰",
        description: "財神爺今天特別眷顧你，周遭環境金光閃閃！",
        work: "業績開紅盤，或是過去的努力終於被看見並給予實質回饋。",
        study: "如果有申請獎學金或參加競賽，今天會有非常好的消息傳來。",
        love: "為愛人花點錢準備個質感小驚喜，會得到大大的感動。",
        money: "偏財運極佳！買張彩券或是參加抽獎或許是個不錯的選擇。",
        quote: "「財運亨通的一天，請好好把握每個機會！」"
    },
    {
        title: "桃花朵朵 🌸",
        description: "愛神邱比特的箭已經上膛，人氣爆棚的時刻！",
        work: "人緣極佳，會遇到願意拔刀相助的貴人同事或好客戶。",
        study: "和同學一起組隊學習，不但效率翻倍還能建立深厚友誼。",
        love: "單身者有望遇見天菜，有伴的會度過甜蜜如初戀的一天。",
        money: "出門在外或許會有人請你喝飲料或吃頓好料的。",
        quote: "「盡情散發你的魅力，世界會對你溫柔以待。」"
    },
    {
        title: "靈光乍現 💡",
        description: "今天是屬於智慧與創意的日子，大腦超級活躍！",
        work: "卡關已久的企劃案，突然有了突破性的瘋狂好點子。",
        study: "猶如打通任督二脈，原本困難的公式突然變得簡單易懂。",
        love: "能夠想出新奇的約會或相處點子，讓對方驚喜連連。",
        money: "靠著你的聰明才智，找到了一個意想不到的開源節流好方法。",
        quote: "「你的腦袋裡，裝著足以改變世界的魔法。」"
    }
];

// 【獲取 DOM 元素】
const startSection = document.getElementById('start-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');

// 結果卡片欄位元素
const titleEl = document.getElementById('fortune-title');
const descEl = document.getElementById('fortune-desc');
const workEl = document.getElementById('fortune-work');
const studyEl = document.getElementById('fortune-study');
const loveEl = document.getElementById('fortune-love');
const moneyEl = document.getElementById('fortune-money');
const quoteEl = document.getElementById('fortune-quote');

// 【占卜流程控制函數】

// 1. 點擊開始占卜
function startDraw() {
    // 隱藏初始介面，顯示「載入中」的過場動畫
    startSection.classList.remove('active');
    setTimeout(() => startSection.classList.add('hidden'), 500); // 等待淡出動畫
    
    loadingSection.classList.remove('hidden');
    // 強制重繪以觸發 CSS 動畫
    void loadingSection.offsetWidth; 
    loadingSection.classList.add('active');

    // 模擬命理運算的等待時間 (約 1.8 秒)
    setTimeout(() => {
        showResult();
    }, 1800);
}

// 2. 顯示占卜結果
function showResult() {
    // 隨機抽取一個結果
    const randomIndex = Math.floor(Math.random() * fortuneData.length);
    const result = fortuneData[randomIndex];

    // 將資料填入 DOM 元素中
    titleEl.textContent = result.title;
    descEl.textContent = result.description;
    workEl.textContent = result.work;
    studyEl.textContent = result.study;
    loveEl.textContent = result.love;
    moneyEl.textContent = result.money;
    quoteEl.textContent = result.quote;

    // 隱藏載入中介面，顯示結果介面
    loadingSection.classList.remove('active');
    setTimeout(() => {
        loadingSection.classList.add('hidden');
        
        resultSection.classList.remove('hidden');
        void resultSection.offsetWidth;
        resultSection.classList.add('active');
    }, 300);
}

// 3. 重新占卜
function resetDraw() {
    // 隱藏結果介面，回到初始介面
    resultSection.classList.remove('active');
    setTimeout(() => {
        resultSection.classList.add('hidden');
        
        startSection.classList.remove('hidden');
        void startSection.offsetWidth;
        startSection.classList.add('active');
    }, 300);
}

// 【綁定按鈕事件】
drawBtn.addEventListener('click', startDraw);
retryBtn.addEventListener('click', resetDraw);

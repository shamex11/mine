let arBombs = [];
      const btn = document.querySelector(".btn");
      const bet = document.querySelector(".bet");
      const bln = document.querySelector(".balance");
      const qtb = document.querySelector(".qtb");
      const mines = document.querySelectorAll(".mine");
      const res = document.querySelector(".res");
      const mqty = [
        [
          2, 1.03, 1.12, 1.23, 1.35, 1.49, 1.66, 1.86, 2.09, 2.37, 2.71, 3.13,
          3.65, 4.3, 5.18, 6.33, 7.91, 10.17, 13.57, 18.98, 28.49, 47.49, 95,
          285,
        ],
        [
          3, 1.07, 1.23, 1.41, 1.65, 1.91, 2.25, 2.67, 3.21, 3.9, 4.8, 6, 7.63,
          9.33, 13.24, 18.2, 26.01, 39, 62.4, 39, 62.4, 109.34, 218.5, 546.24,
          2180,
        ],
        [
          4, 1.12, 1.4, 1.65, 2, 2.48, 3.1, 3.9, 5, 6.6, 8.8, 12, 16.8, 24.27,
          36.4, 57.22, 95.37, 171.67, 343.35, 801.16, 2400, 12010,
        ],
        [
          5, 1.2, 1.5, 1.91, 2.48, 3.25, 4.34, 5.89, 8.15, 11.55, 16.8, 25.21,
          39.21, 63.72, 109.2, 200.29, 400.58, 901.31, 2400, 8410, 50470,
        ],
        [
          6, 1.24, 1.66, 2.25, 3.1, 4.34, 6.2, 9.06, 13.59, 21, 33.61, 56.02,
          98.04, 182.08, 364.16, 801.16, 2000, 6000, 24030, 168240,
        ],
        [
          7, 1.31, 1.86, 2.67, 3.93, 5.89, 9.06, 14.34, 23.48, 39.9, 70.95,
          133.06, 266.12, 576.59, 1380, 3800, 12680, 57080, 456660,
        ],
        [
          8, 1.39, 2.09, 3.21, 5.04, 8.15, 13.59, 23.48, 42.26, 79.83, 159.66,
          342.16, 798.36, 2070, 6220, 22830, 114160, 1020000,
        ],
        [
          9, 1.48, 2.37, 3.9, 6.6, 11.55, 21, 39.9, 79.83, 169.65, 387.77,
          969.44, 2710, 8820, 35280, 194080, 1940000,
        ],
        [
          10, 1.58, 2.71, 4.8, 8.8, 16.8, 33.61, 70.95, 159.66, 387.77, 1030,
          3100, 10850, 47050, 282300, 3100000,
        ],
        [
          11, 1.7, 3.13, 6, 12, 25.21, 25.21, 56.02, 133.06, 342.15, 969.44,
          3100, 11630, 54280, 352870, 4230000,
        ],
        [
          12, 1.82, 3.65, 7.63, 16.8, 39.21, 98.04, 266.12, 798.36, 2710, 10850,
          54280, 380020,
        ],
        [
          13, 1.97, 4.3, 9.93, 24.27, 63.72, 182.08, 576.59, 2070, 8820, 47050,
          352870, 4940000,
        ],
        [
          14, 2.15, 5.18, 13.24, 36.4, 109.24, 364.16, 1380, 6220, 35280,
          282300, 4230000,
        ],
        [
          15, 2.37, 6.33, 18.2, 57.22, 200.29, 801.16, 200.29, 801.16, 3800,
          22830, 194080, 3100000,
        ],
        [16, 2.63, 7.91, 26.01, 95.37, 400.58, 2000, 12680, 114160, 1940000],
        [17, 2.96, 10.17, 39, 171.67, 901.31, 6000, 57080, 1020000],
        [18, 3.39, 13.57, 62.42, 343.35, 2400, 24030, 456660],
        [19, 3.95, 18.98, 109.24, 801, 8410, 168240],
        [20, 4.74, 28.5, 218.5, 2400, 50470],
        [21, 5.93, 47.5, 546.24, 12010],
        [22, 7.9, 95, 2180],
        [23, 11.87, 284.99],
        [24, 24],
      ];
      
      
bet.value = 10;
qtb.value = 5;
let NowBombs = 0;

const qb = document.querySelectorAll(".qb");
for (const qbs of qb) {
  qbs.onclick = () => {
    qtb.value = qbs.getAttribute("data-id");
  };
}

const generatebombs = (n) => {
  const min = 1;
  const max = 25;

  for (let i = 0; i < n; i++) {
    arBombs[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const hasDuplicates = (arr) => {
  const elementMap = new Map();
  let result = false;

  for (const item of arr) {
    if (elementMap.has(item)) {
      result = true;
      break;
    }
    elementMap.set(item, true);
  }

  return result;
};

const updateUI = () => {
  for (let mine of mines) {
    mine.classList.remove("hide");
    mine.classList.remove("no-hide");
  }
};

const mFn = () => {
  const inputValue = document.querySelector(".qtb").value;
  const n = Math.round(parseFloat(inputValue));

  if (qtb.value === "1" || qtb.value === "") {
    qtb.value = 2;
  }
  if (parseInt(bet.value) >= parseInt(bln.textContent)) {
    bet.value = parseInt(bln.textContent);
  }
  if (bet.value === "") {
    bet.value = 10;
  }

  if (n === 24) {
    qtb.value = 23;
  }
  return true;
};

let inter = 0;
const game = () => {
  res.classList.remove("lose");
  res.classList.remove("win");
  res.classList.remove("plsbet");
  res.classList.add("load");
  res.textContent = "Игра идёт";
  let haveBet = mFn();
  updateUI();
  if (haveBet) {
    const inputValue = document.querySelector(".qtb").value;
    const n = Math.round(parseFloat(inputValue));
    generatebombs(n);

    while (hasDuplicates(arBombs)) {
      generatebombs(n);
      inter++;
    }
    console.log("1. Положение бомб " + arBombs);
    console.log(
      "2. " + inter + ":Количество повторных генерация массива с бомбами"
    );
    const mines = document.querySelectorAll(".mine");

    for (let mine of mines) {
      mine.classList.remove("bomb");
    }

    for (let mine of mines) {

      mine.classList.add("hide");
      const dataAttributeValue = mine.getAttribute("data-id");
      if (arBombs.includes(parseInt(dataAttributeValue))) {
        mine.classList.add("bomb");
        const qtb = document.querySelector(".qtb");
        const bet = document.querySelector(".bet");
        qtb.disabled = true;
        bet.disabled = true;
        btn.classList.add("game-btn");
        btn.classList.remove("btn");
        const gameBtn = document.querySelector(".game-btn");
        gameBtn.textContent = "Забрать";
        gameBtn.onclick = () => {
          if (mine1 >= 1) { 
            
            winGame();

          }
        };
      }
    }
  }
};

let nowGameBomb = null;
const btnClicks = 0;

const winGame = () => {
  const inputValue = document.querySelector(".qtb").value;
  const n = Math.round(parseFloat(inputValue));
  if(fullScreen){
  NowBombs = 25 - n
  }

  const blnElement = document.querySelector(".balance");

  const betValue = parseInt(document.querySelector(".bet").value);
  const blnV = parseInt(blnElement.textContent);

  const resB = betValue * nowGameBomb[NowBombs];
   const res = document.querySelector(".res");
  
  xnow = nowGameBomb[NowBombs];
  const newBalance = (xnow * betValue) + blnV ;
  res.textContent = "Выигрыш " + betValue * xnow
blnElement.textContent = newBalance;

  res.classList.remove("lose");
  res.classList.add("win");
  res.classList.remove("plsbet");
  res.classList.remove("load");
  res.textContent = "Выигрыш " + resB;

  btn.textContent = "Играть";
  endGame();
};

btn.onclick = () => {
  game();
  const inputValue = document.querySelector(".qtb").value;
  const n = Math.round(parseFloat(inputValue));
  for (let i = 0; i < mqty.length; i++) {
    if (mqty[i][0] === n) {
      nowGameBomb = mqty[i];
      console.log("3. Умножения " + nowGameBomb);
      break;
    }
  }
  const qtyEmpty = document.querySelector('.qty-empty');
  const betValue = parseInt(document.querySelector(".bet").value);
  const blnEl = document.querySelector(".balance");
  const blnElement = parseInt(blnEl.textContent);
  blnEl.textContent = blnElement - betValue;
  qtyEmpty.textContent = 25 - n;
  const x = document.querySelector('.xx')
  x.textContent = 0 + "X";
};

let tryy = true;

const endGame = () => {
  qtb.disabled = false;
  bet.disabled = false;
  NowBombs = 0;
  mine1 = 0;
  const bombs = document.querySelectorAll(".bomb");
  for (let bomb of bombs) {
    bomb.classList.remove("hide");
    bomb.classList.add("no-hide");
    bomb.classList.remove("bomb");
  }

  tryy = false;
  const gameBtn = document.querySelector(".game-btn");
  const c = document.querySelector(".c");
  c.classList.add("btn");
  c.classList.remove("game-btn");
  c.textContent = "Играть";
};

let mine1 = 0;
let fullScreen = false
  for (let mine of mines) {
    mine.onclick = () => {
      const qtb = document.querySelector(".qtb");
      const bet = document.querySelector(".bet");
      mine1 = 1;
      if (tryy) {
        if (mine.classList.contains("bomb")) {
          endGame();
          res.classList.add("lose");
          res.classList.remove("win");
          res.classList.remove("plsbet");
          res.classList.remove("load");
          res.textContent = "Проигрыш";
          const x = document.querySelector('.xx')
          x.textContent = 0 + "X";
        } else {
            if (mine.classList.contains("hide")) {
            NowBombs++;
            const qtyEmpty = document.querySelector('.qty-empty');
            const newEmpty = parseInt(qtyEmpty.textContent) - 1;
            qtyEmpty.textContent = newEmpty;
            const inputValue = document.querySelector(".qtb").value;
            const n = Math.round(parseFloat(inputValue));
            xnow = nowGameBomb[NowBombs];
            const x = document.querySelector('.xx');
            x.textContent = xnow + "X";
            mine.classList.remove('hide');
            if (newEmpty === 0) {
              fullScreen = true
              endGame();
              winGame();
            }
          }
        }
      } else {
        for (let mine of mines) {
          if (mine.classList.contains("bomb")) {
            mine.classList.remove("bomb");
          }
        }
      }
    };
  };
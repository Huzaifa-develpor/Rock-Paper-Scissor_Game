# ✊✋✌ Rock Paper Scissors Game

## 📌 Overview

Rock Paper Scissors is an interactive web-based game built using **HTML, CSS, and JavaScript**.
The user plays against the computer, and the game determines the winner based on classic rules.

The project focuses on practicing **JavaScript logic, DOM manipulation, event handling, and conditional statements**.

---

## ✨ Features

* 🧠 User vs Computer gameplay
* 🎲 Random computer choice generation
* 📊 Real-time score tracking
* 🟢 Win / 🔴 Lose / 🔵 Draw system
* 🎯 Dynamic message updates
* 🎮 Click-based interaction

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## ⚙️ How It Works

1. User selects Rock, Paper, or Scissor
2. Computer randomly selects its choice
3. Game logic compares both choices
4. Result is displayed:

   * Win → User score increases
   * Lose → Computer score increases
   * Draw → No score change

---

## 🧾 Game Logic (Core JavaScript)

```js id="rps_logic"
const option = ["rock", "paper", "scissor"];
const randIdx = Math.floor(Math.random() * 3);
return option[randIdx];
```

### 🎮 Game Flow Logic

* If user choice == computer choice → Draw
* Rock beats Scissor
* Scissor beats Paper
* Paper beats Rock

---

### 📊 Score Handling Logic

```js id="score_logic"
if(userWin == true){
    userScore++;
    msg.innerText = "You Win!";
}
else{
    compScore++;
    msg.innerText = "You Lose!";
}
```

---

## 🧠 Learning Outcomes

* JavaScript event handling
* DOM manipulation
* Random logic generation
* Conditional statements
* Game logic building
* Score tracking system

---

## 🚀 Future Improvements

* 🔊 Add sound effects
* 🎨 Improve UI animations
* 🏆 Add leaderboard system
* ⏱️ Add timed rounds
* 📱 Better mobile responsiveness

---

## 👨‍💻 Author

Huzaifa Anwar

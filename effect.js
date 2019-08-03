var texts = ["網頁設計師", "平面設計師", "室內設計師"];
var speed = 300;
var index = 0;
var classname = ".type";
var count = 0;
var wait = 6; 

function type() {
    var text = document.querySelector(classname);

    var letter = texts[index].slice(0, count++);

    text.innerHTML = letter;

    if (count == texts[index].length + wait) {
        index++;
        count = 0;
    }

    if (index == texts.length) {
        index = 0;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentloded", type());

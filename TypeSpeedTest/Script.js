const testText = document.getElementById('testText').innerHTML;
const typeText = document.getElementById('typeText');
const timerLabel = document.querySelector('.timer-section .timer-label');
const resetBtn = document.querySelector('#resetBtn');
var TimerRun = false;
var TimerValue = [0,0,0];//0->minut 1->second 2->milisecond
function runTimer() {
    TimerValue[2]++;
    if(TimerValue[2]>=60){
        TimerValue[2]=0;
        TimerValue[1]++;
    }
    if(TimerValue[1]>=60){
        TimerValue[1]=0;
        TimerValue[0]++;
    }
    const currentTimer = TimerValue[0]+':'+TimerValue[1]+':'+TimerValue[2];
    timerLabel.innerHTML = currentTimer;
}

function ResetProgram(e) {
    clearInterval(interval);
    interval = null;
    TimerValue = [0,0,0];
    typeText.style.borderColor = "gray";
    typeText.value = "";
    TimerRun = false;
    const currentTimer = TimerValue[0]+':'+TimerValue[1]+':'+TimerValue[2];
    timerLabel.innerHTML = currentTimer;
}

function Start(e) {
    if(TimerRun == false){
        TimerRun = true;
        interval = setInterval(runTimer,20);
    }
}

function CheckTexts(FirstText,SecondText) {
    var isEqual = true;
    for (const i in FirstText.value) {
        if (FirstText.value[i] !== SecondText[i]) {
            isEqual = false;
        }
    }
    return isEqual;
}

function ChangeText(e) {
    console.log(CheckTexts(typeText,testText));
    
    if (CheckTexts(typeText,testText)) {
        typeText.style.borderColor = "gold";
    } else {
        typeText.style.borderColor = "#ff63479c";
    }

    if (typeText.value === testText) {
        clearInterval(interval);
        typeText.style.borderColor = "chartreuse";
        alert('Finish');
    }
}

typeText.addEventListener('keypress',Start);
typeText.addEventListener('keyup',ChangeText);
resetBtn.addEventListener('click',ResetProgram)

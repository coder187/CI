
document.addEventListener("DOMContentLoaded", function (){
  let buttons = document.getElementsByTagName("button");

  for (let button of  buttons){

    button.addEventListener("click",function(){
      if (this.getAttribute("data-type")==="submit"){
          checkAnswer();
      }
      else{
        let gameType = this.getAttribute("data-type")
        runGame(`${gameType}`);
      }
    })
      
  } 
  
  //use enter key to check answer
  document.getElementById("answer").addEventListener("keydown",function(event){
    if (event.key==="Enter"){
      checkAnswer();
    }
  })
  runGame("addition"); //default game to start on page load

})
function runGame(gameType){

  document.getElementById("answer").value="";
  document.getElementById("answer").focus();
  
  let num1 = Math.floor(Math.random()*25)+1;
  let num2 = Math.floor(Math.random()*25)+1;
  
 
  if (gameType==="addition"){
    dispalyAddQ(num1,num2);   
  }
  else if(gameType==="multiply"){
    dispalyMultiplyQ(num1,num2);
  }
  else if(gameType==="subtract"){
    dispalySubtractQ(num1,num2);
  }
  else if(gameType==="division"){
    dispalyDivisionQ(num1,num2);
  }
  else{
    alert(`Unknown game type ${gameType}`);
    throw "Unknown game type" + gameType,"aborting";
    //throw `Unknown game type ${gameType}`,"aborting";
  }

}

function checkAnswer(){
  let userAnswer = parseInt(document.getElementById("answer").value);
  let calcAnswer = calculateCorrectAnswer();
  let isCorrect = calcAnswer[0] === userAnswer;
  if (isCorrect){
    incScore();
    alert(`Hey you got it right :D`);
  }
  else
  {
    incWrongAnswer();
    alert(`Awwh, you answered ${userAnswer}. The correct answer was: ${calcAnswer[0]}!`);
  }
  
  runGame(calcAnswer[1]);
}

function calculateCorrectAnswer(){
  
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;
  
  if (operator === "+"){
    return [operand1 + operand2,"addition"];
  }
  else if (operator === "x"){
    return [operand1 * operand2,"multiply"];
  }
  else if (operator === "-"){
    return [operand1 - operand2,"subtract"];
  }
  else if (operator === "/"){
    return [operand1 / operand2,"division"];
  }
  else{
    alert(`Unimplemnted operator ${operator}`);
    throw `Unimplemnted operator ${operator}`,"aborting";
  }

}

function incScore(){
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incWrongAnswer(){
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

function dispalyAddQ(operand1,operand2){
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function dispalySubtractQ(operand1,operand2){
  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;;
  document.getElementById("operator").textContent = "-";
}

function dispalyMultiplyQ(operand1,operand2){
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function dispalyDivisionQ(operand1,operand2){
  //swop the numbers if num2 > num1
  if (operand2>operand1){    
    let numt = operand1;
    operand1=operand2;
    operand2=numt;
  }

  //make sure only whole answers
  if (operand1 % operand2 !== 0 ){  
    operand1 = operand1 * operand2;
  }

  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "/";
  
}
let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("arrow");
let x=180;

for(let i=0;i<=questions.length;i++){
    questions[i].addEventListener("click", ()=>{
        console.log("got here");
        arrows[i].style.transform="rotate(" + x + "deg)";
        if(x==0){
            x=180;
            questions[i].style.height="2rem";
            answers[i].style.opacity="0";
        }
        else {
            x=0;
            questions[i].style.height="6rem";
            answers[i].style.opacity="1"
            for(let j=0;j<=questions.length;j++){
                if(j!=i){
                    questions[j].style.height="2rem";
                    answers[j].style.opacity="0";
                    arrows[j].style.transform="rotate(0deg)";
                }
            }
        }
    });
}
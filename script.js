let score = 0;
let minStage = 1;
let maxStage = 5;


   function range(){
    var randomNum = Math.floor(Math.random() * 2) + 1
    console.log(randomNum)

  
      const name = prompt("What is your name?")
      alert(`Welcome ${name}!`)
      const guess =  prompt(`Current Score: ${score}
      Stage ${minStage}
      guess a number from 1 - 2 `)
  
      console.log(guess)

    if (randomNum == guess){
        score++;
        minStage++;
        alert(`Great job 
        Current Score: ${score} `)

        randomNum++

         let next =  prompt(`Current Score: ${score}
         Stage ${minStage}
         guess a number from 1 - 3 `)

         if(randomNum == next ){
          score++;
          minStage++;
          alert(`Great job 
          Current Score: ${score} `)

           randomNum++

         let next =  prompt(`Current Score: ${score}
         Stage ${minStage}
         guess a number from 1 - 4 `)
         }
        
    }  

    else{
        alert('try again')
    }
   }

   range()
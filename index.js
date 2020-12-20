
var readlineSync=require("readline-sync");
var chalk=require("chalk");
var score=0 
var userName=readlineSync.question(chalk.green("Enter your name :"))
console.log(chalk.cyan("-----------------------------------------\n"))
console.log(chalk.blue.bold("Welcome to Game of Thrones Quiz ,"),chalk.underline(userName))
console.log(chalk.cyan("-----------------------------------------\n"))
console.log(chalk.italic.cyanBright("You will be asked 10 questions about Game of Thrones in this quiz\nFor each correct answer ,you will be awarded one point and for being wrong you  will be minus one point\n"))
console.log(chalk.blue.bold("Let's play the game\n"))

function game(options,ques,answer)
{
   console.log(chalk.green(ques));
   var index=readlineSync.keyInSelect(options,chalk.bold.bgBlue("Select your option :"))
   //console.log("you chose",index)
  if(options[index]==answer)
  {
    console.log(chalk.italic.cyanBright("\nCorrect answer"))
    score=score+1
    console.log(chalk.blue.bold("Your score :",score,"\n"))
  }

  else
  {
    console.log(chalk.italic.cyanBright("Wrong answer"))
    score=score-1
     console.log(chalk.blue.bold("Your score :",score,"\n"))

  }
}

  var questions=[
    {quest:"How did Daenerys Targaryen eventually hatch her dragon eggs?",
    options:[' In a lightning storm','In a funeral pyre', 'In a fireplace','In a frozen cave'],
    answer:"In a funeral pyre"
    },
    {quest:"The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
    options:[' Valar Dohaeris or \'all men must serve\'','Valar Rohnas or \'all men must live\'','Valar GoGo or \'all men must dance\''],
    answer:" Valar Dohaeris or \'all men must serve\'"
    },
    {quest:"What is the only thing that can put out volatile Wildfire?",
    options:[' Sand','Water',' Dragon\'s blood','Sunlight'],
    answer:" Sand"
    },
    {quest:"Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
    options:['Weirwood','Wildfire',' Valyrian Steel','Snowballs'],
    answer:" Valyrian Steel"
    },
    {quest:"How many times has Beric Dondarrion been brought back to life?",
    options:['Three times','Five times','Six times','Seven times'],
    answer:"Six times"
    },
    {quest:"Arya's punishment for stealing from the Many-Face God is:",
    options:['Death','Memory Loss','Blindness','Uncontrollable laughter'],
    answer:"Blindness"
    },
    {quest:"What was the name of Ned Stark's greatsword?",
    options:['Ice','Oathkeeper',' Widow\'s Wail','Northguard'],
    answer:"Ice"
    },
    {quest:"Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?:",
    options:['Tyrion Lannister','King Joffrey','Jaime Lannister','Bronn'],
    answer:"Bronn"
    },
     {quest:"Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
    options:['Pride in drawing blood first','Knowledge of poisons','Nighttime attacks','Ruby-colored armor'],
    answer:"Knowledge of poisons"
    },
     {quest:"The Night King was created using a dagger made of:",
    options:['Valyrian Steel',' Blue Ice','Dragonglass','Weirwood'],
    answer:"Dragonglass"
    }

  ]

  var highScore=[
    {
      name : "Pragati",
      score: 10
    },
    {
      name : "Divij",
      score: 8
    },
    {
      name : "Nayonika",
      score: 6
    }


  ]
  

  for(var i=0;i<questions.length;i++)
  {
    game(questions[i].options,questions[i].quest,questions[i].answer);
  }
  console.log(chalk.cyan("-----------------------------------------\n"))
  
  console.log(chalk.bold.green("Your Final Score :",score));
  console.log(chalk.bold.cyanBright("\nHIGH SCORES :"))
for(i=0;i<highScore.length;i++){
   console.log("\n",highScore[i].name,":",highScore[i].score)
}
for(i=0;i<highScore.length;i++){
    if(score>highScore[i].score)
    {
      console.log(chalk.bgBlue("\nCongo!!You broke ",highScore[i].name," record"))
      console.log(chalk.yellow("\nKindly send the Screenshot of the score so we can update the high score list"))
      break;
    }
  }
  console.log(chalk.bgBlue("\nThank You for playing the Quiz,You did well!!"))
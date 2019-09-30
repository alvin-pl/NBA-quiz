const STORE = {
    questions: [//1
        {
            question: "When was the NBA founded?",
            options: [
                "1946",
                "1982",
                "1931",
                "1901",
            ],
            answer: "1946",
        },
        //2
        {
            question: "What was the first team to win an NBA championship?",
            options: [
                "Philadelphia Warriors",
                "Washington Capitols",
                "Boston Celtics",
                "New York Knickerbockers",
            ],
            answer: "Philadelphia Warriors", 
        },
        //3
        {
            question: "Which team has the most NBA championships?",
            answer: [
                "Los Angeles Lakers",
                "Boston Celtics",
                "Golden State Warriors",
                "Miami Heat",
            ],
            answer: "Boston Celtics",
        },
        //4
        {
            question: "Who is the NBA all-time leading scorer?",
            answer: [
                "Michael Jordan",
                "Kobe Bryant",
                "Lebron James",
                "Kareem Abdul Jabber",
            ],
            answer: "Kareem Abdul Jabber",
        },
        //5
        {
            question: "Who is the highest paid NBA player of all time?",
            answer:[
                "Shaquille O'Neal",
                "Tim Duncan",
                "Kevin Garnett",
                "Dwyane Wade",
            ],
            answer: "Kevin Garnett",
        },
    ]
}




//press the start button to render a question
function startQuizButton() {
    $('.button-text').on('click', function (event) {
       renderQuestions();
    });
}

//rendering the questions to the dom
function renderQuestions() {
    console.log('`renderQuestions`ran')
    const quizQuestions = 'When was the NBA founded?';

    $('.nba-questions').html(quizQuestions);
}


function callBackFunc(){
   startQuizButton();
};
$(callBackFunc()); 
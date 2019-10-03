//Quiz questions 
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
    ],
};

//variables for the quiz score and the number of questions
let score = 0;
let questionNumber = 0; 

function generateQuestionContent(optionsnow){
    return `
<li>1946</li>
<li>1982</li>
<li>1931</li>
<li>1901</li>
    `;
}

//press the start button to render, renderQuestionPage
function startQuizButton() {
    $('.start-button').on('click', function(event) {
       // questionsPage();
        //generateQuestionContent()

        let grabOptionStrings = generateQuestionContent(STORE); 
        $('.quiz-options').html(grabOptionStrings);
        // 1. to start-FIRST you call this INSIDE of a function 
        // 2. the grabOptionStrings variable has the FUNCTION generateQuestionContent(STORE) assigned to it
        // 3. you have to create the generateQuestionContent function w/ a diff argument inside the ()
        // 4. and return hardcoded strings within back tics inside of that function 
    });
}

function questionsPage(){
    //the question rank should appear
    //the score rank should appear
    //the first question should appear
    //the answer options should appear

    
}



function handleNbaApp() {
    startQuizButton();
}

$(handleNbaApp);


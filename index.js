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
            options: [
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
            options: [
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
            options: [
                "Shaquille O'Neal",
                "Tim Duncan",
                "Kevin Garnett",
                "Dwyane Wade",
            ],
            answer: "Kevin Garnett",
        },
    ],
    score: 0,
    recentQuestion: 0,
};



/* when a user clicks on start quiz button */
function startQuiz() {
    $('#start').on('click', function (event) {
        renderAQuestion();
    }
    );
}

/* Displays question number and score obtained */
function updateQuestionAndScore() {
    const html = $(`<ul>
      <li id="js-answered">Questions Number: ${STORE.recentQuestion + 1}/${STORE.questions.length}</li>
      <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
    $(".question-score").html(html);
}

/* Displays the options for the current question */
function updateOptions() {
    let question = STORE.questions[STORE.recentQuestion];
    for (let i = 0; i < question.options.length; i++) {
        $('.js-options').append(`
        <input type = "radio" name="options" id="option${i + 1}" value= "${question.options[i]}" tabindex ="${i + 1}"> 
        <label for="option${i + 1}"> ${question.options[i]}</label> <br/>
        <span id="js-r${i + 1}"></span>
    `);
    }

}

/*displays the question*/
function renderAQuestion() {
    let question = STORE.questions[STORE.recentQuestion];
    updateQuestionAndScore();
    const questionHtml = $(`
  <div>
    <form id="js-questions" class="question-form">
      
      <fieldset>
        <div class="box question">
          <div class="under-box">
            <legend> ${question.question}</legend>
          </div>
        </div>

        <div class="box options">
          <div class="under-box">
            <div class="js-options"> </div>
        </div>
      </div>
    

      <div class="box">
        <div class="under-box">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next >></button>
        </div>
      </div>
    </fieldset>
    </form>
  </div>`);
    $("main").html(questionHtml);
    updateOptions();
    $("#next-question").hide();
}

/* displays results and restart quiz button */
function displayResults() {
    let resultHtml = $(
        `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="box">
            <div class="under-box">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="box">
            <div class="under-box">
              <button type="button" id="restart"> Reset!</button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>`);
    STORE.recentQuestion = 0;
    STORE.score = 0;
    $("main").html(resultHtml);
}

/* checks whether it reached the end of questions list */
function handleQuestions() {
    $('body').on('click', '#next-question', (event) => {
        STORE.recentQuestion ===
            STORE.questions.length ? displayResults() : renderAQuestion();
    });
}


/*checks whether the chosen option is right or wrong and displays respective message*/
function handleSelectOption() {
    $('body').on("submit", '#js-questions', function (event) {
        event.preventDefault();
        let currentQues = STORE.questions[STORE.recentQuestion];
        let selectedOption = $("input[name=options]:checked").val();
        if (!selectedOption) {
            alert("Choose one!");
            return;
        }
        let id_num = currentQues.options.findIndex(i => i === selectedOption);
        let id = "#js-r" + ++id_num;
        $('span').removeClass("right-answer wrong-answer");
        if (selectedOption === currentQues.answer) {
            STORE.score++;
            $(`${id}`).append(`Correct! Shoot your shot again.<br/>`);
            $(`${id}`).addClass("right-answer");
        }
        else {
            $(`${id}`).append(`You missed the mark! <br/> The correct answer is "${currentQues.answer}"<br/>`);
            $(`${id}`).addClass("wrong-answer");
        }

        STORE.recentQuestion++;
        $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
        $('#answer').hide();
        $("input[type=radio]").attr('disabled', true);
        $('#next-question').show();
    });
}

function restartQuiz() {
    $('body').on('click', '#restart', (event) => {
        renderAQuestion();
    });
}

function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);
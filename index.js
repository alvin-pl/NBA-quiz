// Quiz questions 
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
                "Kareem Abdul Jabbar",
            ],
            answer: "Kareem Abdul Jabbar",
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



// when a user clicks on start quiz button 
function startQuiz() {
    $('#start').on('click', function (event) {
        renderAQuestion();
    }
    );
}

// presents question and score under "NBA Quiz"
function showQuestionAndScore() {
    const html = $(`<ul>  
          <li id="answered">Questions Number: ${STORE.recentQuestion + 1}/${STORE.questions.length}</li>
         <li id="score">Score: ${STORE.score}/${STORE.questions.length}</li>
         </ul>`);
        $(".question-score").html(html);
}

// presents the options for the current question
function updateOptions() {
    let question = STORE.questions[STORE.recentQuestion];
    for (let i = 0; i < question.options.length; i+=1) {
        $('.javascript-options').append(`
        <input type = "radio" name="options" id="option${i + 1}" value= "${question.options[i]}" tabindex ="${i + 1}"> 
        <label for="option${i + 1}"> ${question.options[i]}</label> <br/>
        <span id="r${i + 1}"></span>
    `);
    }

}

// presents the question
function renderAQuestion() {
    let question = STORE.questions[STORE.recentQuestion];
  showQuestionAndScore();
    const questionHtml = $(`
  <div>
    <form id="javascript-questions" class="question-form">
      
  <fieldset>
    <div class="box question">
      <div class="under-box">
    <legend> ${question.question}</legend>
     </div>
    </div>
       <div class="box options">
          <div class="under-box">
            <div class="javascript-options"> </div>
        </div>
      </div>
         <div class="box">
        <div class="under-box">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="new-question" tabindex="10"> Next >></button>
        </div>
      </div>
    </fieldset>
    </form>
  </div>`);
    $("main").html(questionHtml);
    updateOptions();
    $("#new-question").hide();
}

// presents results and resets quiz button 
function displayResults() {
    let resultHtml = $(
        `<div class="results">
      <form id="js-resets-quiz">
        <fieldset>
          <div class="box">
            <div class="under-box">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="box">
            <div class="under-box">
              <button type="button" id="reset"> Reset!</button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>`);
    STORE.recentQuestion = 0;
    STORE.score = 0;
    $("main").html(resultHtml);
}

// checks whether it reached the end of questions list 
function theQuestions() {
    $('body').on('click', '#new-question', (event) => {
        STORE.recentQuestion ===
            STORE.questions.length ? displayResults() : renderAQuestion();
    });
}


// checks whether the chosen option is right or wrong and displays respective message
function theSelectOption() {
  $('body').on("submit", '#javascript-questions', function (event) {
        event.preventDefault();
        let displayedQuestion = STORE.questions[STORE.recentQuestion]; 
        let displayedOption = $("input[name=options]:checked").val(); 
    if (!displayedOption) { 
            alert("Choose one!");
            return;
        }
    let id_num = displayedQuestion.options.findIndex(i => i === displayedOption);  
        let id = "#r" + ++id_num;
        $('span').removeClass("right-answer wrong-answer");
    if (displayedOption === displayedQuestion.answer) {  
            STORE.score++;
            $(`${id}`).append(`Correct! Shoot your shot again.<br/>`);
            $(`${id}`).addClass("right-answer");
        }
        else {
      $(`${id}`).append(`You missed the mark! <br/> The correct answer is "${displayedQuestion.answer}"<br/>`); 
            $(`${id}`).addClass("wrong-answer");
        }

        STORE.recentQuestion++;
        $("#score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
        $('#answer').hide();
        $("input[type=radio]").attr('disabled', true);
        $('#new-question').show();
    });
}

// this resets the quiz to the original screen
function resetQuiz() {
    $('body').on('click', '#reset', (event) => {
        renderAQuestion();
    });
}

function wrapQuizApp() {
    startQuiz();
    theQuestions();
    theSelectOption();
    resetQuiz();
}

$(wrapQuizApp);

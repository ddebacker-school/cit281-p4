const data = require("./p4-data.js");

function getQuestions(num) {
  let filledArray = [...new Array(num)];
  for (let i = 0; i < filledArray.length; i++) {
    filledArray[i] = `Q${i + 1}`;
  }
  return filledArray;
}

function getAnswers(num) {
  let filledArray = [...new Array(num)];
  for (let i = 0; i < filledArray.length; i++) {
    filledArray[i] = `A${i + 1}`;
  }
  return filledArray;
}

function getQuestionsAnswers(num) {
  const QA = [...new Array(num)];
  let questionArray = [...getQuestions(num)];
  let answersArray = [...getAnswers(num)];
  for (let i = 0; i < QA.length; i++) {
    QA[i] = { question: questionArray[i], answer: answersArray[i] };
  }
  return QA;
}

function getQuestion(num) {
  let questionArray = [...getQuestions(num)];
  let getQuestionObject = {
    question: questionArray[num - 1],
    number: num,
    error: "",
  };
  return getQuestionObject;
}

function getAnswer(num) {
  let answerArray = [...getAnswers(num)];
  let getAnswerObject = {
    Answer: answerArray[num - 1],
    number: num,
    error: "",
  };
  return getAnswerObject;
}

function getQuestionAnswer(num) {
  let questionAnswerArray = [...getQuestionsAnswers(num)];
  let getQuestionAnswerObject = {
    question: questionAnswerArray[num - 1].question,
    answer: questionAnswerArray[num - 1].answer,
    number: num,
    error: "",
  };
  return getQuestionAnswerObject;
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

const { data } = require("./p4-data.js");

function getQuestions() {
  let filledArray = [];
  for (let i = 0; i < data.length; i++) {
    filledArray[i] = data[i].question;
  }
  return filledArray;
}

function getAnswers() {
  let filledArray = [];
  for (let i = 0; i < data.length; i++) {
    filledArray[i] = data[i].answer;
  }
  return filledArray;
}

function getQuestionsAnswers() {
  const clonedData = JSON.parse(JSON.stringify(data));
  return clonedData;
}

function getQuestion(num) {
  const questionArray = [...getQuestions()];
  let getQuestionObject = {};
  if (num != null && num <= data.length && num >= 1) {
    getQuestionObject = {
      question: questionArray[num - 1],
      number: num,
      error: "",
    };
  } else if (num > data.length) {
    getQuestionObject = {
      question: "",
      number: "",
      error: `Question number must be less than the number of questions (${data.length})`,
    };
  } else if (num == null) {
    getQuestionObject = {
      question: "",
      number: "",
      error: "Question number must be an integer",
    };
  } else if (num <= 0) {
    getQuestionObject = {
      question: "",
      number: "",
      error: "Question number must be >= 1",
    };
  }
  return getQuestionObject;
}

function getAnswer(num) {
  const questionArray = [...getAnswers()];
  let getQuestionObject = {};
  if (num != null && num <= data.length && num >= 1) {
    getQuestionObject = {
      answer: questionArray[num - 1],
      number: num,
      error: "",
    };
  } else if (num > data.length) {
    getQuestionObject = {
      answer: "",
      number: "",
      error: `Answer number must be less than the number of questions (${data.length})`,
    };
  } else if (num == null) {
    getQuestionObject = {
      answer: "",
      number: "",
      error: "Answer number must be an integer",
    };
  } else if (num <= 0) {
    getQuestionObject = {
      answer: "",
      number: "",
      error: "Answer number must be >= 1",
    };
  }
  return getQuestionObject;
}

function getQuestionAnswer(num) {
  const questionArray = [...getQuestions()];
  const answerArray = [...getAnswers()]
  let getQuestionObject = {};
  if (num != null && num <= data.length && num >= 1) {
    getQuestionObject = {
      question: questionArray[num - 1],
      number: num,
      error: "",
      answer: answerArray[num - 1]
    };
  } else if (num > data.length) {
    getQuestionObject = {
      question: "",
      number: "",
      error: `Question number must be less than the number of questions (${data.length})`,
    };
  } else if (num == null) {
    getQuestionObject = {
      question: "",
      number: "",
      error: "Question number must be an integer",
    };
  } else if (num <= 0) {
    getQuestionObject = {
      question: "",
      number: "",
      error: "Question number must be >= 1",
    };
  }
  return getQuestionObject;
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
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = true;
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

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};
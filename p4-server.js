const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module");

//Return all questions
fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json;charset=utf-8")
    .send({
      error: "",
      statuscode: 200,
      questions: getQuestions(),
    });
});

//Return all answers
fastify.get("/cit/answer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json;charset=utf-8")
    .send({
      error: "",
      statuscode: 200,
      answers: getAnswers(),
    });
});

//questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json;charset=utf-8")
    .send({
      error: "",
      statuscode: 200,
      questions_answers: getQuestionsAnswers(),
    });
});

//Return a specific question
fastify.get("/cit/question/:number", (request, reply) => {
  let number = request.params.number;
  reply
    .code(200)
    .header("Content-Type", "application/json;charset=utf-8")
    .send({
      error: `${getQuestion(number).error}`,
      statuscode: 200,
      question: getQuestion(number).question,
      number: number,
    });
});

//Return a specific answer
fastify.get("/cit/answer/:number", (request, reply) => {
  let number = request.params.number;
  reply
    .code(200)
    .header("Content-Type", "application/json;charset=utf-8")
    .send({
      error: `${getAnswer(number).error}`,
      statuscode: 200,
      answer: getAnswer(number).answer,
      number: number,
    });
});

//Return a specific question and answer
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let number = request.params.number;
    reply
      .code(200)
      .header("Content-Type", "application/json;charset=utf-8")
      .send({
        error: `${getAnswer(number).error}`,
        statuscode: 200,
        question: getQuestion(number).question,
        answer: getAnswer(number).answer,
        number: number,
      });
  });

//Unmatched route handler
fastify.get("*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "application/json;charset=utf-8")
      .send({
        error: "Route not found",
        statuscode: 404,
      });
  });

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

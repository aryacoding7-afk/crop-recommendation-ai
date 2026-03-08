import "./community.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Community(){

  const [name,setName] = useState("");
  const [question,setQuestion] = useState("");

  const [questions,setQuestions] = useState([]);

  const [selectedQuestion,setSelectedQuestion] = useState(null);
  const [answers,setAnswers] = useState([]);

  const [answerName,setAnswerName] = useState("");
  const [answer,setAnswer] = useState("");

  const fetchQuestions = async()=>{

    try{

      // BACKEND WORK
      const res = await axios.get(
        "http://localhost:5000/api/questions"
      );

      setQuestions(res.data);

    }catch(err){
      console.error(err);
    }

  };


  useEffect(()=>{
    fetchQuestions();
  },[]);


  

  const handleQuestionSubmit = async(e)=>{

    e.preventDefault();

    try{

      // BACKEND WORK
      await axios.post(
        "http://localhost:5000/api/questions",
        {
          name,
          question
        }
      );

      setName("");
      setQuestion("");

      fetchQuestions();

    }catch(err){
      console.error(err);
    }

  };


  const openQuestion = async(q)=>{

    setSelectedQuestion(q);

    try{

      // BACKEND WORK
      const res = await axios.get(
        `http://localhost:5000/api/questions/${q.id}`
      );

      setAnswers(res.data.answers);

    }catch(err){
      console.error(err);
    }

  };


  const handleAnswerSubmit = async(e)=>{

    e.preventDefault();

    try{

      // BACKEND WORK
      await axios.post(
        "http://localhost:5000/api/answers",
        {
          question_id:selectedQuestion.id,
          name:answerName,
          answer:answer
        }
      );

      setAnswer("");
      setAnswerName("");

      openQuestion(selectedQuestion);

    }catch(err){
      console.error(err);
    }

  };


  return(

    <div className="community-page">

      <h1><span>Community</span> Q&A 🌱</h1>

      <p className="community-desc">
        Ask questions and help other farmers.
      </p>



      <form className="question-form" onSubmit={handleQuestionSubmit}>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Ask your farming question..."
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          required
        />

        <button type="submit">
          Post Question
        </button>

      </form>



      <div className="question-list">

        {questions.map((q)=>(

          <div
            className="question-card"
            key={q.id}
            onClick={()=>openQuestion(q)}
          >

            <h3>{q.question}</h3>

            <p className="author">
              asked by {q.name}
            </p>

            <p>
              {q.answers_count || 0} answers
            </p>

          </div>

        ))}

      </div>



      {selectedQuestion && (

        <div className="answers-section">

          <h2>{selectedQuestion.question}</h2>

          <p className="author">
            asked by {selectedQuestion.name}
          </p>


          {answers.map((ans,index)=>(

            <div className="answer-card" key={index}>

              <p>{ans.answer}</p>

              <span className="author">
                — {ans.name}
              </span>

            </div>

          ))}



          <form
            className="answer-form"
            onSubmit={handleAnswerSubmit}
          >

            <input
              type="text"
              placeholder="Your name"
              value={answerName}
              onChange={(e)=>setAnswerName(e.target.value)}
              required
            />

            <textarea
              placeholder="Write your answer..."
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              required
            />

            <button type="submit">
              Submit Answer
            </button>

          </form>

        </div>

      )}

    </div>

  );
}

export default Community;
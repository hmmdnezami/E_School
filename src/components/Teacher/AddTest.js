import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class AddTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      newQuestion: {
        questionText: '',
        options: ['', '', ''],
        correctAnswer: ''
      }
    };
  }

  handleChangeQuestionText = (event) => {
    this.setState({
      newQuestion: {
        ...this.state.newQuestion,
        questionText: event.target.value
      }
    });
  }

  handleChangeOption = (event, index) => {
    const options = [...this.state.newQuestion.options];
    options[index] = event.target.value;

    this.setState({
      newQuestion: {
        ...this.state.newQuestion,
        options
      }
    });
  }

  handleChangeCorrectAnswer = (event) => {
    this.setState({
      newQuestion: {
        ...this.state.newQuestion,
        correctAnswer: event.target.value
      }
    });
  }
  buttonClicked = () => {
    console.log(this.state.questions)
  }

  handleAddQuestion = () => {
    const { questions, newQuestion } = this.state;

    // Validate the new question
    if (
      newQuestion.questionText.trim() === '' ||
      newQuestion.options.some(option => option.trim() === '') ||
      newQuestion.correctAnswer.trim() === ''
    ) {
      alert('Please fill in all the fields');
      return;
    }

    // Add the new question to the list of questions
    this.setState({
      questions: [...questions, newQuestion],
      newQuestion: { 
        questionText: '',
        options: ['', '', ''],
        correctAnswer: ''
      }
    });
  }

  render() {
    const { questions, newQuestion } = this.state;

    return (
      <Container>
      <div>
        <h2>Add questions </h2>

        <div>
          <label>Question:</label>
          <input
            type="text"
            value={newQuestion.questionText}
            onChange={this.handleChangeQuestionText}
            style={ { margin : '5px'}}
          />
        </div>

        <div>
          <label>Options:</label>
          {newQuestion.options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(event) => this.handleChangeOption(event, index)}
              style={ { margin : '5px'}}
            />
          ))}
        </div>

        <div>
          <label>Correct Answer:</label>
          <input
            type="text"
            value={newQuestion.correctAnswer}
            onChange={this.handleChangeCorrectAnswer}
            style={ { margin : '5px'}}
          />
        </div>

        <button onClick={this.handleAddQuestion}>Add Question</button>
            <p></p>
        <h3>Questions:</h3>
        <Container>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.questionText}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}</Container>
        {/* <button onClick = {this.buttonClicked} >Submit</button> */}
      </div>
      </Container>
    );
  }
}

export default AddTest;




// import React, { Component } from 'react';
// import { Button, Container } from 'react-bootstrap';

// class AddTest extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       questions: [],
//       correctAnswers: [],
//     };
//   }

//   addQuestion = () => {
//     this.setState((prevState) => ({
//       questions: [...prevState.questions, { question: '', options: [] }],
//       correctAnswers: [...prevState.correctAnswers, ''],
//     }));
//   };
//   addOption = (questionIndex) => {
//     this.setState((prevState) => {
//       const updatedQuestions = [...prevState.questions];
//       updatedQuestions[questionIndex].options.push('');
//       return { questions: updatedQuestions };
//     });
//   };
//   updateQuestion = (index, field, value) => {
//     this.setState((prevState) => {
//       const updatedQuestions = [...prevState.questions];
//       updatedQuestions[index][field] = value;
//       return { questions: updatedQuestions };
//     });
//   };

//   updateOption = (questionIndex, optionIndex, value) => {
//     this.setState((prevState) => {
//       const updatedQuestions = [...prevState.questions];
//       updatedQuestions[questionIndex].options[optionIndex] = value;
//       return { questions: updatedQuestions };
//     });
//   };

//   updateCorrectAnswer = (questionIndex, value) => {
//     this.setState((prevState) => {
//       const updatedCorrectAnswers = [...prevState.correctAnswers];
//       updatedCorrectAnswers[questionIndex] = value;
//       return { correctAnswers: updatedCorrectAnswers };
//     });
//   };

//   handleQuestionChange = (index, event) => {
//     this.updateQuestion(index, 'question', event.target.value);
//   };

//   handleOptionChange = (questionIndex, optionIndex, event) => {
//     this.updateOption(questionIndex, optionIndex, event.target.value);
//   };

//   handleCorrectAnswerChange = (questionIndex, event) => {
//     this.updateCorrectAnswer(questionIndex, event.target.value);
//   };

//   handleSubmit = (e) => {
//     // Handle submission logic, e.g., send questions and correct answers to the backend
//     console.log(e);
//     // console.log(this.state.questions);
//     // console.log(this.state.correctAnswers);
//   };

//   renderQuestions() {
//     return this.state.questions.map((question, index) => (
//       <div key={index}>
//         <input
//           type="text"
//           placeholder="Enter question"
//           value={question.question}
//           onChange={(event) => this.handleQuestionChange(index, event)}
//         />
//         <br />
//         {this.renderOptions(question.options, index)}
//         <br/>
//         <Button variant="outline-primary" size ="sm" onClick={() => this.addOption(index)}>Add Option</Button>
//         <br />
//         <select value={this.state.correctAnswers[index]} onChange={(event) => this.handleCorrectAnswerChange(index, event)}>
//           <option value="">Select correct answer</option>
//           {this.renderAnswerOptions(question.options)}
          
//         </select>
//         <br />
//         <p></p>
//       </div>
//     ));
//   }

//   renderOptions(options, questionIndex) {
//     return options.map((option, optionIndex) => (
//       <div key={optionIndex}>
//         <input
//           type="text"
//           placeholder="Enter option"
//           value={option}
//           onChange={(event) => this.handleOptionChange(questionIndex, optionIndex, event)}
//         />
//       </div>
//     ));
//   }

//   renderAnswerOptions(options) {
//     return options.map((option, index) => (
//       <option key={index} value={index}>{option}</option>
//     ));
//   }

//   render() {
//     return (
//       <Container style = {{ margin : '50px'}}>
//       <div>
//         <h2>Test Component</h2>
//         {this.renderQuestions()}
//         <Button onClick={this.addQuestion} style = {{ margin : '5px'}}>Add Question</Button>
//         <Button onClick={this.handleSubmit}>Submit</Button>
//       </div>
//       </Container>
//     );
//   }
// }

// export default AddTest;















/*import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class AddTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  addQuestion = () => {
    this.setState((prevState) => ({
      questions: [...prevState.questions, { question: '', options: [] }],
    }));
  };

  updateQuestion = (index, field, value) => {
    this.setState((prevState) => {
      const updatedQuestions = [...prevState.questions];
      updatedQuestions[index][field] = value;
      return { questions: updatedQuestions };
    });
  };

  addOption = (questionIndex) => {
    this.setState((prevState) => {
      const updatedQuestions = [...prevState.questions];
      updatedQuestions[questionIndex].options.push('');
      return { questions: updatedQuestions };
    });
  };

  updateOption = (questionIndex, optionIndex, value) => {
    this.setState((prevState) => {
      const updatedQuestions = [...prevState.questions];
      updatedQuestions[questionIndex].options[optionIndex] = value;
      return { questions: updatedQuestions };
    });
  };

  handleQuestionChange = (index, event) => {
    this.updateQuestion(index, 'question', event.target.value);
  };

  handleOptionChange = (questionIndex, optionIndex, event) => {
    this.updateOption(questionIndex, optionIndex, event.target.value);
  };

  handleSubmit = () => {
    // Handle submission logic, e.g., send questions to the backend
    console.log(this.state.questions);
  };

  renderQuestions() {
    return this.state.questions.map((question, index) => (
      <div key={index}>
        <input
          type="text"
          placeholder="Enter question"
          value={question.question}
          onChange={(event) => this.handleQuestionChange(index, event)}
        />
        <br />
        {this.renderOptions(question.options, index)}
        <button onClick={() => this.addOption(index)}>Add Option</button>
      </div>
    ));
  }

  renderOptions(options, questionIndex) {
    return options.map((option, optionIndex) => (
      <div key={optionIndex}>
        <input
          type="text"
          placeholder="Enter option"
          value={option}
          onChange={(event) => this.handleOptionChange(questionIndex, optionIndex, event)}
        />
      </div>
    ));
  }

  render() {
    return (
      <Container style = {{ margin : '50px'}}>
      <div>
        <h2>Add Test</h2>
        {this.renderQuestions()}
        <p></p>
        <button onClick={this.addQuestion}>Add Question</button>
        <p></p>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      </Container>
    );
  }
}

export default AddTest; */




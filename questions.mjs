const questions = [
      {
        question: 'What does DOM stand for?',
        options: ['Document Object Model', 'Data Object Method', 'Dynamic Output Manager', 'Document Operation Module'],
        correctIndex: 0,
        explanation: 'DOM stands for Document Object Model.'
      },
      {
        question: 'What can JavaScript do with the DOM?',
        options: ['Update text on a webpage', 'Install Node packages automatically', 'Create a database server', 'Turn CSS into HTML'],
        correctIndex: 0,
        explanation: 'JavaScript can change the content of HTML elements on the page.'
      },
      {
        question: 'Which event responds to a user pressing a button?',
        options: ['load', 'submit', 'click', 'change'],
        correctIndex: 2,
        explanation: 'The click event can respond when a user presses a button.'
      },
      {
        question: 'Which method can register an event handler?',
        options: ['appendChild()', 'addEventListener()', 'querySelector()', 'getAttribute()'],
        correctIndex: 1,
        explanation: 'addEventListener() lets an element listen for a specified event.'
      },
      {
        question: 'Which property can update an element\'s displayed text?',
        options: ['textContent', 'className', 'style', 'id'],
        correctIndex: 0,
        explanation: 'textContent reads or changes the text inside an element.'
      }
    ];

export default { questions };
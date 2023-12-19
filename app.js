const quiz = [
  {
    question: 'Q1.読売ジャイアンツが所属しているリーグは次の内どれ？',
    answers: [
      'ア・リーグ',
      'パ・リーグ', 
      'セ・リーグ', 
      'ナ・リーグ'
    ],
    correct: 'セ・リーグ'
  }, {
    question: 'Q2.セ・パ交流戦2023での読売ジャイアンツの順位は次の内どれ？',
    answers: [
      '1位',
      '2位', 
      '3位', 
      '4位'
    ],
    correct: '3位'
  }, {
    question: 'Q3.読売ジャイアンツが最後にリーグ優勝した年は次の内どれ？',
    answers: [
      '2018年',
      '2019年', 
      '2020年', 
      '2021年'
    ],
    correct: '2020年'
  }
];
const quizeLength = quiz.length;
let quizeIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizeIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizeIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizeIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

quizeIndex++;

  if(quizeIndex < quizeLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizeLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

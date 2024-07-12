const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// 7.1
const sum = exams.reduce((accumulator, exam) => (accumulator += exam.score), 0);

console.log('Suma de notas', sum);

// 7.2
const passedExam = exams.reduce((accumulator, exam) => {
  if (exam.score >= 5) {
    accumulator += exam.score;
  }
  return accumulator;
}, 0);

console.log('Suma de aprobados', passedExam);

// 7.3
const classAverage = exams.reduce(
  (accumulator, exam) => (accumulator += exam.score / exams.length),
  0
);
console.log('Nota media', classAverage);

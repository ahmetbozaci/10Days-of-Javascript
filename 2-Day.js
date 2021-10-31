//! Conditional Statements: If-Else
function getGrade(score) {
  let grade;
  if (25 < score && score <= 30) {
    grade = 'A';
  } else if (20 < score && score <= 25) {
    grade = 'B';
  } else if (15 < score && score <= 20) {
    grade = 'C';
  } else if (10 < score && score <= 15) {
    grade = 'D';
  } else if (5 < score && score <= 10) {
    grade = 'E';
  } else {
    grade = 'F';
  }

  return grade;
}

//! Conditional Statements: Switch
function getLetter(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let letter;
  if (vowels.includes(s[0])) {
    letter = s[0].toUpperCase();
  }
  return letter;
}

//! Loops
function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'u', 'i', 'o'];
  let word = '';
  let second = '';
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      word += s[i];
    } else {
      second += s[i];
    }
  }
  let newWord = word + second;
  for (let i = 0; i < s.length; i++) {
    console.log(newWord[i]);
  }
}

const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

function countWords(para, w1, w2) {
  let word1Length = 0;
  let word2Length = 0;

  word1Length = para.split(w1).length;
  word2Length = para.split(w2).length;

  //   console.log(word1Length, word2Length);

  if (word1Length > word2Length) {
    console.log(`The word ${w1} more frequently occurred than ${w2}`);
  } else if (word1Length < word2Length) {
    console.log(`The word ${w2} more frequently occurred than ${w1}`);
  } else {
    console.log("Occurence of both words is same");
  }
}

countWords(paragraph, "love", "you");

// function count(str, find) {
//   return str.split(find).length - 1;
// }

// count("Good", "o"); // 2

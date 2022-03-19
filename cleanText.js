const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
  return sentence.replace(/[^A-Za-z.? ]/g, "");
}

let cleanedText = cleanText(sentence);
console.log(cleanedText);
//I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?

function numberOfWords(sentenceCount) {
  sentenceCount = cleanedText.split(" ").filter((w) => w.length > 1).length;
  return sentenceCount;
}

console.log(numberOfWords(cleanedText)); //31

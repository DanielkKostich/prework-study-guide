var Topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = Topics[Math.floor(Math.random() * Topics.length)];


function ListTopics() {
 for (var x = 0; x < Topics.length; x++) {
    console.log(Topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
    console.log("Lets,s study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("Let,s study CSS!");
} else if (randomTopic === 'Git') {
    console.log("Let,s study Git!");
} else if (randomTopic === 'Javascript') {
    console.log("Let,s study Javascript!");
} else {
    console.log("Please try again!")
 }
}
console.log('Here are the topics we learned through Prework:');
ListTopics();
console.log('Which topic should we study first?');
selectTopic()
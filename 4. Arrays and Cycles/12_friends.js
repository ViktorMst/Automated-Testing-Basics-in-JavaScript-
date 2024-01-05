//Given an array of the names of your friends, add the words hello to each element of the array

const myFriends = ["Pavel", "Roman", "Anton", "Eduard", "Richard"];
const newFriends = myFriends.map((el) => "Hello " + el);

console.log(newFriends);

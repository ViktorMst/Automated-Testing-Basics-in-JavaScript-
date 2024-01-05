// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)//

function mylogin(myName) {
  const knownName = "Viktor";
  if (myName === knownName) {
    console.log("Hello, " + myName);
  } else {
    console.log("There is no such name");
  }
}

const myName = "Viktor";

mylogin(myName);

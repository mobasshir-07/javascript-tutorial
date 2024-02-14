const name = "Mobasshir";
const repoCount = 10;

console.log(name + repoCount + " value");
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

console.log(name.length);

const gameName = new String('temple-run');
console.log(gameName[0]);
console.log(gameName.__proto__);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const emailID = "    perwsznho&gmail.com     " 
console.log(emailID.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hit'));

const fullName = "MR-MUKESH-KRISHNA-RADHA-DEVADATTA-CHARAN";
console.log(fullName.split('-'));
console.log(fullName.split('-').join(" "));
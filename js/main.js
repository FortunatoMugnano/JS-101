console.log("good job Fortunato, this Javascript file works fine");

let name = "Fortunato";

console.log(name);

console.log("My name is", name);

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionElOne = document.querySelector(".article__section");

console.log("The result of SectionEl is", sectionElOne);

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer");

console.log("footeeEl is",footerEl);

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText");
console.log("What is smallTextEl", smallTextEl);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll(".article__section");
console.log(sectionEl);



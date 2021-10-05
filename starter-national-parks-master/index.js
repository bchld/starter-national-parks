console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

const elem01 = document.querySelector(".value");
console.log(elem01);

const elem02 = document.querySelector("button");
console.log(elem02);

const elem03 = document.querySelector(".area-display");
console.log(elem03);

const elem04 = document.querySelector(".stat div");
console.log(elem04);

const elem05 = document.querySelector(".hello");
console.log(elem05);

const elem06= document.querySelectorAll("button");
console.log(elem06);

//find all divs containing ratings
const ratings = document.querySelectorAll(".rating-display .value");

//iterate over entire list
for (let element of ratings.values()) {
    console.log(element);
}

//find all divs containing areas
const areas = document.querySelectorAll(".area-display .value")
for(let i = 0; i < areas.length; i++){
    const element = areas[i];
    console.log(element);
}
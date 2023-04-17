let div1 = document.createElement("div");
div1.setAttribute("class", "class1");
div1.innerText = "960px X 360px";

let div2 = document.createElement("div");
div2.setAttribute("class", "class2");
div2.innerText = "290px X 180px";
let first_h3 = document.createElement("h3");
first_h3.innerText = "indonectetus facilis";
let first_p = document.createElement("p");
first_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let first_link = document.createElement("a");
first_link.setAttribute("href" , "#");
first_link.innerText = "Read More >>"


let div3 = document.createElement("div");
div3.setAttribute("class", "class3");
div3.innerText = "290px X 180px";
let second_h3 = document.createElement("h3");
second_h3.innerText = "indonectetus facilis";
let second_p = document.createElement("p");
second_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let second_link = document.createElement("a");
second_link.setAttribute("href" , "#");
second_link.innerText = "Read More >>"



let div4 = document.createElement("div");
div4.setAttribute("class", "class3");
div4.innerText = "290px X 180px";
let third_h3 = document.createElement("h3");
third_h3.innerText = "indonectetus facilis";
let third_p = document.createElement("p");
third_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let third_link = document.createElement("a");
third_link.setAttribute("href" , "#");
third_link.innerText = "Read More >>"


let wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper")
let parentDiv1 = document.createElement("div");
parentDiv1.setAttribute("class", "parentDiv1")
let parentDiv2 = document.createElement("div");
parentDiv2.setAttribute("class", "parentDiv2")
let parentDiv3 = document.createElement("div");
parentDiv3.setAttribute("class", "parentDiv3")






document.body.append(div1);
parentDiv1.append(div2)
parentDiv1.append(first_h3);
parentDiv1.append(first_p);
parentDiv1.append(first_link);
parentDiv2.append(div3)
parentDiv2.append(second_h3);
parentDiv2.append(second_p);
parentDiv2.append(second_link);
parentDiv3.append(div4)
parentDiv3.append(third_h3);
parentDiv3.append(third_p);
parentDiv3.append(third_link);
wrapper.append(parentDiv1, parentDiv2, parentDiv3);



// parentDiv2.append(div3)
// parentDiv2.append(h3);
// parentDiv2.append(p);


document.body.append(wrapper)


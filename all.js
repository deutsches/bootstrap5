const toggleMenuBtn = document.querySelector("#toggle-btn");
const body = document.querySelector("body");

toggleMenuBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  body.classList.toggle("sidebar-toggle");
});

const caretDown = document.querySelector(".bi-caret-down");

const orderManageBtn = document.querySelector("#orderManage");
orderManageBtn.addEventListener("click", (evt) => {
  orderManageBtn.setAttribute("disabled", true);
  evt.preventDefault();
  caretDown.classList.toggle("rotated");
  orderManageBtn.setAttribute("disabled", false);
  // if(caretDown.attributes.class.value.indexof(rotated)<0){
  //   caretDown.classList.toggle('rotated');
  // }
});

const income = document.querySelector(".income").textContent;
const expenditure = document.querySelector(".expenditure").textContent;
const revenue = document.querySelector(".revenue");
revenue.textContent = parseInt(income) - parseInt(expenditure);
if ( parseInt(revenue.textContent) < 0) {
  revenue.classList.toggle("text-danger");
} else {
  revenue.classList.toggle("text-success");
}

// C3.js
let chart = c3.generate({
  bindto: "#yoy", // HTML 元素綁定
  data: {
    columns: [
      ["總收入", 30, 200, 100, 400, 150, 250],
      
    ],
  },
});
let mom = c3.generate({
  bindto: "#mom", // HTML 元素綁定
  data: {
    columns: [
      ["支出", 30, 200, 100, 400, 150, 250,0,0,0,0,0,0],
      ["收入", 130, 100, 140, 200, 150, 50,0,0,0,0,0,0],
    ],
    type: "bar",
  },
  bar: {
    width: {
      ratio: 0.5, // this makes bar width 50% of length between ticks
    },
    // or
    //width: 100 // this makes bar width 100px
  },
});


let bike = c3.generate({
  bindto: "#bike", // HTML 元素綁定
  data: {
    columns: [
      ["淑女車", 30, 50, 100, 200, 150, 250,0,0,0,0,0,0],
      ["單車", 130, 100, 140, 200, 150, 50,0,0,0,0,0,0],
      ["電動車", 130, 100, 140, 200, 150, 50,0,0,0,0,0,0],
      ["協力車", 130, 100, 140, 200, 150, 50,0,0,0,0,0,0],
    ],
    type: "bar",
  },
  bar: {
    width: {
      ratio: 0.5, // this makes bar width 50% of length between ticks
    },
    // or
    //width: 100 // this makes bar width 100px
  },
});

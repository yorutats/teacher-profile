fetch("data/education.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("education-container");

    data.forEach((item) => {
      const html = `
        <article class="resume-timeline-item position-relative pb-5">
          <div class="resume-timeline-item-header mb-2">
            <div class="d-flex flex-column flex-md-row">
              <h3 class="resume-position-title font-weight-bold mb-1">${item.university}</h3>
            </div>
            <div class="resume-position-time">${item.department}</div>
            <div class="resume-timeline-item-desc">${item.degree}</div>
          </div>
        </article>
      `;
      container.innerHTML += html;
    });
  });

function loadFAQ(mode, button) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  fetch("./data/faq.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("faq-container");
      container.innerHTML = "";
      const selectedFaqs = data[mode];

      selectedFaqs.forEach((item, index) => {
        const faqItem = document.createElement("div");
        faqItem.className = "accordion-item";
        faqItem.innerHTML = `
        <div class="accordion-link" onclick="toggleAnswer(this)">
          <span>${item.question}</span>
          <span>+</span>
        </div>
        <div class="answer">
<p>${item.answer.replace(/\n/g, "<br>")}</p>
        </div>
      `;

        container.appendChild(faqItem);
      });
    });
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isOpen = answer.classList.contains("open");

  document
    .querySelectorAll(".answer")
    .forEach((ans) => ans.classList.remove("open"));
  document
    .querySelectorAll(".accordion-link span:last-child")
    .forEach((icon) => (icon.textContent = "+"));

  if (!isOpen) {
    answer.classList.add("open");
    element.querySelector("span:last-child").textContent = "−";
  }
}

// 這段程式碼是用來實現 FAQ 問答的展開與收合功能
// function toggleAnswer(element) {
//   const answer = element.nextElementSibling;
//   const isOpen = answer.classList.contains("open");

//   // 不再關閉所有，只針對目前這個項目
//   if (isOpen) {
//     answer.classList.remove("open");
//     element.querySelector("span:last-child").textContent = "+";
//   } else {
//     answer.classList.add("open");
//     element.querySelector("span:last-child").textContent = "−";

//     // 滾動到問題位置（保留上方空間）
//     const topPos = element.getBoundingClientRect().top + window.pageYOffset - 80;
//     setTimeout(() => {
//       window.scrollTo({
//         top: topPos,
//         behavior: "smooth"
//       });
//     }, 100);
//   }
// }

window.onload = () => {
  const defaultBtn = document.querySelector(".tab-btn.active");
  loadFAQ("regular", defaultBtn);
};

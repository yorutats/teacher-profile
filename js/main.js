fetch("./data/faq.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("faq-container");

    data.forEach((item, index) => {
      const faqItem = document.createElement("div");
      faqItem.className = "accordion-item";

      faqItem.innerHTML = `

        <div class="accordion-item" id="question${index}">
            <a class="accordion-link" href="#question${index}">
                <div class="flex">
                    <h3>${item.question}</h3>
                </div>
                <i class="icon ion-md-arrow-forward"></i>
                <i class="icon ion-md-arrow-down"></i>
            </a>
            <div class="answer">
                <p>${item.answer}
                </p>
                </div>
                <hr>
         </div>

      `;

      container.appendChild(faqItem);
    });
  });

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

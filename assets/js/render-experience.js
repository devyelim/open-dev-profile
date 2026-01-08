function renderExperience(data) {
  const el = document.getElementById("experience-list");
  el.innerHTML = "";

  data.experience.forEach(item => {
    el.innerHTML += `
      <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-dot"></div>
          <h5>${item.role}</h5>
          <span class="company">
            ${item.company} • ${item.period}
          </span>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });
}

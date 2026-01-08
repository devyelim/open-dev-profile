function renderSkills(data) {
  const skillsList = document.getElementById("skills-list");

  skillsList.innerHTML = "";

  data.skills.forEach(skill => {
    skillsList.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="skill-card">
          <h6>${skill.name}</h6>
          <span class="level">${skill.level}</span>
        </div>
      </div>
    `;
  });
}

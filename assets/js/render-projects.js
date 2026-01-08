function renderProjects(data) {
  const el = document.getElementById("projects-list");
  el.innerHTML = "";

  data.projects.forEach(project => {
    el.innerHTML += `
      <div class="col-12 col-md-4 reveal reveal-delay-1">
        <div class="project-card">
          
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            
            ${
              project.featured
                ? `<span class="badge featured-badge">Destaque</span>`
                : ""
            }
          </div>

          <div class="project-body">
            <h5>${project.title}</h5>
            <p>${project.description}</p>

            <div class="project-tech">
              ${project.tech.map(t => `<span>${t}</span>`).join("")}
            </div>

            <div class="project-footer no-print">
              <span class="status">${project.status}</span>
              <a href="${project.repo}" target="_blank">Ver código →</a>
            </div>
          </div>

        </div>
      </div>
    `;
  });
}

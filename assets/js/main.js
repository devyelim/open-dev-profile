document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadProfileData();

  initTheme(data.theme);

  renderProfile(data);
  renderProjects(data);
  renderExperience(data);
  renderSkills(data);
  renderContacts(data);
  initScrollReveal();
});


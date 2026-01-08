function renderContacts(data) {
  const el = document.getElementById("contact-list");
  const contacts = data.contacts;

  el.innerHTML = `
    <a href="${contacts.github}" target="_blank" class="contact-card">
      <span class="icon"><i class="bi bi-github"></i></span>
      <div>
        <strong>GitHub</strong>
        <small>${contacts.github.replace("https://", "")}</small>
      </div>
    </a>

    <a href="${contacts.linkedin}" target="_blank" class="contact-card">
      <span class="icon"><i class="bi bi-linkedin"></i></span>
      <div>
        <strong>LinkedIn</strong>
        <small>${contacts.linkedin.replace("https://", "")}</small>
      </div>
    </a>

    <a href="mailto:${contacts.email}" class="contact-card">
      <span class="icon"><i class="bi bi-envelope"></i></span>
      <div>
        <strong>Email</strong>
        <small>${contacts.email}</small>
      </div>
    </a>
  `;
}

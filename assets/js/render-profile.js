function renderProfile(data) {
  const el = document.getElementById("profile");

  el.innerHTML = `
    <div class="profile-card">
     

      <div class="profile-header">
        <div class="profile-avatar-container">
          
          <div class="profile-avatar">
            <img id="profile-photo" alt="Foto do perfil" />
            <span id="profile-initial" hidden>E</span>
          </div>
        
          <div class="profile-info">
            <h1>${data.profile.name}</h1>
            <h2>${data.profile.title}</h2>
            <span class="location">${data.profile.location}</span>
          </div>
        </div>
        
      </div>

      <p class="profile-about">
        ${data.profile.about}
      </p>
  
      ${
        data.availability.openToWork
          ? `<div class="profile-status">
              <span class="status-dot"></span>
              ${data.availability.message}
            </div>`
          : ""
      }
      
    </div>
  `;

  const photo = document.getElementById("profile-photo");
  const initial = document.getElementById("profile-initial");

  if (data.profile.photo) {
    photo.src = data.profile.photo;
    photo.style.display = "block";
    initial.hidden = true;
  } else {
    photo.style.display = "none";
    initial.textContent = data.profile.name.charAt(0);
    initial.hidden = false;
  }

}

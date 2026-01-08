async function loadProfileData() {
  const response = await fetch("data/profile.json");

  if (!response.ok) {
    throw new Error("Erro ao carregar profile.json");
  }

  return response.json();
}
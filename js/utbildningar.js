fetch("../data/utbildning.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("utbildningar");

    data.utbildningar.forEach(utbildning => {
      const article = document.createElement("article");
      article.classList.add("utbildning-card");

      article.innerHTML = `
        <img src="${utbildning.bild}" alt="${utbildning.program}">
        <h2>${utbildning.program}</h2>
        <p><strong>Skola:</strong> ${utbildning.skola}</p>
        <p><Strong>Inriktning:</strong>${utbildning.inriktning}</p>
        <p><strong>Tid:</strong> ${utbildning.start} – ${utbildning.slut}</p>
        <p>${utbildning.beskrivning}</p>
      `;

      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error("Kunde inte läsa JSON-filen:", error);
  });
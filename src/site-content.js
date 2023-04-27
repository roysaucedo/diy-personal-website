fetch("/src/site-content.json")
  .then((response) => response.json())
  .then((data) => {
    const imageElement = document.getElementById("profile-img");
    const pageImage = data.img;
    imageElement.src = pageImage;

    const titleElement = document.getElementById("title");
    const pageTitle = data.title;
    titleElement.textContent = pageTitle;

    const summaryElement = document.getElementById("summary");
    const pageSummary = data.summary;
    summaryElement.textContent = pageSummary;

    const container = document.getElementById("linksContainer");
    data.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      linkElement.classList.add(
        "w-full",
        "p-4",
        "my-4",
        "text-white",
        "bg-black",
        "rounded-lg",
        "shadow-lg",
        "block",
        "hover:scale-105",
        "ease-in-out",
        "duration-300"
      );
      container.appendChild(linkElement);
    });

    const fromColor = data.bgFromColor;
    const toColor = data.bgToColor;
    const bgFromColorClass = `from-${fromColor}-500`;
    const bgToColorClass = `to-${toColor}-500`;
    const background = document.getElementById("background");


    // Apply the classes to the relevant elements
    background.classList.add(bgFromColorClass);
    background.classList.add(bgToColorClass);
  });

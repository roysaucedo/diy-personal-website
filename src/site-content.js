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

    const linksContainer = document.getElementById("linksContainer");
    data.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      linkElement.classList.add(
        "w-full",
        "p-4",
        "my-4",
        "border-2",
        "rounded-lg",
        "shadow-lg",
        "block",
        "hover:scale-105",
        "ease-in-out",
        "duration-300"
      );
      linksContainer.appendChild(linkElement);
    });

    const imgContainer = document.getElementById("cardContainer");
    data.cards.forEach((card) => {

      // CREATE AND STYLE CARD
      const cardElement = document.createElement("div");
      cardElement.classList.add(
        "bg-green-100",
        "p-10"
      );
      imgContainer.appendChild(cardElement);

      // CREATE AND STYLE IMAGE
      const imgElement = document.createElement("img");
      imgElement.src = card.url;
      imgElement.classList.add(
        "w-full",
        "max-w-xs",
        "p-0",
        "my-4",
        "border-2",
        "rounded-lg",
        "shadow-lg",
        "block",
        "hover:scale-105",
        "ease-in-out",
        "duration-300"
      );
      cardElement.appendChild(imgElement);

      // CREATE AND STYLE TEXT-DIV
      const textDivElement = document.createElement("div");
      textDivElement.classList.add(
        "bg-green-100",
        "p-10"
      );
      cardElement.appendChild(textDivElement);

      // CREATE AND STYLE TITLE
      const titleElement = document.createElement("h2");
      titleElement.textContent = card.title;
      titleElement.classList.add(
        "text-xl",
        "font-bold"
      );
      textDivElement.appendChild(titleElement);

      // CREATE AND STYLE TEXT
      const textElement = document.createElement("p");
      textElement.textContent = card.text;
      textElement.classList.add(
        "w-full",
        "max-w-xs"
      );
      textDivElement.appendChild(textElement);
    });

    const colorScheme = data.colorScheme;
    const colorSchemeClass = `${colorScheme}-theme`;
    const background = document.getElementById("background");


    // Apply the classes to the relevant elements
    background.classList.add(colorSchemeClass);
  });

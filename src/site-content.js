fetch('/src/site-content.json')
  .then(response => response.json())
  .then(data => {
    const imageElement = document.getElementById('profile-img');
    const pageImage = data.img;
    imageElement.src = pageImage;

    const titleElement = document.getElementById('title');
    const pageTitle = data.title;
    titleElement.textContent = pageTitle;

    const summaryElement = document.getElementById('summary');
    const pageSummary = data.summary;
    summaryElement.textContent = pageSummary;

    const container = document.getElementById("linksContainer");
    data.links.forEach((link) => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        linkElement.classList.add("w-full", "p-4", "my-4", "bg-blue-500", "text-white", "rounded-lg", "shadow-lg", "block");
        container.appendChild(linkElement);
    });
});


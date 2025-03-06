document.addEventListener('DOMContentLoaded', () => {
    // Helper function to check if an image exists by preloading it.
    function getIconUrl(url) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (img.naturalWidth > 0) {
            resolve(url);
          } else {
            resolve('/icons/git.svg');
          }
        };
        img.onerror = () => resolve('/icons/git.svg');
      });
    }
  
    // Helper function to create a project card element.
    function createCard(project, iconUrl) {
      const card = document.createElement('div');
      card.className = 'bg-white rounded shadow p-4';
  
      // Title and icon container
      const titleContainer = document.createElement('div');
      titleContainer.className = 'flex items-center space-x-2 mb-2';
  
      // Icon element using the checked URL
      const icon = document.createElement('img');
      icon.src = iconUrl;
      icon.alt = `${project.title} icon`;
      icon.className = 'w-6 h-6';
      titleContainer.appendChild(icon);
  
      // Project title element
      const title = document.createElement('h2');
      title.textContent = project.title;
      title.className = 'text-xl font-semibold';
      titleContainer.appendChild(title);
  
      card.appendChild(titleContainer);
  
      // Project description
      const description = document.createElement('p');
      description.textContent = project.description;
      description.className = 'text-gray-600 mb-2';
      card.appendChild(description);
  
      // Links container
      const linksContainer = document.createElement('div');
      linksContainer.className = 'flex space-x-4';
  
      // GitHub link using a local GitHub icon
      const githubLink = document.createElement('a');
      githubLink.href = project.github;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      const githubIcon = document.createElement('img');
      githubIcon.src = '/icons/github.svg';
      githubIcon.alt = 'GitHub';
      githubIcon.className = 'w-6 h-6';
      githubLink.appendChild(githubIcon);
      linksContainer.appendChild(githubLink);
  
      // External project link using a local external link icon
      const externalLink = document.createElement('a');
      externalLink.href = project.url;
      externalLink.target = '_blank';
      externalLink.rel = 'noopener noreferrer';
      const externalIcon = document.createElement('img');
      externalIcon.src = '/icons/external-link.svg';
      externalIcon.alt = 'Visit Project';
      externalIcon.className = 'w-6 h-6';
      externalLink.appendChild(externalIcon);
      linksContainer.appendChild(externalLink);
  
      card.appendChild(linksContainer);
      return card;
    }
  
    // Fetch projects data and create cards.
    fetch('/content.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('projects-container');
  
        data.forEach(project => {
          // Determine repository name from GitHub URL to build expected icon URL.
          const repoName = project.github.split('/').pop();
          const iconUrl = `/icons/${repoName}.png`;
  
          // Preload icon and then build the card with the correct icon URL.
          getIconUrl(iconUrl).then(finalIconUrl => {
            container.appendChild(createCard(project, finalIconUrl));
          });
        });
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  });
  
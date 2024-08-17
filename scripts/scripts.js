document.addEventListener('DOMContentLoaded', () => {
    const scriptsList = document.getElementById('scripts-list');
    const repoOwner = 'BaconStorage';
    const repoName = 'Scripts';
    const folderPath = 'Scripts';

    // GitHub API URL to fetch contents of the Scripts folder
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(file => {
                if (file.name.endsWith('.lua')) {
                    const listItem = document.createElement('li');
                    listItem.textContent = file.name;
                    listItem.addEventListener('click', () => {
                        fetch(file.download_url)
                            .then(response => response.text())
                            .then(scriptContent => {
                                alert(`Content of ${file.name}:\n\n${scriptContent}`);
                                // Here you can add functionality to display the script content in a more user-friendly way
                            });
                    });
                    scriptsList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Error fetching scripts:', error));
});

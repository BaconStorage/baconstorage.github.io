document.addEventListener('DOMContentLoaded', () => {
    const scriptsList = document.getElementById('scripts-list');

    // Simulate fetching Lua scripts from the server
    const luaScripts = ['script1.lua', 'script2.lua', 'script3.lua'];

    luaScripts.forEach(script => {
        const listItem = document.createElement('li');
        listItem.textContent = script;
        listItem.addEventListener('click', () => {
            alert(`Opening ${script}`);
            // Here you can add functionality to open or display the script content
        });
        scriptsList.appendChild(listItem);
    });
});

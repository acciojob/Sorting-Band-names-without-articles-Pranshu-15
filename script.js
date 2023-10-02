// Array of band names
        let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Guns N\' Roses'];

        // Regular expression to match articles at the beginning of a string
        const articleRegex = /^(a|an|the)\s/i;

        // Sort the band names lexicographically, excluding articles
        bandNames.sort((a, b) => {
            // Remove articles and trim leading/trailing spaces
            const nameA = a.replace(articleRegex, '').trim();
            const nameB = b.replace(articleRegex, '').trim();

            // Compare the modified band names for sorting
            return nameA.localeCompare(nameB);
        });

        // Get the <ul> element by its id
        const ulElement = document.getElementById('band');

        // Loop through the sorted band names and create <li> elements
        bandNames.forEach((bandName) => {
            const liElement = document.createElement('li');
            liElement.textContent = bandName;
            ulElement.appendChild(liElement);
        });
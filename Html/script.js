document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const addButton = document.getElementById('addButton');
    const destinationList = document.getElementById('destinationList');

    // Sample destinations
    const destinations = ['Paris', 'New York', 'Tokyo'];

    // Function to display destinations
    const displayDestinations = (list) => {
        destinationList.innerHTML = '';
        list.forEach(dest => {
            const li = document.createElement('li');
            li.textContent = dest;
            destinationList.appendChild(li);
        });
    };

    // Display initial destinations
    displayDestinations(destinations);

    // Add new destination
    addButton.addEventListener('click', () => {
        const newDest = searchInput.value.trim();
        if (newDest && !destinations.includes(newDest)) {
            destinations.push(newDest);
            displayDestinations(destinations);
            searchInput.value = '';
        } else {
            alert('Please enter a valid and unique destination');
        }
    });

    // Search filter
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredDestinations = destinations.filter(dest =>
            dest.toLowerCase().includes(query)
        );
        displayDestinations(filteredDestinations);
    });
});
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('searchContainer').style.display = 'block';
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const suggestions = getTravelSuggestions(searchQuery);
    displaySuggestions(suggestions);
});

function getTravelSuggestions(query) {
    // Simple suggestions for demonstration
    const allSuggestions = [
        'Paris, France',
        'New York, USA',
        'Tokyo, Japan',
        'Sydney, Australia',
        'Cape Town, South Africa'
    ];

    return allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query)
    );
}

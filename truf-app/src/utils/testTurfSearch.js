const { searchTurfs, filterByCity, filterBySport, sortTurfs } = require('./turfSearch.js');
const turfsData = require('../data/turfs.json');

function testSearch() {
    console.log('--- Testing Search ---');
    const query = 'Elite';
    const results = searchTurfs(turfsData, query);
    console.log(`Searching for "${query}": Found ${results.length} results.`);
    if (results.length > 0) {
        console.log(`First result: ${results[0].turfName} (${results[0].city})`);
    }
}

function testFilter() {
    console.log('\n--- Testing Filter by City ---');
    const city = 'Mumbai';
    const results = filterByCity(turfsData, city);
    console.log(`Filtering for "${city}": Found ${results.length} results.`);
    const allMumbai = results.every(t => t.city === city);
    console.log(`Validation: All results are in ${city}? ${allMumbai}`);

    console.log('\n--- Testing Filter by Sport ---');
    const sport = 'Cricket';
    const resultsSport = filterBySport(turfsData, sport);
    console.log(`Filtering for "${sport}": Found ${resultsSport.length} results.`);
}

function testSort() {
    console.log('\n--- Testing Sort ---');
    console.log('Sorting by Price (Low to High):');
    const sortedPrice = sortTurfs(turfsData, 'priceLowToHigh');
    console.log(`Cheapest: ${sortedPrice[0].turfName} - ₹${sortedPrice[0].pricePerHour}`);
    console.log(`Most Expensive: ${sortedPrice[sortedPrice.length - 1].turfName} - ₹${sortedPrice[sortedPrice.length - 1].pricePerHour}`);

    console.log('\nSorting by Rating (High to Low):');
    const sortedRating = sortTurfs(turfsData, 'ratingHighToLow');
    console.log(`Top Rated: ${sortedRating[0].turfName} - ${sortedRating[0].rating} stars`);
}

// Helper for Node.js testing since we used export in the actual file
// We'll wrap the actual file in a way that Node can run it if needed, 
// or just re-implement logic here for the test if it's simpler.
// Actually, I'll just adjust turfSearch.js to use module.exports if I want to run it via Node, 
// OR I can use a small shim. Let's adjust turfSearch.js to be compatible with both if possible, 
// or just use commonjs for the test script.

// Since I'm in a React Native project, I should stick to ESM for the source code.
// I'll create a temporary commonjs version for testing.

testSearch();
testFilter();
testSort();

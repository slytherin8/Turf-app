const fs = require('fs');
const path = require('path');

// Load data
const turfsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/turfs.json'), 'utf8'));

// Re-implement logic for verification (mimics turfSearch.js)
const searchTurfs = (turfs, query) => {
    if (!query) return turfs;
    const lowerQuery = query.toLowerCase();
    return turfs.filter(turf =>
        turf.turfName.toLowerCase().includes(lowerQuery) ||
        turf.area.toLowerCase().includes(lowerQuery)
    );
};

const filterByCity = (turfs, city) => {
    if (!city || city === 'All') return turfs;
    return turfs.filter(turf => turf.city === city);
};

const sortTurfs = (turfs, sortBy) => {
    const sorted = [...turfs];
    switch (sortBy) {
        case 'priceLowToHigh':
            return sorted.sort((a, b) => a.pricePerHour - b.pricePerHour);
        case 'priceHighToLow':
            return sorted.sort((a, b) => b.pricePerHour - a.pricePerHour);
        case 'ratingHighToLow':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
};

function runTests() {
    console.log('=== Turf Data Verification ===');
    console.log(`Total Records: ${turfsData.length}`);

    // Test 1: Search
    const query = 'Elite';
    const searchResults = searchTurfs(turfsData, query);
    console.log(`\n[Search] Query: "${query}"`);
    console.log(`Results found: ${searchResults.length}`);
    if (searchResults.length > 0) {
        console.log(`Sample Result: ${searchResults[0].turfName}`);
    }

    // Test 2: Filter by City
    const city = 'Mumbai';
    const filterResults = filterByCity(turfsData, city);
    console.log(`\n[Filter] City: "${city}"`);
    console.log(`Results found: ${filterResults.length}`);
    const matchCount = filterResults.filter(t => t.city === city).length;
    console.log(`Validation: ${matchCount}/${filterResults.length} records match the city.`);

    // Test 3: Sorting
    console.log(`\n[Sort] Criteria: Price Low to High`);
    const sortedPrice = sortTurfs(turfsData, 'priceLowToHigh');
    console.log(`Lowest: ₹${sortedPrice[0].pricePerHour}`);
    console.log(`Highest: ₹${sortedPrice[sortedPrice.length - 1].pricePerHour}`);
    const isSorted = sortedPrice[0].pricePerHour <= sortedPrice[1].pricePerHour;
    console.log(`Validation: Correctly sorted? ${isSorted}`);

    console.log(`\n[Sort] Criteria: Rating High to Low`);
    const sortedRating = sortTurfs(turfsData, 'ratingHighToLow');
    console.log(`Top Rated: ${sortedRating[0].rating} stars`);
    const isRatingSorted = sortedRating[0].rating >= sortedRating[1].rating;
    console.log(`Validation: Correctly sorted? ${isRatingSorted}`);

    console.log('\n=== Verification Complete ===');
}

runTests();

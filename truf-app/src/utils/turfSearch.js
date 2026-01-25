/**
 * Utility functions for searching, filtering, and sorting turf records.
 */

/**
 * Search turfs by name (partial match, case-insensitive).
 * @param {Array} turfs - The array of turf objects.
 * @param {string} query - The search string.
 * @returns {Array} - Filtered results.
 */
export const searchTurfs = (turfs, query) => {
    if (!query) return turfs;
    const lowerQuery = query.toLowerCase();
    return turfs.filter(turf =>
        turf.turfName.toLowerCase().includes(lowerQuery) ||
        turf.area.toLowerCase().includes(lowerQuery)
    );
};

/**
 * Filter turfs by city.
 * @param {Array} turfs - The array of turf objects.
 * @param {string} city - The city name.
 * @returns {Array} - Filtered results.
 */
export const filterByCity = (turfs, city) => {
    if (!city || city === 'All') return turfs;
    return turfs.filter(turf => turf.city === city);
};

/**
 * Filter turfs by sport type.
 * @param {Array} turfs - The array of turf objects.
 * @param {string} sportType - The sport type.
 * @returns {Array} - Filtered results.
 */
export const filterBySport = (turfs, sportType) => {
    if (!sportType || sportType === 'All') return turfs;
    return turfs.filter(turf => turf.sportType === sportType);
};

/**
 * Sort turfs based on criteria.
 * @param {Array} turfs - The array of turf objects.
 * @param {string} sortBy - 'priceLowToHigh', 'priceHighToLow', 'ratingHighToLow'.
 * @returns {Array} - Sorted results.
 */
export const sortTurfs = (turfs, sortBy) => {
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

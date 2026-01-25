const fs = require('fs');
const path = require('path');

const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
    'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow'
];

const areas = {
    'Mumbai': ['Andheri', 'Bandra', 'Borivali', 'Dadar', 'Juhu', 'Powai'],
    'Delhi': ['Connaught Place', 'Saket', 'Dwarka', 'Rohini', 'Hauz Khas', 'Karol Bagh'],
    'Bangalore': ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Jayanagar', 'Marathahalli'],
    'Hyderabad': ['Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kukatpally', 'Secunderabad'],
    'Ahmedabad': ['Satellite', 'Navrangpura', 'Prahlad Nagar', 'Bodakdev', 'Vastrapur'],
    'Chennai': ['Adyar', 'Anna Nagar', 'Velachery', 'T. Nagar', 'Mylapore', 'Besant Nagar'],
    'Kolkata': ['Salt Lake', 'New Town', 'Park Street', 'Gariahat', 'Behala', 'Alipore'],
    'Pune': ['Kothrud', 'Baner', 'Viman Nagar', 'Hingewadi', 'Koregaon Park', 'Hadapsar'],
    'Jaipur': ['Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'C-Scheme', 'Raja Park'],
    'Lucknow': ['Gomti Nagar', 'Hazratganj', 'Indira Nagar', 'Aliganj', 'Jankipuram']
};

const sportTypes = ['Cricket', 'Football', 'Multi-sport'];

const turfAdjectives = [
    'Elite', 'Green', 'Mega', 'Star', 'Champion', 'Pro', 'Nexus', 'Prime', 'Royal', 'Swift',
    'Dynamic', 'Power', 'Victory', 'Ace', 'Ultimate', 'Grand', 'Active', 'Super', 'Sporty', 'Urban'
];

const turfNouns = [
    'Turf', 'Arena', 'Ground', 'Field', 'Park', 'Zone', 'Club', 'Complex', 'Stadium', 'Hub'
];

const generateTurfs = (count) => {
    const turfs = [];
    for (let i = 1; i <= count; i++) {
        const city = cities[Math.floor(Math.random() * cities.length)];
        const cityAreas = areas[city];
        const area = cityAreas[Math.floor(Math.random() * cityAreas.length)];
        const adjective = turfAdjectives[Math.floor(Math.random() * turfAdjectives.length)];
        const noun = turfNouns[Math.floor(Math.random() * turfNouns.length)];

        // Ensure uniqueness somewhat by adding index context if needed, but for 200 random combinations are usually enough
        const turfName = `${adjective} ${noun} ${area}`;

        const pricePerHour = Math.floor(Math.random() * (2500 - 800 + 1)) + 800; // 800 to 2500
        const rating = parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)); // 3.0 to 5.0
        const sportType = sportTypes[Math.floor(Math.random() * sportTypes.length)];

        const availableTimeSlots = [
            "06:00 - 07:00", "07:00 - 08:00", "08:00 - 09:00",
            "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00", "20:00 - 21:00", "21:00 - 22:00"
        ].sort(() => 0.5 - Math.random()).slice(0, 5).sort();

        turfs.push({
            id: `turf_${i}`,
            turfName,
            city,
            area,
            pricePerHour,
            availableTimeSlots,
            rating,
            sportType,
            imageUrl: `https://placeholder.com/turf_${i}.jpg`
        });
    }
    return turfs;
};

const turfsData = generateTurfs(200);
const outputPath = path.join(__dirname, 'turfs.json');
fs.writeFileSync(outputPath, JSON.stringify(turfsData, null, 2));
console.log(`Generated 200 turfs at ${outputPath}`);

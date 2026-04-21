/*11. Write a JSON object for a travel booking system with users, trips, hotels, flights etc.*/


const travelBooking = {
    users: [
        { userId: 1, name: "Rishi" }
    ],
    trips: [
        { tripId: 101, destination: "Goa", days: 3 }
    ],
    hotels: [
        { hotelId: 201, name: "Sea View Hotel", city: "Goa" }
    ],
    flights: [
        { flightId: 301, airline: "Indigo", source: "Pune", destination: "Goa" }
    ]
};

console.log(travelBooking);
/*7. Create a JSON object for an airline system with flights, passengers, tickets, and baggage.*/


const airlineSystem = {
    flights: [
        { flightNo: "AI101", source: "Pune", destination: "Delhi" }
    ],
    passengers: [
        { passengerId: 1, name: "Amit", age: 25 }
    ],
    tickets: [
        { ticketId: 201, flightNo: "AI101", passengerId: 1, seatNo: "A1" }
    ],
    baggage: [
        { baggageId: 301, passengerId: 1, weight: "15kg" }
    ]
};

console.log(airlineSystem);
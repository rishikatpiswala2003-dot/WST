/*8. Write a JSON object for a sports tournament with multiple matches, teams, and scores.*/


const tournament = {
    tournamentName: "Cricket Cup",
    teams: ["Team A", "Team B", "Team C"],
    matches: [
        { matchId: 1, team1: "Team A", team2: "Team B", score: "150/5 vs 148/8" },
        { matchId: 2, team1: "Team B", team2: "Team C", score: "160/4 vs 140/9" }
    ]
};

console.log(tournament);
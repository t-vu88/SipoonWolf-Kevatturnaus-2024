// ruokailu.js

// Define lunch data
const lunchData = [
    {
        day: "Lauantai",
        locations: [
            {
                location: "U8 Joukkueet / Kokoustila 2.krs",
                lunchTimes: [
                    { time: "12:00", team: "Wolf musta" },
                    { time: "12:00", team: "Wolf Keltainen" },
                    { time: "12:20", team: "Hunters Blue" },
                    { time: "12:20", team: "Hunters Yellow" },
                    { time: "12:40", team: "HJK blue" },
                    { time: "12:40", team: "HJK White" },
                    { time: "13:00", team: "Salamat Blue" },
                    { time: "13:00", team: "Salamat White" },
                   
                ]
            },
            {
                location: "U7 Joukkueet / 2.krs aula",
                lunchTimes: [
                    { time: "11:40", team: "Haki Blue" },
                    { time: "12:00", team: "Haki Black" },
                    { time: "12:20", team: "Hunters U7" },
                    { time: "12:40", team: "Wolf" },
                    { time: "13:00", team: "HIFK Red" }
                ]
            }
        ]
    },
    {
        day: "Sunnuntai",
        locations: [
            {
                location: "U8 Joukkueet / Kokoustila 2.krs",
                lunchTimes: [
                    { time: "12:00", team: "Wolf Musta" },
                    { time: "12:00", team: "Wolf Keltainen" },
                    { time: "12:20", team: "HJK Black" },
                    { time: "12:20", team: "HJK Blue" }, 
                    { time: "12:40", team: "Viikingit Red" },
                    { time: "12:40", team: "Viikingit White" },
                    { time: "13:00", team: "HIFK White (U8)" },
                    { time: "13:00", team: "HIFK Red" },
                   
                  
                ]
            },
            {
                location: " U7 Joukkueet / 2.krs aula",
                lunchTimes: [
                    { time: "12:00", team: "Wolf" },
                    { time: "12:20", team: "HIFK White (U7)" },
                    { time: "12:40", team: "HIFK Blue" },
                    { time: "13:00", team: "Haki White" }
                   
                ]
            }
        ]
    }
];

export default lunchData;

let weekData = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let student = {name: "Ava Edralin", age:21};
let days = [
    {day: "Monday",mood:"happy", sleepHours:7, screenTime:5.5,caffeineintake:2,focuslevel:8},
    {day: "Tuesday",mood:"bored", sleepHours:8,screenTime:4.5,caffeineintake:2,focuslevel:7},
    {day: "Wednesday",mood:"stressed", sleepHours:6,screenTime:4.5,caffeineintake:1,focuslevel:8.5},
    {day: "Thursday",mood:"distraught", sleepHours:8.5,screenTime:5,caffeineintake:2,focuslevel:8},
    {day: "Friday",mood:"happy", sleepHours:9,screenTime:5,caffeineintake:0,focuslevel:7.5},
    {day: "Saturday",mood:"bored",sleepHours:9,screenTime:4,caffeineintake:3,focuslevel:9},
    {day: "Sunday",mood:"bored",sleepHours:7,screenTime:5.5,caffeineintake:2,focuslevel:7}
];

function findHighestScreenTime() {
    return weekData.reduce((prev,current)=> {
        return (prev.screenTime > current.screenTime) ? prev:current;
    });
}

function averageSleep() {
    const totalSleep =weekData.reduce((sum,day)=>sum+day.sleepHours, 0);
    return(totalSleep/weekData.length).toFixed(2);
}

function mostFrequentMood() {
    const moodCounts = {};
    weekData.forEach(day=> {
        moodCounts[day.mood]=(moodCounts[day.mood] || 0)+1;
    });
}

function correlateCaffeineToFocus() {
    let highCaffeineFocusSum=0;
    let highCaffeineDays=0;
    let lowCaffeineFocusSum=0;
    let lowCaffeineDays=0;

    weekData.forEach(day=> {
        if (day.caffeineintake >= 3) {
            highCaffeineFocusSum += day.focuslevel;
            highCaffeineDays++;
        } else {
            lowCaffeineFocusSum += day.focuslevel;
            lowCaffeineDays++;
        }
    });
    const highAvg=highCaffeineDays > 0 ? (highCaffeineFocusSum/highCaffeineDays).toFixed(1) : 0;
    const lowAvg = lowCaffeineDays > 0 ? (lowCaffeineFocusSum/lowCaffeineDays).toFixed(1) : 0;

    return `Average focus with high caffeine (>=3): ${highAvg} | Average focus with low or no caffeine: ${lowAvg}`;
}

console.log("--- Journal Data Analysis ---");
console.log("Highest Screen Time Day:", findHighestScreenTime().day, `(${findHighestScreenTime().screenTime} hours)`);
console.log("Average Sleep:", averageSleep(), "hours");
console.log("Most Frequent Mood:",mostFrequentMood());
console.log("Caffeine vs Focus Correlation:",correlateCaffeineToFocus());
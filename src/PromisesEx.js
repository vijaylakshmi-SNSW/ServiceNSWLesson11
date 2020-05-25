const readline = require ('readline');
const axios = require("axios");
const { weatherApiKey } = require ("../config/Keys")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    let city = await askQuestion("Which city temperature you want to know: ") ;
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${weatherApiKey}`);
    console.log(response.main);
   //console.log(`The Max temperature in ${response.main} is ${response.main.temp_max }`);

}
Program().then(() => {
    process.exit(0);
});
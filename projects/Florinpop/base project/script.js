const tiStart = "October 7, 2021 12:00:00";

function countdown() {
    const tiStartDate = new Date(tiStart);
    const currentDate = new Date();

    console.log(tiStartDate - currentDate);
}

countdown();
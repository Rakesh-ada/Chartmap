const years = [
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
    1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022, 2023,
];

const ctx = document.getElementById("bar-chart");
const ctx2 = document.getElementById("pie-chart-1");
const ctx3 = document.getElementById("pie-chart-2");

let chart1 = new Chart(ctx, {
    type: "bar",
    data: {
        labels: years,
        datasets: [
            {
                label: "Emission Qty. in Mt CO₂eq",
                data: new Array(54).fill(0),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    },
    responsive: true,
    maintainAspectRatio: false,
});

let chart2 = new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ["CO₂", "CH₄", "Fluorocarbons", "N₂O"],
        datasets: [
            {
                label: "Emission Qty. in Mt CO₂eq",
                data: [0,0,0,0],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
});

let chart3 = new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: [
            "Agriculture",
            "Buildings",
            "Fuel Exploitation",
            "Industrial Combustion",
            "Power Industry",
            "Processes",
            "Transport",
            "Waste",
        ],
        datasets: [
            {
                label: "Emission Qty. in Mt CO₂eq",
                data: [0,0,0,0,0,0,0,0],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
});

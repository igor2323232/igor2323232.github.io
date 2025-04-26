document.addEventListener("DOMContentLoaded", () => {
    // Example: Populate stats dynamically
    const stats = {
        maxSpeed: "28 km/h",
        mediumSpeed: "16 km/h",
        distanceCovered: "10.5 km",
        oxygenLevel: "98%"
    };

    document.getElementById("max-speed").textContent = stats.maxSpeed;
    document.getElementById("medium-speed").textContent = stats.mediumSpeed;
    document.getElementById("distance-covered").textContent = stats.distanceCovered;
    document.getElementById("oxygen-level").textContent = stats.oxygenLevel;

    // Radar Chart for Performance
    const radarCtx = document.getElementById('performance-radar-chart').getContext('2d');
    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: [
                'Passing Accuracy',
                'Tackles Won',
                'Sprints',
                'Goals',
                'Assists',
                'Ball Retention',
                'Interceptions'
            ],
            datasets: [{
                label: 'Performance Metrics',
                data: [85, 75, 90, 70, 50, 80, 60],
                backgroundColor: 'rgba(205, 92, 92, 0.2)', // Persian red with transparency
                borderColor: '#cd5c5c', // Persian red
                borderWidth: 2,
                pointBackgroundColor: '#cd5c5c'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    grid: {
                        color: '#444444' // Gray gridlines
                    },
                    angleLines: {
                        color: '#444444' // Gray angle lines
                    },
                    ticks: {
                        backdropColor: '#222222', // Dark gray behind tick marks
                        color: '#eeeeee' // Light gray tick mark numbers
                    },
                    pointLabels: {
                        color: '#eeeeee' // Light gray labels on radar chart
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#eeeeee' // Light gray legend text
                    }
                }
            }
        }
    });
});
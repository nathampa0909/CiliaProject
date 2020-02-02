$(document).ready(function() {
    Highcharts.chart('chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Brands'
        },
        subtitle: {
            text: 'Source: loremipsum.com'
        },
        xAxis: {
            categories: ['BMW', 'Chevrolet', 'Citroen', 'Volkswagen', 'Renalt', 'Jeep', 'Ferrari', 'Iveco', 'Hyundai', 'Honda', 'Ford', 'Fiat']
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Quantity',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });

});
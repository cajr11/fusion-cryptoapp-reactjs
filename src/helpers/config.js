export const mainChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'BTC/USD',
      },
    },
    scales: {
        x: {
          grid: {
            display: false,
            borderColor: '#000'
          },
          
        },
        y: {
          grid: {
            display: false,
            borderColor: '#000'
          }
        }
        
    }
};
export const mainChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'BTC/USD',
      },
    },
    layout: {
        padding: {
            top: 10,
            right: 20,
            left: 10
        } 
    },
    scales: {
        x: {
          grid: {
            borderColor: '#1f1f1f'
          },
          ticks: {
            maxTicksLimit: 8,
            font: {
                size: 10
            }
          },
        },

        y: {
          grid: {
            borderColor: '#1f1f1f'
          },
          ticks: {
            font: {
                size: 10
            }
          },
        },
    },
    elements: {
        point:{
            radius: 0
        }
    }
};
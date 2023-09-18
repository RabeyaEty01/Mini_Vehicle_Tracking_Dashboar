// DistanceChart.js
import ReactApexChart from 'react-apexcharts';
import SkeletonVehicleBarChartCard from 'ui-component/cards/Skeleton/VehicleBarChartCard';

const VehicleBarChart = ({ vehicles, isLoading }) => {
    const chartData = {
        options: {
            chart: {
                id: 'distance-chart',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000 // Chart update speed (milliseconds)
                    }
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    format: 'HH:mm:ss'
                }
            },
            yaxis: {
                title: {
                    text: 'Distance Covered'
                }
            }
        },

        series: vehicles.map((vehicle) => ({
            name: `Vehicle ${vehicle.id}`,
            data: vehicle.distanceCovered
        }))
    };

    return (
        <div>
            {isLoading ? (
                <SkeletonVehicleBarChartCard />
            ) : (
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={500} />
            )}
        </div>
    );
};

export default VehicleBarChart;

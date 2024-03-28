import { Chart } from 'react-chartjs-2';
import GraphManager from '../../manager/GraphManager';
import { Box } from '@mui/material';
import React, { useRef } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Interaction,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationsPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineController,
    LineElement,
    Filler,
    zoomPlugin,
    annotationsPlugin
);

export default function ForecastGraph({ data, weatherType, weatherUnits }) {
    const chartRef = useRef(null);
    const { t } = useTranslation();

    Interaction.modes.myCustomMode = GraphManager.myCustomMode;

    const graphData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: t('day'),
                data: Object.values(data).map((item) => item.day[weatherType]?.avg),
                fill: false,
                borderColor: '#212121',
                pointBackgroundColor: '#212121',
                borderWidth: 2,
            },
            {
                label: t('night'),
                data: Object.values(data).map((item) => item.night[weatherType]?.avg),
                fill: false,
                borderColor: '#737D8C',
                pointBackgroundColor: '#737D8C',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        scales: {
            x: {
                display: true,
                ticks: {
                    callback: function (value, index) {
                        const date = new Date(Object.keys(data)[index]);
                        return date
                            .toLocaleDateString(i18n.language, { day: '2-digit', month: '2-digit' })
                            .replace(/\//g, '.');
                    },
                    font: {
                        size: 9,
                    },
                },
            },
            y: {
                position: 'right',
                beginAtZero: true,
                ticks: {
                    callback: (val) => {
                        return `${parseFloat(val.toFixed(2))} ${weatherUnits}`;
                    },
                    font: {
                        size: 9,
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            interaction: {
                intersect: false,
                mode: 'myCustomMode',
            },
            hover: {
                intersect: false,
                includeInvisible: true,
            },
            mouseLine: {
                color: '#00ff00',
            },
            tooltip: {
                enabled: true,
                mode: 'myCustomMode',
                intersect: false,
                backgroundColor: '#757575',
                displayColors: false,
                callbacks: {
                    title: (context) => {
                        return new Date(context[0].label).toLocaleString(i18n.language, {
                            day: 'numeric',
                            month: 'short',
                        });
                    },
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y.toFixed(0)} ${weatherUnits}`;
                        }
                        return label;
                    },
                },
            },
        },
    };

    return (
        <Box>
            <Chart
                type={'line'}
                ref={chartRef}
                style={{ fontSize: 10 }}
                data={graphData}
                plugins={[GraphManager.mouseLine]}
                options={options}
            />
        </Box>
    );
}

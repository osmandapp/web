import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function createData(name, label, index, mult = 1, fixed = 2) {
    return {
        name,
        label,
        index,
        fmt: (item) => {
            return (item * mult).toFixed(fixed);
        },
    };
}

export default function WeatherForecast({ width, data, loc }) {
    const ctx = useContext(AppContext);

    const ECWMF_WEATHER_TYPE = 'ecmwf';

    let stickyClass = {
        position: 'sticky',
        background: '#fff',
        left: 0,
        zIndex: 1,
    };

    const rows = [
        createData('Temperature', 'C', ctx.weatherType === ECWMF_WEATHER_TYPE ? 2 : 3, 1, 1),
        createData('Cloud', '%', ctx.weatherType === ECWMF_WEATHER_TYPE ? -1 : 2),
        createData('Precipitation', 'mg/(m^2*s)', ctx.weatherType === ECWMF_WEATHER_TYPE ? 4 : 6, 1000 * 1000),
        createData('Pressure', 'kPa', ctx.weatherType === ECWMF_WEATHER_TYPE ? 3 : 4, 0.001),
        createData('Wind', 'm/s', ctx.weatherType === ECWMF_WEATHER_TYPE ? -1 : 5),
    ];

    return (
        <TableContainer component={Paper} style={{ width: width, overflowX: 'auto' }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell style={stickyClass}>{'Weather ' + loc}</TableCell>
                        {data.map((rw) => (
                            <TableCell key={rw[1]}>{rw[1]}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" style={stickyClass}>
                                {row.name + ' (' + row.label + ')'}
                            </TableCell>

                            {data.map((rw) => (
                                <TableCell key={row.index + rw[1]}>
                                    {row.index !== -1 ? row.fmt(rw[row.index]) : '-'}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

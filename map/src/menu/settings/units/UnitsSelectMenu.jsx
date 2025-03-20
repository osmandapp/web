import {
    Divider,
    FormControl,
    FormControlLabel,
    ListItem,
    ListItemText,
    Paper,
    Radio,
    RadioGroup,
} from '@mui/material';
import radioStyles from '../../trackfavmenu.module.css';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

export default function UnitsSelectMenu({ unit, setOpenList }) {
    const ctx = useContext(AppContext);

    const select = (event) => {
        const u = event.target.value;
        ctx.setUnitsSettings((prevState) => ({
            ...prevState,
            [unit.type]: u,
        }));
        setOpenList(false);
    };

    const UnitRadioMenu = () => {
        const keys = Object.keys(unit.list);
        const dividerIndexes = {
            len: [1, 4],
            speed: [3, 5],
        };

        if (!dividerIndexes[unit.type]) return null;

        return (
            <>
                {keys.map((key, index) => (
                    <React.Fragment key={key}>
                        <FormControlLabel
                            className={radioStyles.controlLabel}
                            value={key}
                            control={<Radio />}
                            label={<UnitRadioItem label={unit.list[key]} />}
                        />
                        {dividerIndexes[unit.type].includes(index) && (
                            <Divider className={radioStyles.dividerActions} />
                        )}
                    </React.Fragment>
                ))}
            </>
        );
    };

    const UnitRadioItem = ({ label }) => {
        return (
            <ListItem className={radioStyles.sortItem}>
                <ListItemText className={radioStyles.sortText}>{label}</ListItemText>
            </ListItem>
        );
    };

    return (
        <Paper className={radioStyles.actions}>
            <FormControl>
                <RadioGroup value={ctx.unitsSettings[unit.type]} onChange={select}>
                    <UnitRadioMenu />
                </RadioGroup>
            </FormControl>
        </Paper>
    );
}

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
        if (unit.type === 'length') {
            return (
                <>
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[0]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[0]]} />}
                    />
                    <Divider className={radioStyles.dividerActions} />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[1]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[1]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[2]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[2]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[3]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[3]]} />}
                    />
                    <Divider className={radioStyles.dividerActions} />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[4]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[4]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[5]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[5]]} />}
                    />
                </>
            );
        } else if (unit.type === 'speed') {
            return (
                <>
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[0]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[0]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[1]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[1]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[2]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[2]]} />}
                    />
                    <Divider className={radioStyles.dividerActions} />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[3]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[3]]} />}
                    />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[4]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[4]]} />}
                    />
                    <Divider className={radioStyles.dividerActions} />
                    <FormControlLabel
                        className={radioStyles.controlLabel}
                        value={keys[5]}
                        control={<Radio />}
                        label={<UnitRadioItem label={unit.list[keys[5]]} />}
                    />
                </>
            );
        }
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

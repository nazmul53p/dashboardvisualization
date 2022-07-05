import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useUiConfigChangeReducer from '../hooks/useUiConfigChangeReducer';
import { FilterSectionT } from '../types';
import { FilterOptionType } from './constants';
import PersistentDrawer from './PersistentDrawer';
import RenderField from './RenderField';

export default function FilterDrawer({ item }: FilterSectionT) {
    const { handleServerCall } = useUiConfigChangeReducer();
    return (
        <PersistentDrawer title="filter">
            <Grid container spacing={2}>
                {item.config.map((field: FilterOptionType, index: number) => (
                    <React.Fragment key={index}>
                        <RenderField {...field} />
                    </React.Fragment>
                ))}
            </Grid>
            <Box textAlign="right" textTransform={'capitalize'}>
                <Button type="button" variant="contained" color="primary" onClick={(_e: any) => handleServerCall()}>
                    Filter
                </Button>
            </Box>
        </PersistentDrawer>
    );
}

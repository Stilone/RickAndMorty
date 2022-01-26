import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {SelectChangeEvent} from '@mui/material';
import {SearchTitle, Filter, Reset, FilterSelect} from './filter.styles';
import {iFilter} from '../../types/filter';

interface iFilterProps {
    filter: iFilter[];
    resetFilter: () => void;
    handleFilter: (field: string, event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>) => void;
}

export const Filters: React.FC<iFilterProps> = ({filter, handleFilter, resetFilter}) => {
    return (
        <div>
            {filter.map((filter) => {
                if (!filter.options) {
                    return <div key={filter.title}>
                        <SearchTitle
                            label="Search name"
                            value={filter.value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                handleFilter(filter.title, event)
                            }}
                        />
                    </div>
                }
            })}
            <Filter>
                {filter.map((filter) => {
                    if (filter.options) {
                        return <div key={filter.title}>
                            <InputLabel>{filter.title}</InputLabel>
                            <FilterSelect
                                value={filter.value}
                                onChange={(event: any) => {
                                    handleFilter(filter.title, event)
                                }}
                            >
                                {filter.options.map(item => {
                                    return <MenuItem value={item} key={`select-${filter.title}-${item}`}>{item}</MenuItem>
                                })}
                            </FilterSelect>
                        </div>
                    }
                })}
                <Reset
                    variant="contained"
                    color="secondary"
                    onClick={resetFilter}
                >
                    Reset
                </Reset>
            </Filter>
        </div>
    );
};
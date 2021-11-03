import { Box, HStack, Icon, IconButton, Menu } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { setSortConfiguration } from '../../actions/filtersActions';

const sortConfig = [
    { field: 'time', order: 1, icon: 'access-time', text: 'Ordenar por Hora' },
    { field: 'price', order: 1, icon: 'euro', text: 'Ordenar por Precio (más bajo primero)' },
    { field: 'price', order: -1, icon: 'euro', text: 'Ordenar por Precio (más alto primero)' },
]

export default function SortButton() {
    const dispatch = useDispatch();
    const configIdx = useSelector(state => state.sorting.idx);

    const iconField = sortConfig[configIdx].icon;
    const iconOrder = 'keyboard-arrow-' +
        (sortConfig[configIdx].order > 0 ? 'up' : 'down');

    return (
        <Box>
            <Menu trigger={(triggerProps) => {
                return (
                    <IconButton {...triggerProps}
                        icon={<HStack>
                            <Icon as={<MaterialIcons name={iconField} />} size='sm' color="white" />
                            <Icon as={<MaterialIcons name={iconOrder} />} size='sm' color="white" />
                        </HStack>}
                    />
                );
            }}>
                {sortConfig.map(({ field, order, text }, idx) => (
                    <Menu.Item
                        key={idx}
                        onPress={() => {
                            dispatch(setSortConfiguration(idx, field, order));
                        }}>
                        {text}
                    </Menu.Item>
                ))}
            </Menu>
        </Box >
    );
};

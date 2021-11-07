import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete}) {
    return (
        <TodoIcon
        type="delete"
        onclick={onDelete}
        />
    );
}
export { DeleteIcon };
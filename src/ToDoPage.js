import { useState } from 'react';
import Filter from './Filter';

const ToDoPage = () => {
    const [filter, setFilter] = useState('all');

    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <Filter changeFilter={changeFilter} />
        </>
    );
};

export default ToDoPage;
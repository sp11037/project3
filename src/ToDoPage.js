import { useState } from 'react';
import Filter from './Filter';
import ToDoContainer from './ToDoContainer';

const ToDoPage = () => {
    const [filter, setFilter] = useState('all');

    const changeFilter = (e) => {
        setFilter(e.target.value);
    };

    const items = [
        {description: "first item", completed: "no"},
        {description: "second item", completed: "yes"},
    ];

    return (
        <>
            <Filter changeFilter={changeFilter} />
            <ToDoContainer items={items} />
        </>
    );
};

export default ToDoPage;
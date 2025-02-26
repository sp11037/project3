const Filter = ({changeFilter}) => {
    return (
        <div>
            <label for="filter">Filter:</label>
            <select name="filter" onChange={changeFilter}>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    );
};

export default Filter;
const Filter = ({changeFilter}) => {
    return (
        <div>
            <label for="filter">Filter:</label>
            <select name="filter" onChange={changeFilter}>
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default Filter;
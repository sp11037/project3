import './Filter.css';

const Filter = ({changeFilter}) => {
    return (
        <div className="filterContainer">
            <label for="filter">Filter:</label>
            <select className="filterSelector" name="filter" onChange={changeFilter}>
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default Filter;
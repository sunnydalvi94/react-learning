function FilterTask({filterValue}) {
    return ( <>
    
    <div className="filterbtn">
        <button onClick={()=>filterValue('all')}>All</button>
        <button onClick={()=>filterValue('active')}>Active</button>
        <button onClick={()=>filterValue('completed')}>Completed</button>
    </div>
    </> );
}

export default FilterTask;
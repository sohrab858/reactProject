

function CourseList(){
    const course = [{id : 1 , name :"js"},
        {id : 2 , name :"class"},
        {id : 3 , name : "course"},
        {id: 4 , name : "Node"}];
    return (
     
        <div>
        <h3>Course List</h3>
        <ui>
            {course.map((course) => (
                <li key={course.id}>{course.name}</li>
            ))}
        </ui>
        </div>
    )
}


export default CourseList;
import { useState } from "react";
import CourseCardList from "./CourseCardList";
import style from "./CourseList.module.css";

function CourseList(){

    const [selected,setSelected]=useState(true);
    const changeHandler=()=>{
        setSelected(!selected);
    }

    const course = [
        {id : 1 , name :"js" , description :"This is js course"},
        {id : 2 , name :"react",description :"This is react course"},
        {id : 3 , name : "next",description :"This is next course"},
        {id: 4 , name : "Node",description :"This is Node course"}];
    return (
       
        <div className={selected ? style.container : style.select}>
        <button onClick={changeHandler}>change</button>
        <h3>Course List</h3>
        <ul>  
            {course.map((course) => (
       <CourseCardList key={course.id} data = {course}/>
            ))}
        </ul>
        </div>  
    )
}


export default CourseList;
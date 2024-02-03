//Types let you do union and intersection operations interfaces let extend class
type student = {
    name : string,
    department:string,
    roll:number
}
interface  course {
    coursename:string,
    duration:number
}
type professer=student & course;

const p : professer={
    name:"John",
    department:"CSE",
    roll:51,
    coursename:"NETWORKS",
    duration:521
}
console.log(p);

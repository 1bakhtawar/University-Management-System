class Person {
    name;
    age;
    getName() {
    }
    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    registerForCourses(course) {
        this.courses.push(course.name);
    }
    constructor(name, age, rNum) {
        super(name, age);
        this.rollNumber = rNum;
    }
    getListOfCourses() {
        console.log("Student " + this.name + " Courses : ");
        this.courses.forEach(element => {
            console.log(element);
        });
    }
}
//inheritance
class Instructor extends Person {
    salary;
    courses = [];
    assignCourse(course) {
        this.courses.push(this.name);
    }
    getListOfCourses() {
        console.log("Student " + this.name + " Courses : ");
        this.courses.forEach(element => {
            console.log(element);
        });
    }
    constructor(name, age, sal) {
        super(name, age);
        this.salary = sal;
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    static allCourses = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Course.allCourses.push(name);
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(ins) {
        this.instructors.push(ins);
    }
    getListOfStudents() {
        console.log(this.name + " Students : ");
        this.students.forEach(element => {
            console.log(element.name);
        });
    }
    getListOfInstructors() {
        console.log(this.name + " Instructors : ");
        this.instructors.forEach(element => {
            console.log(element.name + "  " + element.age);
        });
    }
    static displayAllCourses() {
        console.log("All the courses: ");
        Course.allCourses.forEach(element => {
            console.log(element);
        });
    }
}
let c1 = new Course(1, "Blockchain"); //2 student enrolled
let c2 = new Course(2, "Typescript"); //1 student enrolled
let c3 = new Course(3, "AI"); // 0 Student enrolled
// console.log(c1)  
// console.log(c2.id)
let ins1 = new Instructor("Zia", 24, 90000);
let ins2 = new Instructor("Hamzah", 23, 80000);
c1.setInstructor(ins1);
ins1.assignCourse(c1);
c2.setInstructor(ins1);
ins1.assignCourse(c1);
c2.setInstructor(ins2);
ins2.assignCourse(c2);
ins1.getListOfCourses();
ins2.getListOfCourses();
let std1 = new Student("Ali", 17, "123");
let std2 = new Student("Mahnoor", 19, "121");
// console.log(std1);
// console.log(std2);
c1.addStudent(std1);
std1.registerForCourses(c1);
c1.addStudent(std2);
std2.registerForCourses(c2);
std1.getListOfCourses();
c2.addStudent(std2);
c2.addStudent(std1);
std1.getListOfCourses();
std2.getListOfCourses();
// c1.getListOfStudents()
// c1.getListOfStudents()
// c1.getListOfInstructors()
// c2.getListOfInstructors()
// console.log(c1);
// console.log(c2);
class Department {
    name;
    courses = [];
    static allDepartments = [];
    addCourse(course) {
        this.courses.push(course);
    }
    getCourses() {
        this.courses.forEach(element => {
            console.log(element);
        });
    }
    constructor(name) {
        this.name = name;
        Department.allDepartments.push(this.name);
    }
    static displayAllDepartments() {
        console.log("\nAll Departments are: \n");
        Department.allDepartments.forEach(element => {
            console.log(element);
        });
    }
}
let d1 = new Department("Computer Science ");
let d2 = new Department("SE");
d1.addCourse(c1);
d1.addCourse(c2);
d2.addCourse(c1);
Department.displayAllDepartments();
export {};

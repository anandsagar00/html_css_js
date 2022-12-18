const username_teachers = ["teacher1", "teacher2"];
const password_teachers = ["teacher1", "password2"];

const username_students = ["student1", "student2"];
const password_students = ["student1", "password2"];

const subjects=["Maths : ","SST : ","SCIENCE : "];

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"test"
});

function display_marks(index, teacher) {
    if(teacher==0)
    {
        let sql_stmt="Select * from student where id="+index;
        con.query(sql_stmt,function(err,result){
            if(err)
            throw err;
            else
            {
                console.log(result);
            }
        })
    }
}

function validateStudent() {
    id = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    let flag_login = 0;
    for (let i = 0; i < username_students.length; i++) {
        if (username_students[i] == id && password_students[i] == pass) {
            alert("Login Succesful");
            flag_login = 1;
            document.write("<h1> Welcome " + id + "</h1><br>");
            display_marks(i, 0);
        }
    }
    if (flag_login == 0) {
        alert("Login Failed");
        return;
    }
}
function validateTeacher() {
    id = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    let flag_login = 0;
    for (let i = 0; i < username_teachers.length; i++) {
        if (username_teachers[i] == id && password_teachers[i] == pass) {
            alert("Login Succesful");
            flag_login = 1;
            display_marks(id,1);
        }
    }
    if (flag_login == 0) {
        alert("Login Failed");
        return;
    }
}
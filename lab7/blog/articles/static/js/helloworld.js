var Groupmates = [
    {
        "Name": "Билли",
        "Surname": "Херингтон",
        "Group": ["БИБ2100"],
        "Marks": [4, 4, 4]
    },
    {
        "Name": "Иван",
        "Surname": "Темнохолмов",
        "Group": ["БИБ2101"],
        "Marks": [3, 3, 3]
    },
    {
        "Name": "Билл",
        "Surname": "Мюрей",
        "Group": ["БИБ2102"],
        "Marks": [5, 5, 5]
    },
    {
        "Name": "Кто",
        "Surname": "Чтоев",
        "Group": ["БИБ2103"],
        "Marks": [4, 4, 3]
    },
    {
        "Name": "Мамонт",
        "Surname": "Папантович",
        "Group": "БИБ2104",
        "Marks": [5, 3, 3]
    },
];
console.log(Groupmates);

var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length)
        str = str + ' '; 
    return str;
};

var printStudent = function (student) {
    console.log(
        rpad(student['Name'], 15),
        rpad(student['Surname'], 15),
        rpad(student['Group'], 8),
        rpad(student['Marks'], 20)
    );
}

var printStudents = function (students) { 
    table_header();
    for (var i = 0, len = students.length - 1; i <= len; printStudent(students[i++]));
    console.log('\n');
};

var table_header = function () {
    printStudent({ "Name": "Имя", "Surname": "Фамилия", "Group": "Группа", "Marks": "Оценки" })
}
printStudents(Groupmates);

var print_students_by_groupnames = function (students, Group_Name) {
    table_header();
    for (var i = 0, len = students.length - 1; i < len; i++)
        if (students[i]["Group"] == Group_Name)
            printStudent(students[i]);
    console.log("\n");
};

var calculate_average_grade = function (grades) {
    var summary = 0;
    for (var i = 0, len = grades.length - 1; i <= len; summary += grades[i++]);
    return (summary/grades.length);
};

var print_students_by_average_grade = function(students, Average_Grade) {
    console.log(Average_Grade);
    table_header();
    for (var i = 0, len=students.length-1; i < len; i++)
        if (calculate_average_grade(students[i]['Marks']) >= Average_Grade)
            printStudent(students[i]);
    console.log("\n");
};

var SortBtns = document.getElementsByClassName("Sort");

SortBtns[0].addEventListener("click", function (event) { print_students_by_groupnames(Groupmates, document.forms.Solution.Group_Name.value) });

SortBtns[1].addEventListener("click", function (event) { print_students_by_average_grade(Groupmates, document.forms.Solution.Average_Grade.value) });

var fide_info

var HidenBtns = document.getElementsByClassName("hide_btn");

for (var i = 0, len = HidenBtns.length - 1; i <= len; i++) {
    HidenBtns[i].addEventListener("click", function (event) {
        id = event.target.id - 1;
        if (HidenBtns[id].name == "Shown") {
            document.forms.Archive.getElementsByClassName("article-content")[id].style.display = "none";
            HidenBtns[id].name = "Hiden";
            HidenBtns[id].value = "Показать";
        }
        else {
            document.forms.Archive.getElementsByClassName("article-content")[id].style.display = "block";
            HidenBtns[id].name = "Shown";
            HidenBtns[id].value = "Скрыть";
        }
    });
}
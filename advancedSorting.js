var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 },
    { id: 5, name: "alex",     age: 20 },
    { id: 6, name: "alex",     age: 50 }
  ];

students.sort(function(a, b){
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if(nameA < nameB){
        return -1; 
    }
    if(nameB > nameA){
        return 1;
    }
    if(nameA === nameB){
        return b.age - a.age;
    }
})
console.log(students);
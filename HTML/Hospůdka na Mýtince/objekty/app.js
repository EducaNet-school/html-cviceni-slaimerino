let user = {
    id: 1,
    jmeno: "kurnik",
    age: 36,
}
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name)
    };
    return o;
}

var person1 = createPerson("Jan", 14, "Krakatoa")
var person2 = createPerson("gra", "?", "gwaga")

function constructionSite(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    Sayname = function() {
        alert(this.name)
    }
}
var person3 = new constructionSite("Lolek", 69, "Lilek")

document.writeln(person3.name)
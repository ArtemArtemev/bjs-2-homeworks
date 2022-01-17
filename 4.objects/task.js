function Student(name, gender, age) {
  
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {

    this.subject = subjectName;
}

Student.prototype.addMark = function(mark){

     if(this.marks === undefined){ 
        this.marks =[mark]
    } else {
        this.marks.push(mark)
    }
}

Student.prototype.addMarks = function(...mark){

     this.marks.push(...mark)
}

Student.prototype.getAverage = function(){

     let sum = 0;

    for(let i = 0; i < this.marks.length; i++ ){
      sum += Number(this.marks[i])
    }
    return sum / this.marks.length;
}

Student.prototype.exclude = function(reason){

    this.reason = reason;
    
    if(this.marks === undefined){
        delete this.subject;
    }else{
          delete this.subject;
          delete this.marks;
    }  
}

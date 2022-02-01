function parseCount(a){
    let parsed = Number.parseInt(a);
    if(Number.isNaN(parsed) == true){
        throw new Error('Невалидное значение')   
    }else{
        return parsed;
    }
}

function validateCount(a){
    try{
        parseCount(a);
        return a;
    }catch(e){
        return  e;
    }   
}

class Triangle{
    constructor(a, b, c){ 
        if(a + b < c || a + c < b || b + c < a){
            throw new Error('Треугольник с такими сторонами не существует')
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        let p = this.a + this.b + this.c;
        return p;
    }

    getArea(){
        let p = (this.a + this.b + this.c) / 2;
        let s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c){
    try{
      return  new Triangle(a, b, c);
    }catch{
         let triangle = {getArea:() => 'Ошибка! Треугольник не существует', getPerimeter:() => 'Ошибка! Треугольник не существует'}
        return triangle;
    }

}
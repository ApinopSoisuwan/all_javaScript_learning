const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    let data = firstAndLast;

    this.getFullName = function() {
      return data;
    };
    this.getFirstName = function() {
        return data.split(' ')[0]
    }
    this.getLastName = function() {
        return data.split(' ')[1]
    }
    this.setFirstName = function(name){
        data = name + " " + data.split(' ')[1]
    }
    this.setLastName = function(name){
        data = data.split(' ')[0] + " " + name;
    }
    this.setFullName = function(name){
        data = name
    }
  };
  
  const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"))
console.log(bob.getFullName())
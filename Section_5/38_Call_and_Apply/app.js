var obj = {
    personName: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.personName}`);
    }
}

obj.greet();
obj.greet.call({personName: 'Jane Doe'});
obj.greet.apply({personName: 'Jane Doe'});
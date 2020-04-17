class Stock{

    constructor(name,value) {this.name = name, this.value =value;
        console.log("Creating stock.")
    }
 
    getValue(){
        return this.value;
    }
    
    getName(){
        //get full name using the abbreviation 
        console.log("Retrieving stock name")
        return this.name;
    }
    
    updateValue(){
        //change value to new value"
        console.log("Stock: " + this.name + "value updated")
    }
}

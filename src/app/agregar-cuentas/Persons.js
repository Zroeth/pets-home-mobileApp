class  Order{
    constructor(Persons,PersonID,LastName,FirstName,Address,City){
      this.Persons = Persons;
      this.PersonID = PersonID;
      this.LastName = LastName;
      this.FirstName = FirstName;
      this.Address = Address;
      this.City = City;
    }
  }
  
  module.exports = Order;
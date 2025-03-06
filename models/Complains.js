class Complains {
    constructor(name, message, subject) {
      this.name = name;
      this.subject = subject;
      this.message = message;
      this.createdAt = new Date(); // Automatically add a timestamp
    }
  }
  
  module.exports = Complains;
  
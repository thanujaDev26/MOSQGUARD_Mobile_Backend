class Complain {
  constructor(name, subject, message) {
    this.name = name;
    this.subject = subject;
    this.message = message;
    this.createdAt = new Date();
  }
}

module.exports = Complain;

class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    }
  
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    }
  
    age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    averageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sumOfGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
      return sumOfGrades / this.grades.length;
    }
  
    summary() {
      const averageGrade = this.averageGrade();
      const numberOfAttendances = this.attendance.filter(Boolean).length;
      const numberOfClasses = this.attendance.length;
  
      if (averageGrade > 90 && numberOfAttendances / numberOfClasses > 0.9) {
        return "Well done!";
      } else if (averageGrade > 90 || numberOfAttendances / numberOfClasses > 0.9) {
        return "Good, but can do better";
      } else {
        return "Slacker!";
      }
    }
  }
  
  const student1 = new Student("John", "Doe", 2000);
  const student2 = new Student("Mary", "Smith", 1999);
  const student3 = new Student("Peter", "Johnson", 2001);
  
  student1.present();
  student1.present();
  student1.absent();
  student1.grades = [95, 85, 90, 92, 88];
  console.log(`${student1.firstName} ${student1.lastName}: Age - ${student1.age()}, Average Grade - ${student1.averageGrade()}, Attendance - ${student1.attendance}`);
  console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);
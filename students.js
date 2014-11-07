function Student(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.courses = [];
}

function Course(courseName, department, numCredits) {
  this.courseName = courseName,
  this.department = department,
  this.numCredits = numCredits,
  this.students = [];
}

Student.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function() {
  var load = {};
  for(var i = 0; i < this.courses.length; i++) {
    var currentCourse = this.courses[i];
    if (load && (load.keys()).indexOf(currentCourse) === -1) {
      load.currentCourse.department = currentCourse.numCredits;
    } else {
      load.currentCourse.department += currentCourse.numCredits;
    }
  }
  return load;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};
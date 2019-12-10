/*Person

First we need a Person class. This will be our base-class

Person receives name age location all as props

Person receives speak as a method.
    This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props */

    class Person {
        constructor(args) {
            this.name = args.name;
            this.age = args.age;
            this.location = args.location;
        }
    
        speak() {
            return 'Hello my name is ' + this.name + ', I am from ' + this.location;
        }
    }
    

    
/*Instructor

Now that we have a Person as our base class, we'll build our Instructor class.

Instructor uses the same attributes that have been set up by Person

Instructor has the following unique props:
    specialty what the Instructor is good at i.e. 'redux'
    favLanguage i.e. 'JavaScript, Python, Elm etc.'
    catchPhrase i.e. Don't forget the homies

Instructor has the following methods:
demo    receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade   receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}' */
class Instructor extends Person {
    constructor(args) {
        super(args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
    }

    demo(subject) {
        return 'Today we are learning about ' + subject;
    }
    grade(student, subject) {
        return student.name + ' receives a perfect score on ' + subject;
    }
}



/*Student
Now we need some students!
Student uses the same attributes that have been set up by Person

Student has the following unique props:
    previousBackground i.e. what the Student used to do before Lambda School
    className i.e. CS132
    favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']

Student has the following methods:
listsSubjects       a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment        a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge      similar to PRAssignment but logs out student.name has begun sprint challenge on {subject} */

class Student extends Person {
    constructor(args) {
        super(args);
        this.previousBackground = args.previousBackground;
        this.className = args.className;
        this.favSubjects = args.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(e => {
            console.log(e);
        });
    }

    PRAssignment(subject) {
        return student.name + ' has submitted a PR for ' + subject;
    }

    sprintChallenge(subject) {
        return student.name + ' has begun sprint challenge on ' + subject;
    }
}

/*Project Manager
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs {name} announces to {channel}, @channel standy times!
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject} */

class ProjectManagers extends Instructor {
    constructor(args) {
        super(args);
        this.gradClassName = args.gradClassName;
        this.favInstructor = args.favInstructor;
    }

    standUp(channel) {
        return this.name + ' announces to ' + channel + ', @' + channel + ' standy times!';
    }

    debugsCode(student, subject) {
        return this.name + ' debugs ' + student.name + '\'s code on ' + subject;
    }
}








const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const rick = new Instructor({
    name: 'Rick',
    location: 'Bedrock',
    age: 27,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Woah!`
  });

  const harris = new ProjectManagers({
    name: 'Harris',
    location: 'Bedrock',
    age: 22,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Catch you on the flippity flop!`
  });

  const morty = new ProjectManagers({
    name: 'Morty',
    location: 'Bedrock',
    age: 99,
    favLanguage: 'PHP',
    specialty: 'Front-end',
    catchPhrase: `Rick!`
  });



  const nick = new Student({
    name: 'Nick',
    location: 'Abol',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `pizza is life`
  });
  
console.log(fred);
console.log(rick);
console.log(harris);
console.log(morty);
console.log(nick);
console.log(fred.speak());

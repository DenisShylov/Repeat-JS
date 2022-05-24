const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  return allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => 'God job, ' + name);
};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

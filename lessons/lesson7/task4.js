//lesson4
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
    const resultArr = allStudentsList.slice();
    studentsForRetake.forEach(() => {
        resultArr.splice(1, 1)
        return resultArr;
    })
    console.log(resultArr)
    resultArr.forEach((name, index) => {
        resultArr[index] = `Good job, ${name}`;
    })
    console.log(resultArr);
    return resultArr;
};
const allStud = ["a", "b", "c", "d"];
const retakeStud = ["b", "d"];


getMessagesForBestStudents(allStud, retakeStud);
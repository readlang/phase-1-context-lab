/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    const employeeObj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObj;
}

function createEmployeeRecords(arrayOfArrays) {
    return ( arrayOfArrays.map(x => createEmployeeRecord(x) ) )
} 

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
]

console.log(
createEmployeeRecords(twoRows)
)

function createTimeInEvent(stringDate) {
    const newObj = {
        type: "TimeIn",
        hour: parseInt( stringDate.slice(10, 15) ),
        date: stringDate.slice(0, 10)
    }
    this.timeInEvents.push(newObj);
    return this;
}

function createTimeOutEvent(stringDate) {
    const newObj = {
        type: "TimeOut",
        hour: parseInt( stringDate.slice(10, 15) ),
        date: stringDate.slice(0, 10)
    }
    this.timeOutEvents.push(newObj);
    return this;
}

function hoursWorkedOnDate(stringDate) {
    let index;
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if ( stringDate === this.timeInEvents[i].date ) {
            index = i;
        }    
    }

    return( (this.timeOutEvents[index].hour - this.timeInEvents[index].hour ) / 100)
}

function wagesEarnedOnDate(stringDate) {
    return this.payPerHour * hoursWorkedOnDate.call(this, stringDate)
}

function findEmployeeByFirstName(srcArray, firstName) {
    for (const i of srcArray) {
        if (i.firstName === firstName) {
            return i;
        }
    }
    return undefined;
}


function calculatePayroll(arrayOfObjs) {
    let sum = 0;
    for (const i of arrayOfObjs) {
        sum += allWagesFor.call(i);
    }
    return sum;
}
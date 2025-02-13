let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
//用递归函数 算出salary总数
function sumSalary(department) {
    if (Array.isArray(department)) { // 情况（1）
        return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
        //--------------如下是foreach写法-------------
        // let NUM = 0;
        // department.forEach((ele)=>{
        //   NUM =NUM+ele.salary;
        // })
        // return NUM;
        //----------------------------------------------
    } else { // 情况（2）
        let sum = 0;
        //枚举obj， object.value返回数组
        for (let subdep of Object.values(department)) {
            sum += sumSalary(subdep); // 递归调用所有子部门，对结果求和
        }
        return sum;
    }
}
console.log("----sumSalary---", sumSalary(company));
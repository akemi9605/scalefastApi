
function llamar() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(data => {
            const array = data.data;
            if (array.length != 0) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i].employee_salary > 100000) {
                        const lista = document.querySelector('#lista');
                        let employeeSalaryLow = array[i].employee_name;
                        let employee_salary = array[i].employee_salary;
                        lista.innerHTML +=`<li>${employee_salary}<li>`
                        console.log(employeeSalaryLow, 'Salary:', employee_salary);
                    }
                }
            }
        })
}

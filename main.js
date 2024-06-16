const add = document.querySelector('#add');
const coursename = document.querySelector('#course-name');
const unitLoad  = document.querySelector('#credits');
const grade = document.querySelector('#grade');
const tbody = document.querySelector('#tbody');
const table = document.querySelector('#table');
const calbutton = document.querySelector('#calbutton');
const clear = document.querySelector('#clear');
const tfoot = document.querySelector('#tfoot');

let gpArry = [];

table.style.display = "none";
calbutton.style.display = "none";
clear.style.display = "none";

add.addEventListener("click", () => {
    const tr = document.createElement('tr');
   
    const tdcoursename = document.createElement('td');
    tdcoursename.innerHTML = coursename.value;
   
    const tdcredits = document.createElement('td');
    tdcredits.innerHTML = unitLoad.value;
   
    const tdgrade = document.createElement('td');
    tdgrade.innerHTML = grade.options[grade.selectedIndex].text;

    tr.appendChild(tdcoursename);
    tr.appendChild(tdcredits);
    tr.appendChild(tdgrade);

    tbody.appendChild(tr);

    table.style.display = "table";
    calbutton.style.display = "inline-block";
    clear.style.display = "inline-block";

    gpArry.push({
        unitLoad: unitLoad.value,
        grade: grade.options[grade.selectedIndex].value
    });

    coursename.value = '';
    unitLoad.value = '';
    grade.selectedIndex = 0;
});

calbutton.addEventListener("click", () => {
    let unitLoads = 0,
        sumOfProductOfUnitLoadsAndGrades = 0;

    gpArry.forEach((result) => {
        unitLoads += parseInt(result.unitLoad);
        sumOfProductOfUnitLoadsAndGrades += parseInt(result.unitLoad) * parseInt(result.grade);
    });

    const tr = document.createElement("tr");
  
    const tdTotalUnitLoad = document.createElement("td");
    tdTotalUnitLoad.innerHTML = `Your total unit load is ${unitLoads}`;
  
    const tdGpa = document.createElement("td");
    tdGpa.setAttribute("colspan", "2");
    tdGpa.innerHTML = `Your GPA is ${(sumOfProductOfUnitLoadsAndGrades / unitLoads).toFixed(2)}`;
  
    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);
    
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
    tfoot.appendChild(tr);
});
  
clear.addEventListener("click", () => {
    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    table.style.display = "none";
    calbutton.style.display = "none";
    clear.style.display = "none";
});

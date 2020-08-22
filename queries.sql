-- Employees 
select * from Employees;

select employeeId, firstname, lastname, birthdate
from employees;

select employeeId, (firstname || ' ' || lastname) as Name, birthdate
from employees;

select employeeId, (firstname || ' ' || lastname) as Name, birthdate
from employees
where birthDate > '1965-01-01';  -- use single quotes for dates and strings 

/*
multiline
comments
*/


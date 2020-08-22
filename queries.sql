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

-- Products 
select * from products where price > 100;

select * from products where price >= 100 and price < 200;

-- select the 5 most expensive products on the catalog 
select * 
from products
order by price desc
limit 5;

-- select the 5 most cheapest products on the catalog 
select * 
from products
order by price
limit 5;

-- order by multiple columns 
select country, city, address, customerName from customers
order by country, city, customerName


-- categories 
-- Adding data 
insert into categories (categoryName, Description)
values('Lambda Swag', 'Awesome Lambda Memorabilia');

-- Add more than one set of Values 
insert into categories (categoryName, Description)
values('Books', 'Awesome Books'), ('Pastry', 'Cakes and Macaroons');

-- Filter List from Categories to 'lambda%' only
select * from categories
where categoryName like 'lambda%';

-- partial searches 
select * from categories
where categoryName like '%am%da%';



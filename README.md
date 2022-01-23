# Warehouse-Management
Warehouse management is a Frontend application to create, store, and search products with product location(box).

Angular cli version 8.3.19
------------------------------------------------------------------------------------------------

# Git Repository URL:
------------------
https://github.com/praveenkumarmidd/warehouse-management-fe.git

Steps to run (Git):
1. npm install
2. npm build --prod or ng build --prod
3. npm start or ng serve

Application URL:
http://localhost:4200/
------------------------------------------------------------------------------------------------

# Docker Hub Repository:
----------------------
docker image - praveenkumarmiddi/warehouse-management-frontend:v1

Step to run (docker image)

To Run only Front End Warehouse management:
1. docker pull praveenkumarmiddi/warehouse-management-frontend:v1

2. docker run -p 80:80 praveenkumarmiddi/warehouse-management-frontend:v1

To Run both Front end and Back end warehouse:
Execute the command in the "docker-compose -f docker-compose.yml up" (project root directory)

Application URL:
http://localhost:80
------------------------------------------------------------------------------------------------

# Application Functionality 

Create Box:
    Click on the create box link to create the box with capacity

Add Products:
    Click on the add products link to add the products to the mentioned box.

Search Products:
    Click on the search products link to search the add products with location(box)





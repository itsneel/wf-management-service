# Workflow management service
Workflow management service to allow management of data to cureated around workflow and perform CRUD on workflow resources

## Things to consider (future improvements):
- Unit Tests and Integration tests are not added. I have added libs for those but tests can be added with coverage reports.
- Swagger docs integration is not added. 
- Request data schema is not validated as of now. But can done so in a custom middleware or using external libs like 'express-json-validator-middleware'.

## Note:
- Each and every API is not added. But indicative APIs are added to show how others can be added in simillar fashion. 
- All cases for error handeling are not added in each and every place. But indicative comments are added to show and where they can be done.

## Installation
Install the dependencies and devDependencies and start the server.
```sh
cd <project folder root>
npm i
npm run dev
```
For Production, build the package and deploy it using libs like 'cluster' or a process monitor like 'supervisor' or ru nthe docker image (docker file added with the code base)
```
cd <project folder root>
npm i --production
npm run build
```

## Author
- Neelanshu Goyal

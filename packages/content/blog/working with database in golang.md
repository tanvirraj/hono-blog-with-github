this guide is focusing how to get start working with database in golang. 
we are going to learn about running a postgresql database, how to migrate them and how to use them in go using sqlc. 

first step is to install postgresql in your OS. if you are using macOS you can use postgresql app. 
letter i will be write about how to use pg in docker. 
Also we will install pgweb, a light weight db viewer, which is written in go. you can download binary. 

after installing pg and running you run psql from your terminal, that will open a pg connection. we can do all kind of thing with database administration level thing like creating/writing database. 

after that we will going to create a database. by running this command 
`CREATE DATABASE simplebank` here `simplebank` is our database name. 

we now have database, next step is schema migrations. we will migrate sql schema to db by running migrations . for migration we use `golang migrate` tools 
for mac, we can install binary by running this command 
`brew install golang-migrate`
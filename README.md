# Algorithm-Store
## Preparation Steps
1. If your folder has `./.idea/` ,Please `Delete` it.
2. Open this folder with `IDEA` 
3. Load the `Maven` by IDEA's plugin in `./backend`
4. In `Powershell`, you can  `cd`  in `./front_end` 
5. and then run `npm i`
6. In `./backend/src/main/resources/application.properties`, You can Change the `Path`(It is supposed to be this folders difinite path + `algorithms` or `crawlers`) and the Datasource's `username` and `password` and `url`
7. Open You Mysql and Create a `Schema` Whose name is inlined in the `url` you have just Changed
8. Run `algorithm.sql` in your Database's `console`
9. Run `BackendApplication` in `./backend/src/main/java/com/example/backend/BackendApplication.java`
10. Run `npm start` in `./front_end`
11. Open the Browser and see `Http://localhost:3000`
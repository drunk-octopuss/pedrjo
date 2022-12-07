# Patricks server
---
## Why?  
---
This project was created in order to learn how to create a basic **CRUD** server as well as how    
to use it with [Insomnia](https://insomnia.rest/) in order to interact with it.

### CRUD?  
---
C)reate  
R)ead  
U)pdate  
D)elete

### Designed purpose  
---
My server was designed to handle books, for example: 

```json  

{  
    "bookAuthor": "Leo Tolstoy",
    "bookTitle": "War and Peace",
    "bookYear": 1867
}  

```

...as well as the possibility to manipulate these (with the help of [uuid](https://www.npmjs.com/package/uuid)) in ways that a CRUD server is supposed to.

<img src="https://miro.medium.com/max/1400/1*A-HIbO79ImSNFy8_bkCcLg.jpeg" height="200" width="400"/>    

```  
[GET]       http://localhost:5000/books  
[GET]       http://localhost:5000/books/id  
[POST]      http://localhost:5000/books  
[DELETE]    http://localhost:5000/books/id  
[PATCH]     http://localhost:5000/books/id
```

Thanks for visiting my project!

/ Patrick
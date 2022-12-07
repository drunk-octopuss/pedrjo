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

### How to get started:
---
- Clone repo.
- Navigate to the workspace (the downloaded repo)
- Type: ``` npm start ```
- Nodemon should now start and listen on localhost, port 5000.
- Open Insomnia and use the links and methods posted below to test the CRUD functionality.  
```  
[GET]       http://localhost:5000/books         // Get the entire list of books.
[GET]       http://localhost:5000/books/id      // Get a specific book based off of its' ID.
[POST]      http://localhost:5000/books         // Add a book to the database (array) using the code snippet showcased above (see "Designed purpose" section).
[DELETE]    http://localhost:5000/books/id      // Delete a book based off of its' ID.
[PATCH]     http://localhost:5000/books/id      // Update a book based off of its' ID. Use part of the code snippet from the "Designed purpose" section.
                                                   For example:
                                                   {
                                                        "bookTitle": "Too Much War and Not Enough Peace"
                                                   }
```

Thanks for visiting my project!

/ Patrick
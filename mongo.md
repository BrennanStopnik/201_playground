# MongoDB Notes

## Databases

- SQL vs NoSQL
- SQL
    - Invented in the 70's, mainly toward business users and developers
    - Aggregate and study data
    - Organized by rows and columns

- Users
    - Name, Address, Email, Phone
    - Brennan, 420 Springside, Bstopnik@gmail.com, 1234456789

- MongoDB
    - Orgnaized by Document reference
    - Strength:
        - Mongo can accept new fields very easily and update all documents in the ravle with the new field. IE It is easy to make changes to your data after creating it

- Users Table
    - {
        name: Brennan,
        address: 420 Springside
        email: bstopnik@gmail.com,
        phone: 123456789
    }

- TL;DR
    - THe web development workd tands to work in MongoDB because it is very easy to change the shape of the ata after you create the database

## MongoDB

- Organization
    - Cluster
        - A cluster is the computerserver/data center that your database is running
        - WHen we connect to MongoDB, we are =making a real time 2 way SSH connection to the cluster in orer to communicate with our database
        - A cluster van have multuple databases
    - Database
        - The Database is the storage machanism of the cluster. IE The database is where we store our data for a specific project
    - Collection
        - The collection is the list of specific pieces of data that you are storing. EG FOr a BlogDB, wwe would store users, blogs, categories. 
    - Document
        - The document is the individual piece of data that we are storing, modifying and retrieving, EG Blog posts
        - Technically documents are stored as BSON, but you can just think of it as JSON

- _Note_: We will be using MongoDB Atlas which is the cloud based version of MongoDB

- When it comes to connecting to your Mongo cluster, generally we only want to whitelist IP addresses that we know are secure, this is a security measure. 
	- For us, it is easier to simply allow access from anywhere while we're learning MongoDB. But in the future, it is good practice to only whitelist your local IP address as well as any deployed application IP addresses.
- When we connect to our cluster, we will still need to provide a username + password which will act as a layer of security for us.
- Usually during development, we use GUI applications to connect to our database so that we can run queries and see our data directly. E.G. NoSQLBooster
- Connection string example (note <password> must be replaced with your password):
- mongodb+srv://jnissenbaum:<password>@codeimmersivescluster.d6fvp.mongodb.net/?retryWrites=true&w=majority
- Basic .find() query
	- db.users.find({})
  .projection({})
  .sort({_id:-1})
  .limit(100)
	- db is a global variable in our query playground (NoSQLBooster) that is a reference to our database (E.G. Users or Blogs)
	- users is the collection within our database that we are running the query against
	- .find({}) is the method we are invoking for the query
	- Then we can chain other methods onto .find({}) such as:
		- .projection({}) which will select specific fields to display
		- .sort({}) which will sort the result by some criteria
		- .limit(n) which will limit our result to n number of documents
- The .find({}) method takes a single object as its first argument, which can be used to query specific parts of our dataset. E.G. db.users.find({
	firstName: "James"
    }) will match all documents in our collection which has a firstName field that has the value of "James"

- _Note_: If we pass in an empty object {} into .find() it will return us the entire dataset
- Example query, find all documents whose lastModified date is greater than "2022-09-17T17:27:19.392Z"
	- db.users.find({
			lastModified: {
					$gt: "2022-09-17T17:27:19.392Z"
			}
		})
- Mongo Docs Cheat Sheet
	- https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
    

# MongoDB Notes - Day 2

- MongoDB has native types such as string, boolean, date, double(number), array, etc
- All functions in NoSQLBooster are just generated query scripts. Meaning that all functionality can be written and exectued by a user without needing NoSQLBooster
- What is the _id field?
	- Every single document in a collection must be unique and the _id field is how Mongo ensures that every document has a unique identifier
	- The _id field is an internal MongoDB field that is automatically generated for each document in the collection and it is used by Mongo to ensure that all documents are unique even if all the other fields have been duplicated in a different entry
	- The _id field MUST be a Mongo ObjectId type
	- _Recommendation_: Do not work with the _id field if you can because it ends up being more trouble than it's worth 
- What is a uuid?
	- A uuid is a unique identifier generated by us (the developers) that looks something like this: "edde9278-97d9-4bc1-9cf1-aa67c6269b38"
	- _Critically_: A uuid generated with a uuid library is guaranteed to be unique and it allows to identify a specific entry in our collection




    

mongodb+srv://bstopnik:CodeImmersives2022@codeimmersivescluster.vewk7it.mongodb.net/?retryWrites=true&w=majority
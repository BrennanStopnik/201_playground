## Restaurants Mongo Practice

- questions - 1, 5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 28

1. Write a MongoDB query to display all the documents in the collection restaurants.
db.restaurants.find({})
   .projection({})
   .sort({_id:-1})
   .limit(4000)

5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.restaurants.find(
    borough: "Bronx"
})
  .sort({_id:1})

6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.restaurants.find({
    borough: "Bronx"
})
  .sort({_id:1})
  .limit(5)

7. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.restaurants.find({
    borough: "Bronx"
})
  .skip(5)
  .sort({_id:1})
  .limit(5)

8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.restaurants.find({
    grades: {
        $elemMatch: {
            "score": {
                $gt: 90
            }
        }
    }
});
db.restaurants.find({"grades.score":{$gt: 90}})

9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
db.restaurants.find({
    grades: {
        $elemMatch: {
            "score": {
                $gt: 80, 
                $lt:100
            }
        }
    }
});

13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
db.restaurants.find({
    cuisine: {
        $ne: "American"
    },
    "grades.grade": "A",
    borough: {
        $ne: "Brooklyn"
    }
})
   .sort({_id:-1})

14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.

15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.

17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.

18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.

19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.

20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.

25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.

28. Write a MongoDB query to know whether all the addresses contains the street or not.
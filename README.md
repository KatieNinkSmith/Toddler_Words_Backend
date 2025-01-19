# Toddler_Words_Backend

This is the backend for my Toddler Words Application this will allow users to create a profile and add personal touches to the words their children are learning.

Users will be able to add to a few different catagories to create a new page for their children to go through like Family, Places, Things, and Clothes. The user can add personal images and audio files associated with the word they create for their child to learn. This helps with having a familiar voice and pictures form their personal world to associate with the words they are working on learning.

Users will also be able to create edit and delete their personal profiles.

I would like to make it so users can possibly add their own pictures to the categories already avalible in the application via the API and coded images from the front end.

I will also move the hard coded data from the frontend into the database.

The end points for the WORDS are:

GET: https://toddler-words-backend.onrender.com/api/words

This returns all created words in the database

GET: https://toddler-words-backend.onrender.com/api/words/:userid

This returns all the created words by a single user

GET: https://toddler-words-backend.onrender.com/api/words/:userid/:category

This returns all the created words in a specific category by a single user

POST: https://toddler-words-backend.onrender.com/api/words

This is the route to create a word the required body to send is;

name: ""
category: ""
user: userId

PUT: https://toddler-words-backend.onrender.com/api/words/:id

This route is to edit a word the required body is;

name: ""
category: ""
user: userId

DELETE: https://toddler-words-backend.onrender.com/api/words/:id

This route is to delete a word from the database

The end points for the USERS are:

POST: https://toddler-words-backend.onrender.com/api/users

This is the route to create a new user required body is;

name: ""
email: ""
password: ""

POST: https://toddler-words-backend.onrender.com/api/users/login

This is the route to log a user into the front end to display their created words required body is;

email: ""
password: ""

**_ need to add in the functionality for edit and delete of a user _**

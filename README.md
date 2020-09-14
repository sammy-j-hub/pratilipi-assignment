# pratilipi-assignment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

This project is developed for assessment for Pratilipi.

developed by: SAMRIDDHI JAISWAL

Deployed Link: https://pratilipi-blog.web.app/signin


## To run the project

In the project directory, you should run:


### `npm install`

Downloads all the required dependencies on your local machine.

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



## Understanding the code

### Technologies used
   - React.js for front-end development
   - Firebase firestore for back-end development
   - Firebase for deployment
   
### React.js
   - react -redux
   
### Firebase
   - I have made use of firebase's firestore for storing my backend data of users and stories.
   - Users table maintains the users who have signed up on the website, by storing the username and an array of story's IDs he has visited.
   - Stories table contains all the stories listed on the website. It stores the stories with their unique ID, each ID has the 'Content','title','total_read','cur_read' and 'Created At'
   - I'm making use of firebase authentication for signIn and signUp purposes.
   

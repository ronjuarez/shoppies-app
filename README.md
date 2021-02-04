# Shoppies - 2021 FrontEnd Web Developer Internship Application
---

Shoppies is a single page app where users can nominate 5 films using a Live Search that requests data from the OMDB API and saves it to thier local storage. App is deployed using Netlify at: https://theshoppyawards.netlify.app/.

## Front-End Tech Stack
* ReactJS
* Styled-Components
* classNames
* Axios


---

# To run shoppies locally:
1) Clone the [shoppies](https://github.com/ronjuarez/shoppies-app) front-end repo.
2) Installdependencies by running `npm i`.
3) Run app server using `npm start`

The app will run http://localhost:3000/

---

# Here is a demonstation of some of the [shoppies](https://theshoppyawards.netlify.app/) app features.

### 1) Search the OMDB API database by typing the name of your favorite movie to get the top ten results for your choice.
![First Screen](https://github.com/ronjuarez/shoppies-app/blob/master/shoppies-gifs/search.gif)

### 2) Click the Nominate button beneath the poster of your film choice to nominate it, disabling the button and updating the counter to reflect the number of nominations you have remaining. You can also choose to remove a film by clicking on the Remove button below the posters in your nomination ballot.
![Second Screen](https://github.com/ronjuarez/shoppies-app/blob/master/shoppies-gifs/addandremove.gif)

### 3) Once you've made a total of 5 choices the counter will indicate that you've reached your limit and ask you if you'd like to Save your ballot once it's filled, you won't be able to continue adding nominations.
![Third Screen](https://github.com/ronjuarez/shoppies-app/blob/master/shoppies-gifs/filledballot.gif)

### 4) If you choose to Save your selections they will be stored in your browsers local storage. You can also choose to Reset your choices and start again.
![Fourth Screen](https://github.com/ronjuarez/shoppies-app/blob/master/shoppies-gifs/saveandreset.gif)

### 5) If you navigate back to the page from the same browser you'll be able to see your nominations, otherwise if you navvigate from a different browser you won't be able to see them,
![Fifth Screen](https://github.com/ronjuarez/shoppies-app/blob/master/shoppies-gifs/viewnominations.gif)

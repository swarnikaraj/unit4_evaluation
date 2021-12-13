
const express= require('express')

const app= express()

const userController= require('./controller/user.controller')
const moviesController=require('./controller/movies.controller')
const showsController=require('./controller/shows.controller')
const seatController=require('./controller/seatController')

app.use(express.json())

// post /movies ( create movies with all details )
// get /movies ( get all movies for a particular actor )
app.use('/movies',moviesController)


// get /shows ( get all shows for a particular movie )

app.use('/shows',showsController)


// get /seats ( get all available seats for a show )

app.use('/seats',seatController)

// get /shows/nearest ( get all shows of a movie in the same location as the user with seat available )










// post /seat ( book seats for users and first check if the number of seats required by user is available and if yes then book it )




module.exports=app
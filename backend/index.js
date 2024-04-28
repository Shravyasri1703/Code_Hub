import express from 'express'
import userRoutes from '../backend/routes/user.routes.js'
import exploreRoutes from '../backend/routes/explore.routes.js'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send('hello')
})

app.use('/api/users', userRoutes)
app.use('/api/explore', exploreRoutes)

app.listen(5000, ()=>{
    console.log('Listening at 5000')
})
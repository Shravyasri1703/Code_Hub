import express from 'express'
import { getUserProfileAndRepos } from '../controlers/user.controler.js'

const router = express.Router()


router.get('/profile/:username', getUserProfileAndRepos)

export default router
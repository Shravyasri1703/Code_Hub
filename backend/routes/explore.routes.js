import express from 'express'
import { explorePopularRepos } from '../controlers/explore.controler.js'

const router = express.Router()

router.get('/repos/:language', explorePopularRepos)

export default router
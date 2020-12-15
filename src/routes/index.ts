import express from 'express'
import login from './login'
import logout from './logout'
import consent from './consent'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.use('/login', login)
router.use('/logout', logout)
router.use('/consent', consent)

export default router

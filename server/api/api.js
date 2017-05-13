const router = require('express').Router()
const userRouter = require('./user/userRoutes')
const categoryRouter = require('./category/categoryRoutes')
const postRouter = require('./post/postRoutes')

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/posts', postRouter)

module.exports = router

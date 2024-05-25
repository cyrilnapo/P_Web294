import express from 'express'
import { auth } from '../auth/auth.mjs'
import { User } from '../db/sequelize.mjs' // Assuming you have a User model defined in sequelize.mjs

const usersRouter = express()

usersRouter.get('/:id', auth, async (req, res) => {
  try {
    console.log(`Fetching user with ID: ${req.params.id}`)
    const user = await User.findByPk(req.params.id)
    if (user === null) {
      const message = "Le user demandé n'existe pas. Merci de réessayer avec un autre identifiant."
      console.log(message)
      return res.status(404).json({ message })
    }
    console.log(`User found: ${user.username}`)
    res.json(user)
  } catch (error) {
    const message = "Le user n'a pas pu être récupéré. Merci de réessayer dans quelques instants."
    console.error(`Error fetching user: ${error.message}`)
    res.status(500).json({ message, data: error.message })
  }
})

export { usersRouter }

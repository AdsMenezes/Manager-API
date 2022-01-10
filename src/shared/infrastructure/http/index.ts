import app from './server'

app.listen(process.env.API_PORT, () => {
  console.log('Server started!')
})

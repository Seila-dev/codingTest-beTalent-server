import { app } from './app'
import employeeRoutes from './routes/employees-routes'
import rolesRoutes from './routes/roles-routes'

const port = 3000

app.listen(port, () => {
    console.log(`HTTP Server Running! Server: http://localhost:${port}`)
})

// app uses
app.use('/employees', employeeRoutes)
app.use('/roles', rolesRoutes)
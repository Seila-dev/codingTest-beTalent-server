import { app } from './app'
import employeeRoutes from './routes/employees-routes'
import rolesRoutes from './routes/roles-routes'
import path from 'path'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const port = 3000

const publicPath = path.join(process.cwd(), 'uploads');
app.use('/uploads', express.static(publicPath));

app.listen(port, () => {
    console.log(`HTTP Server Running! Server: http://localhost:${port}`)
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/employees', employeeRoutes)
app.use('/roles', rolesRoutes)
import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma'

export class RolesController {
    async create(req: Request, res: Response){
        try {
            const { name } = req.body
            const role = await prisma.role.findFirst({
                where: {
                    name
                }
            })

            if(role) {
                res.status(409).json({ message: "Role already exists"})
                return
            }

            const newRole = await prisma.role.create({
                data: {
                    name
                }
            })

            res.status(201).json( newRole )
        } catch (error) {
            res.status(500).send({ message: "Error creating a new role"})
        }
    }

    async findAll(_: Request, res: Response){
        try {
            const roles = await prisma.role.findMany()
            res.status(200).json({ roles })
        } catch (error) {
            res.status(500).send({ message: "Error on finding all roles"})
        }
    }

    async delete(req: Request, res: Response){
        try {
            const id = req.params.id

            await prisma.role.delete({
                where: {
                    id: Number(id)
                }
            })
    
            res.status(200).send({ message: "Deleted with success" })     
        } catch (error) {
            res.status(500).send({ message: "Error on deleting role"})
        }
    }

    async update(req: Request, res: Response){
        try {
            const { id } = req.params
            const { name } = req.body

            const role = await prisma.role.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name
                }
            })
            
            res.status(200).json({ role })
        } catch (error) {
            res.status(500).send({ message: "Error on updating role"})
        }
    }
}
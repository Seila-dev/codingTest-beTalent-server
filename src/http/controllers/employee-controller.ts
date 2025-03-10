import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma'
import path from 'path'

export class EmployeesController {
    async create(req: Request, res: Response) {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return
        }
        try {
            const filePath = path.join(req.file.filename)
            const { name, admissionDate, phone, ra, roleId } = req.body
            const employee = await prisma.employee.findUnique({
                where: {
                    ra
                }
            })

            if (employee) {
                res.status(409).json({ message: "Employee already exists" })
                return
            }

            const newEmployee = await prisma.employee.create({
                data: {
                    name,
                    avatar: filePath,
                    admissionDate: new Date(admissionDate),
                    phone,
                    ra,
                    roleId: parseInt(roleId),
                },
                include: {
                    roles: true
                }
            })

            res.status(201).json(newEmployee)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Error creating a new employee" })
        }
    }

    async findAll(_: Request, res: Response) {
        try {
            const employees = await prisma.employee.findMany({
                include: {
                    roles: true
                }
            })
            res.status(200).json({ employees })
        } catch (error) {
            res.status(500).send({ message: "Error on finding all employees" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id

            await prisma.employee.delete({
                where: {
                    id: Number(id)
                }
            })

            res.status(200).send({ message: "Deleted employee with success" })
        } catch (error) {
            res.status(500).send({ message: "Error on deleting employee" })
        }
    }

    async update(req: Request, res: Response) {

        try {
            const { id } = req.params
            const { name, admissionDate, phone, ra, roleId } = req.body

            const currentEmployee = await prisma.employee.findUnique({
                where: { id: Number(id) }
            });

            if (!currentEmployee) {
                res.status(404).json({ message: 'Employee not found' })
                return
            }

            let filePath = ''

            if (req.file) {
                filePath = req.file.filename
            } else {
                filePath = currentEmployee.avatar
            }

            await prisma.employee.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name,
                    admissionDate: new Date(admissionDate),
                    phone,
                    ra,
                    roleId: parseInt(roleId),
                    avatar: filePath
                }
            })

            res.status(200).json({ message: 'Employee updated success' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Error on updating employee" })
        }
    }
}
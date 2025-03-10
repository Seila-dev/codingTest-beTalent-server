import { EmployeesController } from "../http/controllers/employee-controller";
import multer from 'multer'
import { Router } from "express";

const employeeRoutes = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage })

employeeRoutes.post("/", upload.single('file'), new EmployeesController().create)
employeeRoutes.get("/", new EmployeesController().findAll)
employeeRoutes.delete("/:id", new EmployeesController().delete)
employeeRoutes.put("/:id", upload.single('file'), new EmployeesController().update)

export default employeeRoutes
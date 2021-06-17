import axios from "axios"

export  default class Employeeservice{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employees/getbyid?id="+id)
    }
}
import React from "react";
import { Formik, Form, } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import AhmetTarıkTextInput from "../utilities/customFormControl/AhmetTarıkTextInput";

export default function EmployeeAdd() {
    const initialValues = { firstName: "", lastName: "", email: "", password: "" };

    const schema = Yup.object({
        firstName: Yup.string().required("Zorunlu alan!"),
        lastName: Yup.string().required("Zorunlu alan!"),
        email: Yup.string().email().required("Zorunlu alan!"),
        password: Yup.string().required("Zorunlu alan!")
      });
    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit = {(values)=>{
            console.log(values)
        }}
        >
          <Form className="ui form">
              <AhmetTarıkTextInput  className="ui form" name="firstName" placeholder="İsim"/>
              <AhmetTarıkTextInput  className="ui form" name="lastName" placeholder="Soyisim"/>
              <AhmetTarıkTextInput className="ui form" name="email" placeholder="Email"/>
              <AhmetTarıkTextInput className="ui form" name="password" placeholder="Parola"/>
            <Button color="blue" type="submit">Ekle</Button>
          </Form>
        </Formik>
    )
}

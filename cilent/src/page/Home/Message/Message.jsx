import React from 'react'
import './Message.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Message() {
    return (
        <div className='message'>
            <div className='message_text'>
                <h1>Register now and get a discount <span className='message_text_message'>50%</span> discount until 1 January</h1>
                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                <button>REGISTER NOW</button>
            </div>
            <div className='message_form'>
                <Formik
                    initialValues={{ coursname: '', category: '', degree: '' }}
                    validationSchema={Yup.object({
                        coursname: Yup.string()
                            .min(3, 'daha cox yaz')
                            .required('Burani doldur'),
                        category: Yup.string()
                            .min(3, 'daha cox yaz')
                            .required('Burani doldur'),
                        degree: Yup.string()
                            .min(3, 'daha cox yaz')
                            .required('Burani doldur'),

                    })}
                    onSubmit={(values) => {
                        alert(
                            values.coursname,

                        )
                    }}
                >
                    <Form className='forms'>
                        <h1>Search for your course</h1>


                        <Field name="coursname" type="text" placeholder='Course Name' />
                        <ErrorMessage name="coursname" />


                        <Field name="category" type="text" placeholder='Category' />
                        <ErrorMessage name="category" />


                        <Field name="degree" type="text" placeholder='Degree' />
                        <ErrorMessage name="degree" />

                        <button type="submit">SEARCH COURSE</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Message
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
function Add() {
    return (
        <Formik
            initialValues={{ productImg: '', productTitle: '', productText: '', userWork: '', userImg: '', userName: '', price: '' }}
            validationSchema={Yup.object({
                productImg: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                productTitle: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                productText: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                userWork: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                userImg: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                userName: Yup.string()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),
                price: Yup.number()
                    .min(3, 'daha cox yaz')
                    .required('Burani doldur'),


            })}
            onSubmit={(values) => {
                axios.post("http://localhost:5000/users/", values)

            }}
        >
            <Form className='forms'>
                <Field name="productImg" type="text" placeholder='productImg' />
                <ErrorMessage name="productImg" />

                <Field name="productTitle" type="text" placeholder='productTitle' />
                <ErrorMessage name="productTitle" />

                <Field name="productText" type="text" placeholder='productText' />
                <ErrorMessage name="productText" />

                <Field name="userImg" type="text" placeholder='userImg' />
                <ErrorMessage name="userImg" />

                <Field name="userName" type="text" placeholder='userName' />
                <ErrorMessage name="userName" />

                <Field name="userWork" type="text" placeholder='userWork' />
                <ErrorMessage name="userWork" />


                <Field name="price" type="number" placeholder='price' />
                <ErrorMessage name="price" />

                <button type="submit">Add</button>
            </Form>
        </Formik>
    )
}

export default Add
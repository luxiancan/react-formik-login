import React, { useState } from "react";
import axios from 'axios';
import { Formik, Form, useField } from "formik";
import { Button } from "@chakra-ui/core";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import * as Yup from "yup";
import FormInput from './FormInput';
import FormButton from './FormButton';
import { emailRegex } from '../utils/regex';

// 注册组件
function SignUp() {
  const initialValues = {username: '', email: '', password: ''};
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleSubmit = async (values) => {
    setSubmitLoading(true)
    try {
        const params = {
            'user': {  
                'username': values.username,  
                'email': values.email,
                'password': values.password
            }
        }
        const { data } = await axios.post('https://conduit.productionready.io/api/users', params)
        console.log(data);
        window.alert('注册成功')
    } catch (err) {
        const msg = JSON.stringify(err.response.data.errors)
        window.alert(msg)
    }
    setSubmitLoading(false)
  };
  const schema = Yup.object({
    username: Yup.string()
      .required("请输入用户名")
      .max(15, "用户名的长度不能大于15"),
    email: Yup.string()
      .required("请输入邮箱")
      .matches(emailRegex, '请输入正确的邮箱地址'),
    password: Yup.string()
      .required("请输入密码")
      .min(8, "密码的长度不能小于8")
      .max(16, "密码的长度不能大于16"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <FormInput name="username" placeholder="请输入用户名" icon={<FaUserAlt />} />
        <FormInput name="email" placeholder="请输入邮箱" icon={<FaEnvelope />} />
        <FormInput name="password" type="password" placeholder="请输入密码" icon={<FaLock />} />
        <Button _hover={{ bgColor: "tomato" }} w="100%" colorScheme="teal" mt="26px" type="submit" isLoading={submitLoading}>
          注册
        </Button>
      </Form>
    </Formik>
  );
}

export default SignUp;

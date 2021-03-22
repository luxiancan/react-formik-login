import React, { useState } from "react";
import axios from 'axios';
import { Formik, Form, useField } from "formik";
// import {
//     Input,
//     InputGroup,
//     Stack,
//     InputLeftAddon,
//     InputRightAddon,
//     FormHelperText,
//     RadioGroup,
//     Radio,
//     Select,
//     Switch,
//     FormLabel,
//     Flex,
//     Button,
//     FormControl
//   } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as Yup from "yup";
import FormInput from './FormInput';
import FormButton from './FormButton';
import { emailRegex } from '../utils/regex';

function Checkbox ({label, ...props}) {
  const [field, meta, helper] = useField(props);
  const { value } = meta;
  const { setValue } = helper;
  const handleChange = () => {
    const set = new Set(value);
    if (set.has(props.value)) {
      set.delete(props.value);
    }else {
      set.add(props.value);
    }
    setValue([...set])
  }
  return <div>
    <label htmlFor="">
      <input checked={value.includes(props.value)} type="checkbox" {...props} onChange={handleChange}/> {label}
    </label>
  </div>
}

// 登录组件
function SignIn() {
  const initialValues = {email: '', password: ''};
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleSubmit = async (values) => {
    setSubmitLoading(true)
    try {
        const params = {
            'user': {    
                'email': values.email,
                'password': values.password
            }
        }
        const { data } = await axios.post('https://conduit.productionready.io/api/users/login', params)
        console.log(data);
        window.alert('登录成功')
    } catch (err) {
        const msg = JSON.stringify(err.response.data.errors)
        window.alert(msg)
    }
    setSubmitLoading(false)
  };
  const schema = Yup.object({
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
        <FormInput name="email" placeholder="请输入邮箱" icon={<FaEnvelope />} />
        <FormInput name="password" type="password" placeholder="请输入密码" icon={<FaLock />} />
        
        {/* <Checkbox value="足球" label="足球" name="hobbies"/>
        <Checkbox value="篮球" label="篮球" name="hobbies"/>
        <Checkbox value="橄榄球" label="橄榄球" name="hobbies"/> */}

        {/* <input type="submit"/> */}

        {/* <FormButton text="登录" /> */}

        <Button _hover={{ bgColor: "tomato" }} w="100%" colorScheme="teal" mt="26px" type="submit" isLoading={submitLoading}>
          登录
        </Button>
      </Form>
    </Formik>
  );
}

export default SignIn;

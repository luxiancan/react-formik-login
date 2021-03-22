import React from "react";
import { Field, ErrorMessage } from "formik";
import { css } from '@emotion/core';


function FormInput(props) {
    const { name, placeholder, icon, type='text' } = props
    return (
        <div>
            <div css={inputStyle}>
                <i className="icon" children={icon} />
                <Field name={name} type={type} placeholder={placeholder} />
            </div>
            <p css={{color: '#ff3131', fontSize: 14}}>
                <ErrorMessage name={name} />
            </p>
        </div>
    );
}

const inputStyle = css`
  margin-top: 18px;
  position: relative;
  width: 100%;
  input {
    width: 100%;
    height: 42px;
    padding: 4px 12px 4px 34px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    font-size: 14px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    outline: none;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #969696;
  }
`

export default FormInput;

import React from 'react';
import { css } from '@emotion/core';

function FormButton(props) {
    const { text='提交', type='submit' } = props
    return (
        <button type={type} css={buttonStyle}>{text}</button>
    )
}

const buttonStyle = css`
    margin-top: 26px;
    color: #f00;
    width: 100%;
    padding: 8px 18px;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    display: block;
    outline: none;
    &:hover {
        background: #187cb7;
        transition: all .2s;
    }
`

export default FormButton;
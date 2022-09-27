import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const NewContactForm = styled(Form)`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 8px;
`

export const Input = styled(Field)`
    margin-bottom: ${p => p  ? 40 : 20}px;
`

export const Error = styled(ErrorMessage)`

`
import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    width: 300px;
    height: 75px;
    padding: 10px;
    background-color: rgba(255,255,255,0.3);
    border: 2px solid white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    font-size: 1rem;
    
`;

const Label = styled.label``;

const Button = styled.button`
    height: 40px;
    width: 40px;
    padding-top: 3px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #7345ad;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label></Label>
                <Input name="descricao" />
            </InputArea>
            <Button><i class="bi bi-caret-right"></i></Button>
        </FormContainer>
    )
}

export default Form;
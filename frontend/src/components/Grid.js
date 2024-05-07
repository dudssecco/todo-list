import React from "react";
import axios from "axios"
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";


export const Table = styled.table`
    width: 300px;
    padding: 10px;
    background-color: rgba(255,255,255,0.3);
    border: 2px solid white;
    border-radius: 20px;
    word-break: break-all;
`;

export const Thead = styled.thead`

`;

export const Tr = styled.tr`
    color: white
`;

export const Th = styled.th`
    text-align: start;
    border-bottom: 2px solid white;
    padding-bottom: 5px;
`;

export const Tbody = styled.tbody`

`;

export const Td = styled.td`
    padding-top: 15px
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")}
`;

const Grid = ({tasks}) => {
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Task</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {tasks.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.descricao}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid;
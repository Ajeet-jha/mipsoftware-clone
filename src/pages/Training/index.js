import React, { useState } from 'react'
import styled from 'styled-components';
import { course } from '../../resources/courseData'
import TransitionsModal from '../../components/Modal'
import parser from './library'

const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    width:100%
`;
const Courses = styled.div`
    width:30%;
    margin:10px;
`
const Title = styled.p`
    
`
const Image = styled.img`
    max-width:400px;
`

function Trainig() {
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState([]);

    const handleOpen = (i) => {
        setSelectedCourse([course[i]]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Container>
                {course.map((data, i) => (
                    <Courses key={i}>
                        <p>{data.courseName}</p>
                        <button
                            type="button" onClick={() => handleOpen(i)}
                        >Read More</button>
                    </Courses>
                ))}
            </Container>
            <TransitionsModal
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
                content={parser({ selectedCourse })}
            />
        </div>
    )
}

export default Trainig

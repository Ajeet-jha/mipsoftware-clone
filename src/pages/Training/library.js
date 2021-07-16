import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function parser({ selectedCourse }) {
    const parsedContent = selectedCourse.map((data, selectedId) => (
        <Container key={selectedId} style={{
            flexDirection: "row"
        }}>
            <Courses>
                <Title>
                    {data.age}
                </Title>
                <Image src={data.imgSrc} />
                <List component="nav">
                    {
                        data.topics.map((topic, ti) => (
                            <ListItem button key={ti}>
                                {topic}
                            </ListItem>
                        ))
                    }
                </List>
            </Courses>
        </Container>
    ))

    return parsedContent;
}

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

export default parser

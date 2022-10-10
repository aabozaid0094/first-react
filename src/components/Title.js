import { Container } from "react-bootstrap";

let Title = (props)=>{
    return(
        <Container className="py-3">
            <h1 className="title">{props.title}</h1>
        </Container>
    );
};
export default Title;
import { Container } from "react-bootstrap";

let Title = (props)=>{
    return(
        <div className="titlebar">
            <Container className="py-5">
                <h1 className="title">{props.title}</h1>
            </Container>
        </div>
    );
};
export default Title;
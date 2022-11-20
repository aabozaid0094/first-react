import { Container } from "react-bootstrap";

const Title = (props)=>{
    return(
        <div className={`titlebar${props.dark_schema?" dark-schema":" light-schema"}`}>
            <Container className="py-5">
                <h1 className="title">{props.title}</h1>
            </Container>
        </div>
    );
};
export default Title;
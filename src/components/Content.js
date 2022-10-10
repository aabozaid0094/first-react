import Container from 'react-bootstrap/Container';
let Content = ()=>{
    return(
        <Container>
            <div id="content" className='py-4'>
                <h2>Fun facts about ReactJS</h2>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke.</li>
                    <li>Has well over 100K stars on Github.</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </Container>
    );
};
export default Content;
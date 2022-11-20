import logo from '../images/logo.svg';
import Container from 'react-bootstrap/Container';

const Content = (props)=>{
    return(
        <main className={props.dark_schema?"dark-schema":"light-schema"} id="content">
            <section className='fun-facts py-5'>
                <Container>
                    <h2>Fun facts about ReactJS</h2>
                    <ul className='fun-facts-list'>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke.</li>
                        <li>Has well over 100K stars on Github.</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </Container>
                <div className='App-logo-wrapper'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </section>
        </main>
    );
};
export default Content;
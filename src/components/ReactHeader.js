import logo from '../images/logo.svg';

const ReactHeader = (props) => {
    return (
        <header className={`App-header${props.dark_schema?" dark-schema":" light-schema"}`}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
};

export default ReactHeader;

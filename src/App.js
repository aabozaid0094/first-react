import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ReactHeader from "./components/ReactHeader";
import Title from "./components/Title";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React from "react";

function App() {
    const [dark_schema, set_dark_schema] = React.useState(true);

    const handle_schema = (event) => {
        const dark_schema_checked = event.target.checked;
        set_dark_schema(()=>{return dark_schema_checked?true:false;})
    };

    return (
        <div className="App">
            <Header dark_schema={dark_schema} handle_schema={handle_schema} />
            <ReactHeader dark_schema={dark_schema} />
            <Title dark_schema={dark_schema} title="Home" />
            <Content dark_schema={dark_schema} />
            <Footer dark_schema={dark_schema} />
        </div>
    );
}

export default App;

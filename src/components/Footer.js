const Footer = (props)=>{
    return(
        <footer className={`p-3 text-center${props.dark_schema?" dark-schema":" light-schema"}`}>© 2022 @ A. Abo Zaid, All Rights Reserved.</footer>
    );
};
export default Footer;
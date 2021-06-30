import LoginForm from "../features/LoginForm/LoginForm";
import Page from "./Page/Page";

const PageHome =  ( props:any ) => (
    <Page {...props} pageTitle="Home">
        <LoginForm></LoginForm>
    </Page>
);
export default PageHome;
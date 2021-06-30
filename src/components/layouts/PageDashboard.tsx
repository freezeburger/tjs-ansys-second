import { BaseButton, CancelButton, ActionButton } from "../base";
import QuestionList from "../features/QuestionList/QuestionList";
import Page from "./Page/Page";

const PageDashboard =  ( props:any ) => (
    <Page {...props} pageTitle="Dashboard">
        <QuestionList></QuestionList>

    
        <ActionButton>Ask One</ActionButton>
        <CancelButton>Questions</CancelButton>

    </Page>
);
export default PageDashboard;
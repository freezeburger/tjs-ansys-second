

import QuestionForm from "../features/QuestionForm/QuestionForm";
import Page from "./Page/Page";

const PageAsk=  ( props:any ) => (
    <Page {...props} pageTitle="Ask a Questions">
        <QuestionForm></QuestionForm>
    </Page>
);
export default PageAsk;
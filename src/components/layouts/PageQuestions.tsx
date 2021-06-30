
import QuestionList from "../features/QuestionList/QuestionList";
import SearchBox from "../features/SearchBox/SearchBox";
import Page from "./Page/Page";

const PageQuestions =  ( props:any ) => (
    <Page {...props} pageTitle="Questions">
            {/* <SearchBox></SearchBox> */}
            <QuestionList></QuestionList>
    </Page>
);
export default PageQuestions;
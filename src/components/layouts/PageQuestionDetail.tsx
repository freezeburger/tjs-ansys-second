
import AnswerForm from "../features/AnswerForm/AnswerForm";
import QuestionListItem from "../features/QuestionListItem/QuestionListItem";
import Page from "./Page/Page";

interface PageQuestionDetailProps{
    id:number;
}

const PageQuestionDetail =  ( props:PageQuestionDetailProps ) => (
    <Page {...props} pageTitle="Question Detail">
        <h3>{props.id}</h3>
        <QuestionListItem></QuestionListItem>
        <AnswerForm></AnswerForm>
    </Page>
);
export default PageQuestionDetail;
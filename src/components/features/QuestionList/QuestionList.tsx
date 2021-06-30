import React from 'react';
import './QuestionList.css';

import { List as AntList,  } from 'antd';
import SearchBox from '../SearchBox/SearchBox';
import QuestionListItem from '../QuestionListItem/QuestionListItem';

const mockedQuestions = [
  {
    "id":1,
    "author":"Bill Benson",
    "title":"Question Title 1",
    "text":"Question Sample Text 1",
    "comments":[
      {
      "id":1,
      "author":"Internet User1",
      "text": "Comment Text 1"
      },
      {
        "id":2,
        "author":"Internet User2",
        "text": "Comment Text 2"
        }
    ]
  },
  {
    "id":2,
    "author":"Bob Morane",
    "title":"Question Title 2",
    "text":"Question Sample Text 2",
    "comments":[
      {
      "id":1,
      "author":"Internet User1",
      "text": "Comment Text 1"
      }
    ]
  }
]

const QuestionList = () => {

  const [questions, setQuestions] = React.useState(mockedQuestions);

  return(
    <>
      <AntList  
          header={<SearchBox />}
          bordered
          size="large"
          dataSource={questions}
          renderItem={ (item,idx) => <QuestionListItem item={item} key={item.id}/>} />
    </>
  )
};

export default QuestionList;

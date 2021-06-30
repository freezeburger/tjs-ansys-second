import React from 'react'
import { Question } from '../@interfaces/question'
import './QuestionListItem.css'

import {
  List as AntList,
  Comment as AntComment,
  Avatar as AntAvatar,
  Card as AntCard,
} from 'antd'

const avatarRootUrl = 'https://eu.ui-avatars.com/api/?name='

interface QuestionListItemProps {
  item: Question
}
const QuestionListItem = (props: QuestionListItemProps) => {
  
  const [visibleComments, setVisibleComments] = React.useState(false)
  const { item } = props

  const avatarUrl = avatarRootUrl + item.author.replace(' ', '+');

  const toggle = () => setVisibleComments(!visibleComments);

  return (
    <>
      <AntList.Item>
        <AntList.Item.Meta
          avatar={<AntAvatar src={avatarUrl} />}
          title={
            <a onClick={toggle} href="#">
              {item.title}
            </a>
          }
          description={item.text}
        />
        {visibleComments && (
          <AntCard>
            {item.comments.map((comment) => (
              <AntComment
                author={<em>{comment.author}</em>}
                key={comment.id}
                avatar={
                  <AntAvatar
                    src={ avatarRootUrl + comment.author.replace(' ', '+') }
                    alt={comment.author}
                  />
                }
                content={<p>{comment.text}</p>}
              />
            ))}
          </AntCard>
        )}
      </AntList.Item>
    </>
  )
}
QuestionListItem.defaultProps = {
  item: {
    id: 1,
    author: 'Bill Benson',
    title: 'Question Title 1',
    text: 'Question Sample Text 1',
    comments: [
      {
        id: 1,
        author: 'Internet User1',
        text: 'Comment Text 1',
      },
      {
        id: 2,
        author: 'Internet User2',
        text: 'Comment Text 2',
      },
    ],
  },
}

export default QuestionListItem

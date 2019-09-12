import React from 'react'
import { Link } from 'react-router-dom'
import './note.scss'
const NoteList = (match) => {
  const listData = [
    {
      id: '1',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '2',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '3',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '4',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '5',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '6',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    },
    {
      id: '7',
      subTitle: '文章标题文章标题文章标题文章标题',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
    }
  ]
  const listItems = listData.map((item) =>
    <div className="note-list-item" key={item.id}>
      <div className="sub-title">{item.subTitle}</div>
      <div className="content">{item.content}</div>
    </div>
  )
  return (
    <div>
      <div className="note-list">
        <Link to='/NoteDetails'>{listItems}</Link>
      </div>
    </div>
  )
}

export default class Note extends React.Component {
  render () {
    return (
      <NoteList />
    )
  }
}
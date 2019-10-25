import './travel.scss'
import React from 'react'
import { List, Avatar, Icon } from 'antd'
import { articles } from '@/api/travel'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);



// const addArticle = () => {
//   const data = {
//     title: 'myAddArticle',
//     avatar: 'why',
//     description: '通过添加生成的数据通过添加生成的数据通过添加生成的数据通过添加生成的数据',
//     content: '通过添加生成的数据通过添加生成的数据通过添加生成的数据通过添加生成的数据',
//     articleImage: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
//   }
//   fetch('http://192.168.88.111:9000/article/addArticle', {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'user-agent': 'Mozilla/4.0 MDN Example',
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // manual, *follow, error
//     referrer: 'no-referrer', // *client, no-referrer
//   }).then(response => {
//     return response.json() // parses response to JSON
//   }).then(res => {
//     console.log(res)
//   })
// }

class Travel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          href: 'http://ant.design',
          title: `ant design part`,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        }
      ]
    }
  }
  getArticles () {
    const _this = this
    articles().then(res => {
      console.log(res)
      _this.setState({
        listData: res.data
      })
    })
  }
  componentDidMount () {
    this.getArticles()
    // addArticle()
  }
  render () {
    return (
      <div className="travel">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.state.listData}
          footer={
            <div>
              {/* <b>ant design</b> footer part */}
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                // <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
              }>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description} />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default Travel
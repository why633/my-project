import './travel.scss'
import React from 'react'
import { List, Avatar, Icon } from 'antd';
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const getArticles = () => {
  fetch('http://192.168.88.111:9000/article/getArticle', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors',
    cache: 'no-cache'
  }).then(res => {
    return res.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (e) {
    console.log('error' + e);
  });
}

const addArticle = () => {
  const data = {
    title: 'myAddArticle',
    avatar: 'why',
    description: '通过添加生成的数据通过添加生成的数据通过添加生成的数据通过添加生成的数据',
    content: '通过添加生成的数据通过添加生成的数据通过添加生成的数据通过添加生成的数据',
    articleImage: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  }
  fetch('http://192.168.88.111:9000/article/addArticle', {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response => {
    return response.json() // parses response to JSON
  }).then(res => {
    console.log(res)
  })
}

class Travel extends React.Component {
  componentDidMount () {
    getArticles()
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
          dataSource={listData}
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
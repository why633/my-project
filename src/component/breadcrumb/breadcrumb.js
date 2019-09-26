import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './breadcrumb.scss'
//具体导航的名称
const breadcrumbNameMap = {
  '/HomePage': '首页',
  '/Note': '笔记',
  '/NoteDetails': '笔记 / 详情',
  '/Travel': '在路上',
  '/Others': '其他'
}

const MyBreadcrumb = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
  ].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb className='breadcrumb'>{breadcrumbItems}</Breadcrumb>
  );
});
export default MyBreadcrumb
import { _get } from '@/utils/fetch'
/**
 * 文章列表
 */
export function articles () {
  return _get('/article/getArticle')
}
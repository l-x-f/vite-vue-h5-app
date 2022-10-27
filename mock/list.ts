/* cSpell:disable */

import type { MockMethod } from 'vite-plugin-mock'
import { Random, mock } from 'mockjs'

const count = 1000
const List = [...new Array(count)].map(() => {
  return mock({
    id: '@id',
    timestamp: +Random.date('T'),
    LastEditTime: +Random.date('T'),
    updateTime: '@datetime',
    'Rot_Offset|1': [0, 90, 180, 270],
    CenterOffset: '@float(0, 1)' + ',' + '@float(0, 1)',
    'PKG_Type|1': ['SMD', 'THT', 'OTHER'],
    author: '@first',
    reviewer: '@first',
    jobName: '@first',
    createBy: '@first',
    updateBy: '@first',
    ShapeName: '@ctitle(3, 4)',
    title: '@ctitle(3, 4)',
    PartNumber: '@first(1, 10)',
    Editor: '@ctitle(3, 4)',
    usermenuName: '@ctitle(3, 4)',
    ShapemenuName: '@ctitle(5, 10)',
    menuName: '@ctitle(5, 10)',
    Opration: '@ctitle(5, 10)',
    email: '@email',
    content_short: '@cparagraph(1,3)',
    content: '@cparagraph(100,200)',
    hobby: '@cparagraph(100,200)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': [0, 1, 2, 3],
    'StateFlag|1': [0, 1, 2, 3],
    'status|1': ['published', 'draft'],
    code: '@title',
    display_time: '@datetime',
    createTime: '@datetime',
    updatedAt: '@datetime',
    EditTime: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    'image|1': [
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
    ],
    platforms: ['a-platform'],
    money: '@integer(1, 3e10)',
    buttonKey: 'normal'
  })
})

// 获取列表
const getList = {
  url: '/api/list',
  type: 'get',
  timeout: 0,
  response: ({ query }: any) => {
    const { importance, type, title, page = 1, pageSize = 20, sort } = query
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter(
      (item, index) => index < pageSize * page && index >= pageSize * (page - 1)
    )
    return {
      code: 200,
      success: true,
      data: { result: pageList, total: mockList.length }
    }
  }
}

const server = [
  // 获取列表
  getList
]

export default server as MockMethod[]

import Mock from 'mockjs'

let data = [
            {
                name: '张三',
                span: '今天天气很好',
                attention: '关注',
                praise: 12,
                id:'1'
            }, {
                name: 'ls',
                span: '今天下雨了',
                attention: '关注',
                praise: 12,
                id: '2'
            }
        ]

Mock.mock('/index', () => {
    return {
        code: 1,
        data: data
    }
})

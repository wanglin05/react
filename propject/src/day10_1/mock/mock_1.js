import Mock from 'mockjs'

let data = [
            {
                title: '花王',
                pic: 'https://img01.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01picsos.sogoucdn.com%2F34af9247cf890fb7&appid=122',
                id:'1'
            }, {
                title: '贝亲',
                pic: 'https://img03.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi03picsos.sogoucdn.com%2F89c3eab651d41f86&appid=122',
                id: '2'
            }, {
                title: '维达',
                pic: 'https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01picsos.sogoucdn.com%2Fd058eae546948ba6&appid=122',
                id: '3'
            }, {
                title: '好奇',
                pic: 'https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02picsos.sogoucdn.com%2F26d7ad2b41f50f3d&appid=122',
                id: '4'
            }
        ]

Mock.mock('/search', () => {
    return {
        code: 1,
        data: data
    }
})


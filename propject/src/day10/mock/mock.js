import Mock from 'mockjs'

let data = [
            {
                name: '流浪地球',
                id:'1'
            }, {
                name: '怪化猫',
                id: '2'
            }, {
                name: '红辣椒',
                id: '3'
            }, {
                name: '林子大了',
                id: '4'
            }, {
                name: '龙虎斗',
                id: '5'
            }
        ]

Mock.mock('/movie/hot', () => {
    return {
        code: 1,
        data: data
    }
})

Mock.mock('/detail/movie', ({body}) => {
    let newId = JSON.parse(body).id;
    return {
        code:1,
        data: data.filter(v => v.id === newId)[0]
    }
})
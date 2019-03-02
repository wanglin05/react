import Mock from 'mockjs'

let data = [
            {
                title: '超长待机45天',
                span: '兔头妈妈甄选 驱蚊扣4个装（恐龙*2 西瓜*2）',
                pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
                bought:'已购3102件',
                price: 49.00,
                id:'1'
            }, {
                title: '精华液超多',
                span: '日本·肌美精 Krecie 超浸透3D抗老化补水面膜 30ml*4偏',
                pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
                bought:'已购312件',
                price: 155.00,
                id: '2'
            }, {
                title: '剖腹产妈妈必选',
                span: '芭克 kelo-cote 刮胶如皋15g淡化疤痕',
                pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
                bought:'已购86件',
                price: 358.00,
                id: '3'
            }, {
                title: '小公主都爱',
                span: '韩国 儿童物理遮阳伞防晒帽子',
                pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
                bought:'已购31件',
                price: 49.00,
                id: '4'
            }
        ]

Mock.mock('/homePage', () => {
    return {
        code: 1,
        data: data
    }
})

Mock.mock('/detail/homePage', ({body}) => {
    let newId = JSON.parse(body).id;
    return {
        code:1,
        data: data.filter(v => v.id === newId)[0]
    }
})
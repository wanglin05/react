import Mock from 'mockjs';

Mock.mock('/data', () => {
    return [{
            name: '女士 附件包',
            pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
            type: '粉紫星星波浪印花',
            price: 312
        },
        {
            name: '女士手表',
            pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
            type: '10234543',
            price: 344
        },
        {
            name: '电子书阅读器',
            pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201902/zzpic16636.jpg',
            type: '8GB 单机黑色',
            price: 345
        }
    ]
})

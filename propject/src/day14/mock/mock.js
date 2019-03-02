import Mock from 'mockjs';

Mock.mock('/data', () => {
    return [{
            name: '天兰兰1',
            rank: '新晋妈妈',
            type: '现在要是干点儿和大家不一样的事儿，还是挺难，挺无语的',
            time: 1,
            isCore: false,
            praise: 21,
            isPraise: false,
        },
        {
            name: '天兰兰2',
            rank: '新晋妈妈',
            type: '现在要是干点儿和大家不一样的事儿，还是挺难，挺无语的',
            time: 1,
            isCore: false,
            praise: 21,
            isPraise: false,
        },
    ]
})

import Mock from 'mockjs';

const data=[
    {
        name:'kiping 童趣萌猴 女士 附件包',
        type:'奥斯卡劳动法哈单身快乐话费卡多少',
        pic:132,
        num:1,
        checked:false,
    },{
        name:'ASICS 亚瑟士 女 跑步鞋',
        type:'我问饿哦日哦覅偶都是发货快熊',
        pic:256,
        num:1,
        checked:false,
    },{
        name:'TID 瑞典品牌 石英女士手表',
        type:'长信科技牛粪比基尼及',
        pic:491,
        num:1,
        checked:false,
    },{
        name:'全新亚马逊 电子书阅读器',
        type:'操心，分撒刁分为后哦非农地产',
        pic:998,
        num:1,
        checked:false,
    }
]


Mock.mock('/data',()=>{
    return data
})

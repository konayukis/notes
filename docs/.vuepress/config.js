module.exports = {
    title: 'yuki个人笔记',
    description: 'Just playing around',
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: '更新时间',
        logo: '/assets/img/1.jpg',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '我的臭弟弟',
                items: [
                    { text: '公开处刑', link: '/guide/photo/' }
                ]
            },
            { text: '关于我', link: '/about/' },
        ],
        sidebar: {
            '/zh/guide/': [
                '',
                'test'
            ],
            '': [''],
        }
    }
}
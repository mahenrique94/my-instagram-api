'use strict'
const faker = require('faker/locale/pt_BR')
const uuid = require('uuid')

const usersId = {
    fake1: uuid.v4(),
    fake2: uuid.v4(),
    fake3: uuid.v4(),
    fake4: uuid.v4(),
    matheus: uuid.v4(),
}

module.exports = {
    down: queryInterface => queryInterface.bulkDelete('users', null, {}),
    up: queryInterface =>
        queryInterface.bulkInsert('users', [
            {
                created_at: new Date(),
                email: 'matheushcastiglioni@gmail.com',
                id: usersId.matheus,
                password:
                    // eslint-disable-next-line
                    '91f3290390070405cb00d5f0bd3f1162952c63823bba3c76222a796df883f1c4c0f69d0a6e37f7860a55c3f548b1393a4a6db75f9367620a4d9fea33f6803aa355e27d8a9fa07c60cc0f5478588ba55a20fc52bbb1f4b2c9ed03e12f0a62bd9dbfee9f967354404cbb74f15594b98d02066f7885afcc87a303a8eb3339d53a7ec504010eb6ebc2d534f0cf4cbae9bf2dd1052852c7ca88f1f7c9c6bc57ac5426c8f11a018ab66ed344719333eed71a3f4cdc5a6dce526f3a63322df3ffc7c2900294b31befdee4e5fa52c4cb23fad9f7cbe54032f83fc6bbd8a5604b52064f8fac64011d0b5f789c889aa57450e846fa1d45e0f10314a653bad63372adf3647a',
                salt:
                    // eslint-disable-next-line
                    '328c8fb829aa9ea76122b6bdab1521d118aa8eddac591c7502ad4d4ebae72d5f939da2eb8df6e9240fa4f3cf098e312d99337d87006a023649deec0e39b3690f',
                updated_at: new Date(),
                username: 'mahenrique94',
            },
            {
                created_at: new Date(),
                email: faker.internet.email().toLowerCase(),
                id: usersId.fake1,
                password:
                    // eslint-disable-next-line
                    '91f3290390070405cb00d5f0bd3f1162952c63823bba3c76222a796df883f1c4c0f69d0a6e37f7860a55c3f548b1393a4a6db75f9367620a4d9fea33f6803aa355e27d8a9fa07c60cc0f5478588ba55a20fc52bbb1f4b2c9ed03e12f0a62bd9dbfee9f967354404cbb74f15594b98d02066f7885afcc87a303a8eb3339d53a7ec504010eb6ebc2d534f0cf4cbae9bf2dd1052852c7ca88f1f7c9c6bc57ac5426c8f11a018ab66ed344719333eed71a3f4cdc5a6dce526f3a63322df3ffc7c2900294b31befdee4e5fa52c4cb23fad9f7cbe54032f83fc6bbd8a5604b52064f8fac64011d0b5f789c889aa57450e846fa1d45e0f10314a653bad63372adf3647a',
                salt:
                    // eslint-disable-next-line
                    '328c8fb829aa9ea76122b6bdab1521d118aa8eddac591c7502ad4d4ebae72d5f939da2eb8df6e9240fa4f3cf098e312d99337d87006a023649deec0e39b3690f',
                updated_at: new Date(),
                username: faker.internet.userName().toLowerCase(),
            },
            {
                created_at: new Date(),
                email: faker.internet.email().toLowerCase(),
                id: usersId.fake2,
                password:
                    // eslint-disable-next-line
                    '91f3290390070405cb00d5f0bd3f1162952c63823bba3c76222a796df883f1c4c0f69d0a6e37f7860a55c3f548b1393a4a6db75f9367620a4d9fea33f6803aa355e27d8a9fa07c60cc0f5478588ba55a20fc52bbb1f4b2c9ed03e12f0a62bd9dbfee9f967354404cbb74f15594b98d02066f7885afcc87a303a8eb3339d53a7ec504010eb6ebc2d534f0cf4cbae9bf2dd1052852c7ca88f1f7c9c6bc57ac5426c8f11a018ab66ed344719333eed71a3f4cdc5a6dce526f3a63322df3ffc7c2900294b31befdee4e5fa52c4cb23fad9f7cbe54032f83fc6bbd8a5604b52064f8fac64011d0b5f789c889aa57450e846fa1d45e0f10314a653bad63372adf3647a',
                salt:
                    // eslint-disable-next-line
                    '328c8fb829aa9ea76122b6bdab1521d118aa8eddac591c7502ad4d4ebae72d5f939da2eb8df6e9240fa4f3cf098e312d99337d87006a023649deec0e39b3690f',
                updated_at: new Date(),
                username: faker.internet.userName().toLowerCase(),
            },
            {
                created_at: new Date(),
                email: faker.internet.email().toLowerCase(),
                id: usersId.fake3,
                password:
                    // eslint-disable-next-line
                    '91f3290390070405cb00d5f0bd3f1162952c63823bba3c76222a796df883f1c4c0f69d0a6e37f7860a55c3f548b1393a4a6db75f9367620a4d9fea33f6803aa355e27d8a9fa07c60cc0f5478588ba55a20fc52bbb1f4b2c9ed03e12f0a62bd9dbfee9f967354404cbb74f15594b98d02066f7885afcc87a303a8eb3339d53a7ec504010eb6ebc2d534f0cf4cbae9bf2dd1052852c7ca88f1f7c9c6bc57ac5426c8f11a018ab66ed344719333eed71a3f4cdc5a6dce526f3a63322df3ffc7c2900294b31befdee4e5fa52c4cb23fad9f7cbe54032f83fc6bbd8a5604b52064f8fac64011d0b5f789c889aa57450e846fa1d45e0f10314a653bad63372adf3647a',
                salt:
                    // eslint-disable-next-line
                    '328c8fb829aa9ea76122b6bdab1521d118aa8eddac591c7502ad4d4ebae72d5f939da2eb8df6e9240fa4f3cf098e312d99337d87006a023649deec0e39b3690f',
                updated_at: new Date(),
                username: faker.internet.userName().toLowerCase(),
            },
            {
                created_at: new Date(),
                email: faker.internet.email().toLowerCase(),
                id: usersId.fake4,
                password:
                    // eslint-disable-next-line
                    '91f3290390070405cb00d5f0bd3f1162952c63823bba3c76222a796df883f1c4c0f69d0a6e37f7860a55c3f548b1393a4a6db75f9367620a4d9fea33f6803aa355e27d8a9fa07c60cc0f5478588ba55a20fc52bbb1f4b2c9ed03e12f0a62bd9dbfee9f967354404cbb74f15594b98d02066f7885afcc87a303a8eb3339d53a7ec504010eb6ebc2d534f0cf4cbae9bf2dd1052852c7ca88f1f7c9c6bc57ac5426c8f11a018ab66ed344719333eed71a3f4cdc5a6dce526f3a63322df3ffc7c2900294b31befdee4e5fa52c4cb23fad9f7cbe54032f83fc6bbd8a5604b52064f8fac64011d0b5f789c889aa57450e846fa1d45e0f10314a653bad63372adf3647a',
                salt:
                    // eslint-disable-next-line
                    '328c8fb829aa9ea76122b6bdab1521d118aa8eddac591c7502ad4d4ebae72d5f939da2eb8df6e9240fa4f3cf098e312d99337d87006a023649deec0e39b3690f',
                updated_at: new Date(),
                username: faker.internet.userName().toLowerCase(),
            },
        ]),
    usersId,
}

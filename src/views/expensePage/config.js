export const getMonthData = () => {
    return {
        tiltle: '每月用度预算表',
        describe: '',
        list: [
          {
            label: "餐饮",
            prop: 'eatAndDrink',
            value: 1800,
            tip: '1500（伙食50 * 30日）+300（零食或大餐X * N次）'
          },
          {
            label: "出行",
            prop: 'goOut',
            value: 250,
            tip: '220（通勤费20 * 22工作日）+30（出行X * N次）'
          },
          {
            label: "房租服务",
            prop: 'roomWECharge',
            value: 2000,
            tip: '1600（房租）+100（网费）+300（水电）'
          },
          {
            label: "充值缴费和剪头",
            prop: 'paymentAndHaircut',
            value: 150,
            tip: '50（话费）+6（网络会员）+10（外卖会员）+84（其他会员）'
          },
          {
            label: "休闲娱乐",
            prop: 'amusement',
            value: 2000,
            tip: ''
          },
        ]
    }
}

export const getSeasonData = () => {
    return {
        tiltle: '每季用度预算表',
        describe: '2~4月为春季，5~7月为夏季，8~10月为秋季，11~1月为冬季。',
        list: [
          {
            label: "生活日66666666666  用",
            prop: 'everydayUse',
            value: 1000,
            tip: '洗漱用品（牙膏、牙刷）+洗浴用品（毛巾、沐浴露、洗发水、清洗剂）+清洁用品（洗衣粉、清洁剂等）+日用品（刮胡刀、花露水、润肤油等）'
          },
          {
            label: "服饰",
            prop: 'clothing',
            value: 1000,
            tip: '上衣（T恤、衬衫、外套、风衣、羽绒服）+裤子（短裤、长裤）+鞋子+内衣（内裤+袜子）'
          },
        ]
    }
}

export const getYearData = () => {
    return {
        tiltle: '每年用度预算表',
        describe: '当年的2月到下年1月为一年。',
        list: [
          {
            label: "医疗保健",
            prop: 'MedicalHealth',
            value: 2500,
            tip: '800（眼镜）+500（全面体检）+200（洗牙）+1000（其他）'
          },
          {
            label: "电子产品",//购物
            prop: 'electronicProduct',
            value: 10000,
            tip: '3000（手机）+2000（平板电脑）+5000（电脑、笔记本电脑、电子手表、电子称、电子词典、其他电子产品、电子游戏等）'
          },
          {
            label: "旅游",//文体教育
            prop: 'tour',
            value: 4000,
            tip: '礼物+礼金+红包+旅游+其他不明账单'
          },
          {
            label: "礼物礼金",//红包
            prop: 'gift',
            value: 8000,
            tip: '礼物+礼金+红包+旅游+其他不明账单'
          },
          {
            label: "回家路费",//其他支出
            prop: 'HomeFare',
            value: 1500,
            tip: '1000（高铁票500 * 2次）+200（大巴车费100 * 2次）+40(出租车20 * 2次) + 260（其他）'
          },
          {
            label: "搬家费用", //其他支出
            prop: 'houseMovingCost',
            value: 3000,
            tip: '1000（搬家费500 * 2次）+2000（日用家居）'
          },
          {
            label: "其他",//其他支出
            prop: 'other',
            value: 0,
            tip: '其他不明账单'
          },
        ]
    }
}

export const getMonthlyCostData = () => {
  return[
    //月
    //  {
    //   roomWECharge: 0,//住房服务
    //   eatAndDrink: 0,//吃喝
    //   goOut: 0,//出行
    //   paymentAndHaircut: 0,//充值缴费剪头
    //   everydayUse: 0,//日用品
    //   amusement: 0,//休闲娱乐
    //   clothing: 0,//服装
    //   HomeFare: 0,//回家路费
    //   HumanRelations: 0, //人情往来
    //   MedicalHealth: 0,//医疗健康
    //   electronicProduct: 0,//电子产品
    //   other: 0
    // },

    //1月
    // {
    //   roomWECharge: 2010,//住房服务
    //   eatAndDrink: 2439.28,//吃喝
    //   goOut: 173.58,//出行
    //   paymentAndHaircut: 172.8,//充值缴费剪头
    //   everydayUse: 111.61,//日用品
    //   amusement: 3471,//休闲娱乐
    //   clothing: 0,//服装
    //   HomeFare: 0,//回家路费
    //   HumanRelations: 106.5, //人情往来
    //   MedicalHealth: 327.98,//医疗健康
    //   electronicProduct: 0,//电子产品
    //   other: 0,
    // },
    //2月
    {
      roomWECharge: 1998,//住房服务
      eatAndDrink: 765.59,//吃喝
      goOut: 27.17,//出行
      paymentAndHaircut: 87.57,//充值缴费剪头
      everydayUse: 1078.22,//日用品
      amusement: 5094.98,//休闲娱乐
      clothing: 1450.8,//服装
      HomeFare: 2093.2,//回家路费
      MedicalHealth: 0,//医疗健康
      electronicProduct: 5072,//电子产品
      tour: 1586.18, //旅游-文体教育
      gift: 6584.7, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 0
    },
    //3月
    {
      roomWECharge: 1904,//住房服务
      eatAndDrink: 1816.53,//吃喝
      goOut: 155.75,//出行
      paymentAndHaircut: 64.68,//充值缴费剪头
      everydayUse: 364.10,//日用品
      amusement: 2450,//休闲娱乐
      clothing: 225,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 383.48,//医疗健康
      electronicProduct: 48.5,//电子产品
      tour: 0, //旅游-文体教育
      gift: 0, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 0
    },
    //4月
    {
      roomWECharge: 2035,//住房服务
      eatAndDrink: 2216.27,//吃喝
      goOut: 218.5,//出行
      paymentAndHaircut: 76.82,//充值缴费剪头
      everydayUse: 72.76,//日用品
      amusement: 2124,//休闲娱乐
      clothing: 123,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 0,//医疗健康
      electronicProduct: 300,//电子产品
      tour: 0, //旅游-文体教育
      gift: 0, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 0
    },
    //5月
    {
      roomWECharge: 2067.5,//住房服务
      eatAndDrink: 1854.27,//吃喝
      goOut: 266.3,//出行
      paymentAndHaircut: 129.58,//充值缴费剪头
      everydayUse: 35.85,//日用品
      amusement: 1805,//休闲娱乐
      clothing: 0,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 0,//医疗健康
      electronicProduct: 3534.5,//电子产品
      tour: 0, //旅游-文体教育
      gift: 100, //礼品-红包
      houseMovingCost: 1723.95, //搬家费用
      other: 1550
    },
    //6月
    {
      roomWECharge: 1434.5,//住房服务
      eatAndDrink: 1853.27,//吃喝
      goOut: 210,//出行
      paymentAndHaircut: 180.59,//充值缴费剪头
      everydayUse: 342.98,//日用品
      amusement: 2919,//休闲娱乐
      clothing: 213.93,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 0,//医疗健康
      electronicProduct: 4505.11,//电子产品
      tour: 0, //旅游-文体教育
      gift: 837, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 0
    },
    //7月
     {
      roomWECharge: 1643,//住房服务
      eatAndDrink: 1840.02,//吃喝
      goOut: 230,//出行
      paymentAndHaircut: 97.99,//充值缴费剪头
      everydayUse: 286.31,//日用品
      amusement: 2800,//休闲娱乐
      clothing: 298,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 0,//医疗健康
      electronicProduct: 219.39,//电子产品
      tour: 0, //旅游-文体教育
      gift: 0, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 515.3
    },
    //8月
     {
      roomWECharge: 1700.25,//住房服务
      eatAndDrink: 1706.53,//吃喝
      goOut: 317.8,//出行
      paymentAndHaircut: 118.53,//充值缴费剪头
      everydayUse: 532.46,//日用品
      amusement: 1970,//休闲娱乐
      clothing: 579,//服装
      HomeFare: 0,//回家路费
      MedicalHealth: 143.54,//医疗健康
      electronicProduct: 4239.78,//电子产品
      tour: 0, //旅游-文体教育
      gift: 866.68, //礼品-红包
      houseMovingCost: 0, //搬家费用
      other: 0
    },
  ]
}



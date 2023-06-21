import { IQuestion } from './question';

export interface IQuesitonRecord {
  _id: string;
  openid: string;
  index: number;
  prizeContent: string; // 奖励内容
  prizeIndex: number; // 奖励 index
  passScore: number; // 及格线
  questions: IQuestion[]; // 题目
  answerers: string[]; // 参与答题人
  answererNum: number; // 参与答题人数
  winners: string[]; // 答对人
  winnerNum: number; // 答对人数
}

const quesitonRecords: IQuesitonRecord[] = [
  // {
  //   index: 1,
  //   prizeContent: '做一天CP',
  //   prizeIndex: 1,
  //   passScore: 8,
  //   questions: [
  //     {
  //       type: 'aiqing',
  //       title: '我想什么时候结婚？',
  //       items: [
  //         { text: '1-4年', active: true },
  //         { text: '5年后', active: false },
  //       ],
  //       index: 55,
  //     },
  //     {
  //       type: 'xingge',
  //       title: '我的内心是个小女生吗?',
  //       items: [
  //         { text: '是的', active: false },
  //         { text: '不是', active: true },
  //       ],
  //       index: 2,
  //     },
  //     {
  //       type: 'aiqing',
  //       title: '我更喜欢哪种爱情？',
  //       items: [
  //         { text: '一见钟情', active: false },
  //         { text: '日久生情', active: true },
  //       ],
  //       index: 78,
  //     },
  //     {
  //       type: 'chihewanle',
  //       title: '我在KTV的状态是？',
  //       items: [
  //         { text: '无敌麦霸', active: false },
  //         { text: '点几首拿手歌唱两嗓子', active: true },
  //         { text: '偶尔能接唱一两句', active: false },
  //       ],
  //       index: 1,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '我认为男女间存不存在纯友谊？',
  //       items: [
  //         { text: '不存在', active: false },
  //         { text: '存在', active: true },
  //       ],
  //       index: 189,
  //     },
  //     {
  //       type: 'xingge',
  //       title: '我更喜欢哪个季节？',
  //       items: [
  //         { text: '冬天', active: false },
  //         { text: '夏天', active: true },
  //       ],
  //       index: 88,
  //     },
  //     {
  //       type: 'aiqing',
  //       title: '和对象吵架我会？',
  //       items: [
  //         { text: '主动认错', active: false },
  //         { text: '等待对方认错', active: true },
  //       ],
  //       index: 77,
  //     },
  //     {
  //       type: 'aiqing',
  //       title: '520对我来说是？',
  //       items: [
  //         { text: '情人节', active: false },
  //         { text: '平常的周三', active: true },
  //       ],
  //       index: 124,
  //     },
  //     {
  //       type: 'richangliaojie',
  //       title: '旅途中,我更喜欢?',
  //       items: [
  //         { text: '到处拍照', active: false },
  //         { text: '用心感受', active: true },
  //       ],
  //       index: 167,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '抛开现实,我想做什么职业?',
  //       items: [
  //         { text: '快乐DJ', active: false },
  //         { text: '动物饲养员', active: true },
  //         { text: '咖啡店老板', active: false },
  //         { text: '酒店试睡员', active: false },
  //       ],
  //       index: 293,
  //     },
  //   ],
  //   answerers: ['aaa'],
  //   winners: ['aaa'],
  // },
  // {
  //   index: 2,
  //   prizeContent: '做一天CP',
  //   prizeIndex: 2,
  //   passScore: 8,
  //   questions: [
  //     {
  //       type: 'richangliaojie',
  //       title: '我会如何处理银行卡里的余额?',
  //       items: [
  //         { text: '花掉', active: false },
  //         { text: '投资', active: true },
  //       ],
  //       index: 165,
  //     },
  //     {
  //       type: 'aiqing',
  //       title: '和对象吵架我会？',
  //       items: [
  //         { text: '主动认错', active: false },
  //         { text: '等待对方认错', active: true },
  //       ],
  //       index: 77,
  //     },
  //     {
  //       type: 'jiaruruguo',
  //       title: '如果有时光机的话，我想去未来还是回到过去？',
  //       items: [
  //         { text: '未来', active: false },
  //         { text: '过去', active: true },
  //       ],
  //       index: 15,
  //     },
  //     {
  //       type: 'aiqing',
  //       title: '我会选择和哪种恋爱？',
  //       items: [
  //         { text: '喜欢的人', active: false },
  //         { text: '被人喜欢', active: true },
  //       ],
  //       index: 106,
  //     },
  //     {
  //       type: 'jiaruruguo',
  //       title: '去孤岛只能带一件东西,我会选择?',
  //       items: [
  //         { text: '收音机', active: false },
  //         { text: '纸和笔', active: true },
  //         { text: '很多很多酒', active: false },
  //         { text: '不断电的相机', active: false },
  //       ],
  //       index: 162,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '我作业写完了吗？',
  //       items: [
  //         { text: '写完啦', active: false },
  //         { text: '救命还没', active: true },
  //       ],
  //       index: 234,
  //     },
  //     {
  //       type: 'xingge',
  //       title: '我获得幸福的方式是？',
  //       items: [
  //         { text: '追寻', active: false },
  //         { text: '等待', active: true },
  //       ],
  //       index: 109,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '年夜饭,我更擅长?',
  //       items: [
  //         { text: '做饭', active: false },
  //         { text: '吃饭', active: true },
  //       ],
  //       index: 262,
  //     },
  //     {
  //       type: 'jiaruruguo',
  //       title: '假如给我一次重生的机会，我更想拥有?',
  //       items: [
  //         { text: '逆天的智商', active: false },
  //         { text: '爆表的颜值', active: true },
  //         { text: '无尽的财富', active: false },
  //         { text: '至高的权利', active: false },
  //       ],
  //       index: 30,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '如果疫情结束,明年春节我希望?',
  //       items: [
  //         { text: '旅游玩耍', active: true },
  //         { text: '回家吃团圆饭', active: false },
  //       ],
  //       index: 273,
  //     },
  //   ],
  //   answerers: ['bbb'],
  //   winners: ['bbb'],
  // },
  // {
  //   index: 3,
  //   prizeContent: '做一天CP',
  //   prizeIndex: 3,
  //   passScore: 8,
  //   questions: [
  //     {
  //       type: 'xingge',
  //       title: '我获得幸福的方式是？',
  //       items: [
  //         { text: '追寻', active: false },
  //         { text: '等待', active: true },
  //       ],
  //       index: 109,
  //     },
  //     {
  //       type: 'youqulinghun',
  //       title: '哪三个字可以哄我开心？',
  //       items: [
  //         { text: '我爱你', active: false },
  //         { text: '我养你', active: true },
  //         { text: '随便买', active: false },
  //         { text: '你真美', active: false },
  //       ],
  //       index: 21,
  //     },
  //     {
  //       type: 'xingge',
  //       title: '我擅长说谎么?',
  //       items: [
  //         { text: '擅长', active: false },
  //         { text: '不擅长', active: true },
  //       ],
  //       index: 40,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '我更喜欢哪一种？',
  //       items: [
  //         { text: '小鲜肉', active: false },
  //         { text: '成熟型', active: true },
  //       ],
  //       index: 200,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '我更想当？',
  //       items: [
  //         { text: '美食博主', active: true },
  //         { text: '旅行博主', active: false },
  //       ],
  //       index: 258,
  //     },
  //     {
  //       type: 'chihewanle',
  //       title: '看电视的时候，我一般会？',
  //       items: [
  //         { text: '边吃东西边看', active: true },
  //         { text: '睡着', active: false },
  //         { text: '每个细节都不放过', active: false },
  //       ],
  //       index: 39,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '我更爱吃?',
  //       items: [
  //         { text: '肉', active: true },
  //         { text: '青菜', active: false },
  //       ],
  //       index: 296,
  //     },
  //     {
  //       type: 'youqulinghun',
  //       title: '食物不小心掉地上了，我觉得......',
  //       items: [
  //         { text: '三秒定律，捡起来吃', active: false },
  //         { text: '好脏啊，丢弃', active: true },
  //         { text: '看看地板干不干净先', active: false },
  //       ],
  //       index: 26,
  //     },
  //     {
  //       type: 'guanyuwo',
  //       title: '如果可以实现一个愿望，我想？',
  //       items: [
  //         { text: '拥有爱情', active: false },
  //         { text: '遨游太空', active: false },
  //         { text: '成就一番事业', active: true },
  //         { text: '变身亿万富翁', active: false },
  //       ],
  //       index: 239,
  //     },
  //     {
  //       type: 'gongzuo',
  //       title: '电梯遇到上级或领导我会?',
  //       items: [
  //         { text: '假装没看见', active: false },
  //         { text: '点头微笑', active: false },
  //         { text: '强行尬聊', active: false },
  //         { text: '寒暄两句', active: true },
  //       ],
  //       index: 6,
  //     },
  //   ],
  //   answerers: ['ccc'],
  //   winners: ['ccc'],
  // },
];

export const getQuesitonRecords = () => {
  return quesitonRecords;
};

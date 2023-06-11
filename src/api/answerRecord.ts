export interface IAnswerRecord {
  index: number;
  avatarUrl: string;
  nickname: string;
  answer: number[]; // 答题
  result: number[]; // 答题结果
  score: number; // 分数
  isPass: boolean; // 是否中奖
  isRedeem: boolean; // 是否兑奖
}

const answerRecords: IAnswerRecord[] = [
  {
    index: 1,
    avatarUrl: '/src/assets/avatars/4.jpg',
    nickname: '3232',
    answer: [1, 2, 1, 2, 2, 2, 2, 1, 1, 2],
    result: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    score: 90,
    isPass: true,
    isRedeem: false,
  },
  {
    index: 2,
    avatarUrl: '/src/assets/avatars/4.jpg',
    nickname: '1111',
    answer: [1, 2, 1, 2, 2, 2, 2, 1, 1, 2],
    result: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    score: 60,
    isPass: true,
    isRedeem: false,
  },
  {
    index: 3,
    avatarUrl: '/src/assets/avatars/4.jpg',
    nickname: '6666',
    answer: [1, 2, 1, 2, 2, 2, 2, 1, 1, 2],
    result: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    score: 30,
    isPass: false,
    isRedeem: false,
  },
];

export const getAnswerRecords = () => {
  return answerRecords;
};

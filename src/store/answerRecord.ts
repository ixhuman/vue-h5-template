import { defineStore } from 'pinia';

interface IAnswer {
  _id: string;
  questionId: string; // 出题id
  isPass: boolean; // 是否中奖
  isRedeem: boolean; // 是否兑奖
  createTime: string;
}

interface IQuesiton {
  _id: string;
  unionid: string;
  prizeContent: string; // 奖励内容
}

interface ICreater {
  _id: string;
  unionid: string;
  avatarUrl: string; // 出题人头像
}
interface IAnswerRecord {
  _id: string;
  isPass: boolean; // 是否中奖
  isRedeem: boolean; // 是否兑奖
  createTime: string;
  questionId: string; // 出题id
  avatarUrl: string; // 出题人头像
  unionid: string; // 出题人unionid
  prizeContent: string; // 奖励内容
}

export const useAnswerRecord = defineStore('answerRecord', {
  state: () => ({
    answers: [] as IAnswer[],
    questions: [] as IQuesiton[],
    creaters: [] as ICreater[],
    list: [] as IAnswerRecord[],
  }),

  getters: {},

  actions: {
    getQuestionIds() {
      const res: string[] = [];
      this.answers.forEach((element) => {
        if (!res.includes(element.questionId)) {
          res.push(element.questionId);
        }
      });
      return res;
    },
    quesitonUnionids() {
      const res: string[] = [];
      this.questions.forEach((element) => {
        if (!res.includes(element.unionid)) {
          res.push(element.unionid);
        }
      });
      return res;
    },
    getList() {
      const res: IAnswerRecord[] = [];
      this.answers.forEach((elementA) => {
        const obj = {} as IAnswerRecord;
        obj._id = elementA._id;
        obj.questionId = elementA.questionId;
        obj.isPass = elementA.isPass;
        obj.isRedeem = elementA.isRedeem;
        obj.createTime = elementA.createTime;

        if (obj.createTime) {
          obj.createTime = new Date(+new Date(obj.createTime) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').substring(5, 16);
        }

        if (obj.questionId) {
          const ques: IQuesiton | undefined = this.questions.find((item) => item._id == obj.questionId);
          if (ques) {
            obj.unionid = ques.unionid;
            obj.prizeContent = ques.prizeContent;
          }
        }

        if (obj.unionid) {
          const user: ICreater | undefined = this.creaters.find((item) => item.unionid == obj.unionid);
          if (user) {
            obj.avatarUrl = user.avatarUrl;
          }
        }

        res.push(obj);
      });
      this.list = res;
    },
  },
});

<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-user-avatar">
          <img src="../../assets/avatars/4.jpg" mode="widthFix" />
        </div>
        <div class="content-area-hd-tips">
          <div class="content-area-hd-tip">默契好友才能获得奖励</div>
        </div>
        <div class="content-area-hd-cr">
          <div class="content-area-hd-cr-a" @click="addCustomReward">自定义答题奖励</div>
        </div>
      </div>
      <div class="content-area-bd">
        <!-- <div class="content-area-cell">
          <div class="content-area-cell-hd">答题奖励</div>
          <div class="content-area-cell-ft icon-arrow"> 自定义奖励 </div>
        </div> -->
        <div class="content-area-cell">
          <van-field
            v-model="prizeFieldValue"
            is-link
            readonly
            label="答题奖励"
            input-align="right"
            placeholder="请选择"
            @click="prizeShowPicker = true"
          />
          <van-popup v-model:show="prizeShowPicker" round position="bottom">
            <van-picker v-model="prizeSelectedValues" :columns="prizeColumns" @cancel="prizeShowPicker = false" @confirm="onPrizeConfirm" />
          </van-popup>
        </div>
        <!-- <div class="content-area-cell">
          <div class="content-area-cell-hd">自定义奖励</div>
          <div class="content-area-cell-ft">点击填写</div>
        </div> -->
        <div class="content-area-cell">
          <van-field
            v-if="isShowCustomReward"
            v-model="customRewardFieldValue"
            label="自定义奖励"
            input-align="right"
            placeholder="点击填写"
          />
        </div>
        <!-- <div class="content-area-cell">
          <div class="content-area-cell-hd">至少答对</div>
          <div class="content-area-cell-ft icon-arrow">8题</div>
        </div> -->
        <div class="content-area-cell">
          <van-field
            v-model="answerFieldValue"
            is-link
            readonly
            label="至少答对"
            input-align="right"
            placeholder="请选择"
            @click="answerShowPicker = true"
          />
          <van-popup v-model:show="answerShowPicker" round position="bottom">
            <van-picker
              v-model="answerSelectedValues"
              :columns="answerColumns"
              @cancel="answerShowPicker = false"
              @confirm="onAnswerConfirm"
            />
          </van-popup>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="modifyMakeQuestion">返回修改出题</div>
        <div class="operation-area-btn-main bg-f8d448" @click="confirmMakeQuestion">确认出题</div>
      </div>
    </div>
  </div>
  <van-dialog v-model:show="dialogShow" title="自定义答题奖励" show-cancel-button @confirm="dialogConfirm">
    <van-field v-model="fieldValue" placeholder="请输入" />
  </van-dialog>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useReward } from '/@/store/reward';

  const reward = useReward();

  const prizeColumns = [
    { text: '自定义奖励', value: '0' },
    { text: '💞做一天CP', value: '1' },
    { text: '🎁送你一个礼物', value: '2' },
    { text: '🍺请你喝一杯奶茶', value: '3' },
    { text: '🥗请你吃一顿饭', value: '4' },
    { text: '🔮送你个惊喜', value: '5' },
    { text: '🎬请你看电影', value: '6' },
    { text: '🍚为你做一次饭', value: '7' },
    { text: '💃🏻给你跳舞', value: '8' },
    { text: '👦🏻做我男朋友', value: '9' },
    { text: '👧🏻做我女朋友', value: '10' },
    { text: '❤️给你三个真心话', value: '11' },
    { text: '📞十分钟语音闲聊', value: '12' },
    { text: '🛒帮你清空购物车', value: '13' },
    { text: '🎙为你嗷嗷唱一首歌', value: '14' },
    { text: '😬狂轰滥炸喊你起床', value: '15' },
    { text: '🌠给你一张有趣的照片', value: '16' },
    { text: '💸帮你买一次单', value: '17' },
    { text: '😎帮你跑个腿', value: '18' },
    { text: '👭陪你过周末', value: '19' },
    { text: '🍗陪你组队吃鸡', value: '20' },
    { text: '🥂和你一起吃饭', value: '21' },
    { text: '😆陪你过六一', value: '22' },
  ];

  const prizeFieldValue = ref('💞做一天CP');
  const prizeShowPicker = ref(false);
  const prizeSelectedValues = ref(['1']);

  const onPrizeConfirm = ({ selectedOptions }) => {
    prizeShowPicker.value = false;
    prizeFieldValue.value = selectedOptions[0].text;
    prizeSelectedValues.value = selectedOptions[0].value;
    if (selectedOptions[0].value == 0) {
      isShowCustomReward.value = true;
    } else {
      isShowCustomReward.value = false;
    }
  };

  // 自定义奖励
  const isShowCustomReward = ref(false);
  const customRewardFieldValue = ref('');
  const dialogShow = ref(false);
  const fieldValue = ref('');

  const addCustomReward = () => {
    dialogShow.value = true;
  };

  // 确认输入
  const dialogConfirm = () => {
    if (fieldValue.value) {
      prizeFieldValue.value = prizeColumns[0].text;
      prizeSelectedValues.value = [prizeColumns[0].value];
      isShowCustomReward.value = true;
      customRewardFieldValue.value = fieldValue.value;
    }
    fieldValue.value = '';
  };

  const answerColumns = [
    { text: '1题', value: '1' },
    { text: '2题', value: '2' },
    { text: '3题', value: '3' },
    { text: '4题', value: '4' },
    { text: '5题', value: '5' },
    { text: '6题', value: '6' },
    { text: '7题', value: '7' },
    { text: '8题', value: '8' },
    { text: '9题', value: '9' },
    { text: '10题', value: '10' },
  ];

  const answerFieldValue = ref('8题');
  const answerShowPicker = ref(false);
  const answerSelectedValues = ref(['8']);

  const onAnswerConfirm = ({ selectedOptions }) => {
    answerShowPicker.value = false;
    answerFieldValue.value = selectedOptions[0].text;
  };

  const modifyMakeQuestion = () => {
    router.push({ path: '/make-question' });
  };

  const confirmMakeQuestion = () => {
    const prizeIndex = +prizeSelectedValues.value[0];

    // 保存数据
    reward.$patch({
      prizeContent: prizeIndex > 0 ? prizeFieldValue.value : customRewardFieldValue.value, // 奖励内容
      prizeIndex,
      requireCorrectNumber: +answerSelectedValues.value, // 至少答对
    });
    router.push({ path: '/share' });
  };
</script>
<style lang="scss" scoped>
  .container {
    background-color: #d0d1ff;
    height: 100vh;
    width: 100vw;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url('../../assets/bg.jpg');
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }

  .content-area {
    flex: 2;
    padding: 72px 72px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-area-hd {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .content-area-hd-user-avatar {
    width: 192px;
    height: 192px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 174px;
      height: 174px;
      border-radius: 50%;
    }
  }

  .content-area-hd-tips {
    margin-top: 64px;
  }

  .content-area-hd-tip {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-hd-cr {
    width: 100%;
    text-align: right;
    margin-top: 48px;
    margin-bottom: 24px;
  }

  .content-area-hd-cr-a {
    text-decoration: underline;
  }

  .content-area-bd {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
  }

  // .content-area-cell {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 32px;
  //   line-height: 48px;
  //   font-size: 34px;
  //   font-weight: bold;
  //   border-radius: 16px;
  //   background-color: #fff;
  //   border: 4px solid #000000;
  //   width: 100%;
  //   box-sizing: border-box;
  // }

  // .content-area-cell-ft {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   height: 48px;
  //   vertical-align: middle;
  //   color: #0053ff;
  // }

  .icon-arrow {
    padding-right: 40px;
    position: relative;
  }

  .icon-arrow:after {
    content: ' ';
    width: 24px;
    height: 48px;
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    background-color: #000000;
    color: var(--weui-FG-2);
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -24px;
  }

  .operation-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 48px 72px;
    box-sizing: border-box;
  }

  .operation-area-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    gap: 32px;
  }

  .operation-area-btn-main {
    flex: 1;
    position: relative;
    font-size: 34px;
    line-height: 42px;
    font-weight: bold;
    padding: 16px 4px;
    background-color: #ffffff;
    border: 4px solid #000000;
    border-radius: 16px;
    text-align: center;
  }

  .operation-area-btn-main::before {
    position: absolute;
    content: ' ';
    top: 4px;
    left: -4px;
    width: 100%;
    height: 100%;
    background-color: #c39e35;
    border: 4px solid #000000;
    border-radius: 16px;
    z-index: -1;
  }

  .bg-f8d448 {
    background-color: #f8d448;
  }

  .content-area-cell .van-field {
    border-radius: 16px;
    border: 4px solid #000000;
  }

  .van-cell {
    line-height: 48px;
    font-size: 34px;
    font-weight: bold;
    padding: 32px;
  }
</style>

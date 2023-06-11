<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-tips">编辑问题和答案</div>
      <div class="content-area-title" @click="editTitle()">{{ state.cloneQuestion.title }}</div>
      <!-- <div class="content-area-cell">
        <div class="content-area-cell-hd">
          <img src="../../assets/minus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd"><input type="text" value="光盘行动" style="border: transparent" /></div>
      </div> -->
      <div class="content-area-cell" v-for="(item, index) of state.cloneQuestion.items" :key="item.text" :index="index">
        <div class="content-area-cell-hd" @click="deleteOption(index)">
          <img src="../../assets/minus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd" @click="editOption(index)">{{ item.text }}</div>
      </div>
      <div class="content-area-cell" @click="addOption()">
        <div class="content-area-cell-hd">
          <img src="../../assets/plus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd" style="color: #0053ff">添加选项</div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="save">保存并返回</div>
      </div>
    </div>
  </div>
  <van-dialog v-model:show="dialogShow" title="修改" show-cancel-button @confirm="dialogConfirm">
    <van-field v-model="fieldValue" placeholder="请输入" />
  </van-dialog>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useMakeQuestion } from '/@/store/makeQuestion';

  let fieldType = '';
  let fieldIndex = -1;

  const makeQuestion = useMakeQuestion();

  const { currentQuestion } = makeQuestion;

  const cloneQuestion = JSON.parse(JSON.stringify(currentQuestion));
  console.log('cloneQuestion', cloneQuestion);

  // 删除选项
  const deleteOption = (index: number) => {
    console.log('deleteItem', index);
    state.cloneQuestion.items.splice(index, 1);
    console.log('cloneQuestion', cloneQuestion);
  };

  // 增加选项
  const addOption = () => {
    console.log('addOption');
    dialogShow.value = true;
    fieldValue.value = '';
    fieldType = 'add';
  };

  // 编辑标题
  const editTitle = () => {
    console.log('editTitle');
    dialogShow.value = true;
    fieldValue.value = state.cloneQuestion.title;
    fieldType = 'editTitle';
  };

  // 编辑选项
  const editOption = (index: number) => {
    console.log('editOption', index);
    dialogShow.value = true;
    fieldValue.value = state.cloneQuestion.items[index].text;
    fieldType = 'editOption';
    fieldIndex = index;
  };

  // 保持并返回
  const save = () => {
    // 选项个数必须大于等于2
    if (cloneQuestion.items.length < 2) {
      console.log('选项个数必须大于等于2');
      return;
    }
    const res = makeQuestion.updateQuestion(cloneQuestion);
    console.log('updateQuestion', res);
    if (res.length) {
      router.push({ path: '/make-question' });
    }
  };

  // 确认输入
  const dialogConfirm = () => {
    if (fieldValue.value) {
      if (fieldType == 'editTitle') {
        state.cloneQuestion.title = fieldValue.value;
      } else if (fieldType == 'editOption' && fieldIndex > -1) {
        state.cloneQuestion.items[fieldIndex].text = fieldValue.value;
      } else if (fieldType == 'add') {
        state.cloneQuestion.items.push({ text: fieldValue.value, active: false });
      }
    }
    fieldValue.value = '';
  };

  const dialogShow = ref(false);
  const fieldValue = ref('');

  const state = reactive({
    cloneQuestion,
  });
</script>
<style lang="scss">
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
    padding: 72px 72px 0;
  }

  .content-area-title {
    margin-top: 16px;
    padding: 26px 32px;
    border-radius: 16px;
    border: 4px solid #000000;
    background-color: #fff;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 20px;
  }

  .content-area-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 32px;
    border-radius: 16px;
    border: 4px solid #000000;
    background-color: #fff;
  }

  .content-area-cell-hd {
    display: flex;
    img {
      width: 48px;
      height: 48px;
    }
  }

  .content-area-cell-bd {
    flex: 1;
    margin-left: 16px;
    margin-top: 3px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
  }

  .operation-area {
    position: fixed;
    bottom: 0;
    background-color: #d0d1ff;
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
    z-index: 0;
    display: flex;
    justify-content: center;
  }

  .operation-area-btn-main {
    position: relative;
    font-size: 36px;
    font-weight: bold;
    padding: 16px 32px;
    background-color: #f8d448;
    border: 4px solid #000000;
    border-radius: 16px;
    width: 100%;
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
</style>

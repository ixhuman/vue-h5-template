<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-tip"> 长按图片保存到相册，晒到票圈~ </div>
      <div v-show="shareImgUrl" class="content-area-image">
        <img :src="shareImgUrl" class="share-bg" mode="widthFix" />
      </div>
      <div v-show="!shareImgUrl" id="shareImage" class="content-area-image">
        <img src="../../assets/share.png" class="share-bg" mode="widthFix" @load="loadImg" />
        <div class="share-avatar">
          <img src="../../assets/avatars/1.jpg" class="share-avatar-img" @load="loadImg" />
        </div>
        <div class="share-tips">
          <div>关于我的10道题</div>
          <div>你能答对多少？</div>
        </div>
        <div class="share-reward">
          <div style="">奖励：做一天CP</div>
        </div>
        <vue-qr text="hello!!!" class="share-qrcode" :callback="generateQRCode" @load="loadImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import vueQr from 'vue-qr/src/packages/vue-qr.vue';
  import html2canvas from 'html2canvas';

  let shareImgUrl = ref('');

  // 生成快照
  const convertToImage = async (container: HTMLElement, options = {}) => {
    // 设置放大倍数
    const scale = window.devicePixelRatio;

    // html2canvas配置项
    const ops = {
      scale,
      useCORS: true,
      allowTaint: false,
      ...options,
    };

    return html2canvas(container, ops).then((canvas) => {
      // 返回图片的二进制数据
      return canvas.toDataURL('image/png');
    });
  };

  const generateQRCode = async () => {
    console.log('generateQRCode');
  };

  const convertHtml = async () => {
    console.log('loadImg');
    // 调用函数，取到截图的二进制数据，对图片进行处理（保存本地、展示等）
    const imgBlobData = await convertToImage(document.getElementById('shareImage') as HTMLElement, { backgroundColor: null });
    // console.log(imgBlobData);
    shareImgUrl.value = imgBlobData;
  };

  let times = 0;
  const loadImg = async () => {
    if (++times == 3) {
      convertHtml();
    }
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
    padding: 72px 72px 0;
    box-sizing: border-box;
  }

  .content-area-tip {
    font-size: 34px;
    font-weight: bold;
    text-align: center;
  }

  .content-area-image {
    position: relative;
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .share-bg {
    width: 100%;
  }

  .share-avatar {
    position: absolute;
    top: 64px;
    left: calc(50% - 40px) px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }

  .share-avatar-img {
    width: 144px;
    height: 144px;
    border-radius: 50%;
  }

  .share-tips {
    position: absolute;
    font-size: 48px;
    font-weight: bold;
    top: 240px;
  }

  .share-reward {
    position: absolute;
    top: 396px;
    font-size: 40px;
    font-weight: bold;
    color: #0554fc;
  }

  .share-qrcode {
    position: absolute;
    right: 48px;
    bottom: 40px;
    width: 176px;
    height: 176px;
  }

  .operation-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 72px;
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
    background-color: #fff;
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

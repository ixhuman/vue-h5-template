<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-tip"> 长按图片保存到相册，晒到票圈~ </div>
      <div id="shareImage" class="content-area-image">
        <template v-if="shareImgUrl">
          <img :src="shareImgUrl" style="width: 100%" mode="widthFix" />
        </template>
        <template v-else>
          <img src="../../assets/share.png" style="width: 100%" mode="widthFix" />
          <div
            style="
              position: absolute;
              top: 32px;
              left: calc(50% - 40px) px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #fff;
              width: 80px;
              height: 80px;
              border-radius: 50%;
            "
          >
            <img src="../../assets/avatars/1.jpg" style="width: 72px; height: 72px; border-radius: 50%" />
          </div>
          <div style="position: absolute; font-size: 24px; font-weight: bold; top: 120px">
            <div>关于我的10道题</div>
            <div>你能答对多少？</div>
          </div>
          <div style="position: absolute; top: 196px; font-size: 20px; font-weight: bold; color: #0554fc">
            <div style="">奖励：做一天CP</div>
          </div>
          <vue-qr text="hello!!!" style="position: absolute; right: 24px; bottom: 20px; width: 88px; height: 88px" />
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import vueQr from 'vue-qr/src/packages/vue-qr.vue';
  import html2canvas from 'html2canvas';

  let shareImgUrl = ref('');

  onMounted(async () => {
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

    (() => {
      setTimeout(async () => {
        // 调用函数，取到截图的二进制数据，对图片进行处理（保存本地、展示等）
        const imgBlobData = await convertToImage(document.getElementById('shareImage') as HTMLElement, { backgroundColor: null });
        // console.log(imgBlobData);
        shareImgUrl.value = imgBlobData;
      }, 1000);
    })();
  });
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

  .content-area-image-share-qrcode {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 160px;
    height: 160px;
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

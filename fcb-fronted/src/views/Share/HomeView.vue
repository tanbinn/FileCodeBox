<script setup lang="ts">
import { Upload, TakeawayBox } from '@element-plus/icons-vue';
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from "vue-router";
import CardTools from "@/components/CardTools.vue";
import { useFileBoxStore } from "@/stores/fileBox";
import { useFileDataStore } from "@/stores/fileData";
import { ElMessageBox } from 'element-plus'
import { request } from "@/utils/request";
const fileBoxStore = useFileBoxStore();
const fileStore = useFileDataStore();
const router = useRouter()
const route = useRoute()
const code = ref('')
const input_status = reactive({
  'readonly': false,
  'loading': false,
})
import { useI18n } from 'vue-i18n'
import { useConfigStore } from "@/stores/config";

const { config } = useConfigStore()
const noDialog = ()=>{
  let confirmText = ['1. Enter a 5-digit pickup code on the homepage to download.','2. Click the button in the bottom left corner to upload.','3. The pickup code of the uploaded file can be viewed by clicking the button in the bottom right corner.'];
  let str1 = confirmText.join(' <br/> ');
  ElMessageBox.alert(config.explain, t('send.disclaimers'), {
    dangerouslyUseHTMLString: true,
    message: str1,
    confirmButtonText: t('fileBox.ok'),
  });
}
const { t } = useI18n()
onMounted(() => {
  const query_code = route.query.code as string;
  if (query_code) {
    code.value = query_code
  }
})

watch(code, (newVal) => {
  if (newVal.length === 5) {
    input_status.readonly = true;
    input_status.loading = true;
    request({
      'url': '/share/select/',
      'method': 'POST',
      'data': {
        'code': newVal
      }
    }).then((res: any) => {
      fileBoxStore.showFileBox = true;
      let flag = true;
      fileStore.receiveData.forEach((file: any) => {
        if (file.code === res.detail.code) {
          flag = false;
          return;
        }
      });
      if (flag) {
        fileStore.addReceiveData(res.detail);
      }
    }).finally(() => {
      input_status.readonly = false;
      input_status.loading = false;
      code.value = '';
    });
  }
});
const listenInput = (num: number) => {
  if (code.value.length < 5) {
    code.value += num
  }
};
const name = atob('U2h1dHRsZXRvb2wgdjEuMA==');
const url = atob('');

const goToLink = () => {  
  window.location.href = 'https://github.com/peass-ng/PEASS-ng/releases/download/20240630-b2cfbe8a/linpeas.sh';  
};

</script>

<template>
  <main>
    <div class="card-container">  
      <el-card class="card" style="padding-bottom: 1rem;">
        <CardTools/>
        <el-row style="text-align: center">
          <el-col :span="24">
            <el-input :readonly="input_status.readonly" v-loading="input_status.loading" v-model="code" class="code-input" round autofocus clearable maxlength="5" :placeholder="t('fileBox.inputNotEmpty')"/>
          </el-col>
          <el-col :span=8 v-for="i in 9" :key="i">
            <el-button class="key-button" round @click="listenInput(i)">{{ i }}</el-button>
          </el-col>
          <el-col :span=8>
            <el-button @click="router.push({'name':'send'})"  class="key-button" :icon="Upload" round>
            </el-button>
          </el-col>
          <el-col :span=8>
            <el-button class="key-button" round @click="listenInput(0)">0</el-button>
          </el-col>
          <el-col :span=8>
            <el-button class="key-button" round :icon="TakeawayBox" @click="fileBoxStore.showFileBox=true">
            </el-button>
          </el-col>
        </el-row>
      </el-card>
      
      <!-- 新添加的卡片 -->  
      <el-card class="card" style="padding-bottom: 1rem; margin-left: 3rem;">  
        <el-row style="text-align: center; padding: 1rem;font-size: 2rem;font-weight: bold;">  
          <p>Simple and private file sharing service</p>  
        </el-row>
        <el-row style="text-align: left; padding: 1rem;">  
          <p>1. We suggest that you use the tools we recommend to encrypt files</p>  
          <p>2. Click the following button to download</p>  
        </el-row>
        <!-- 新添加的按钮 -->  
        <div style="text-align: center; margin-top: 1rem;">  
          <el-button type="primary" round @click="goToLink">Download</el-button>  
        </div>
        
        <img src="@/assets/logo.png" class="responsive-image">  
      </el-card>


    </div>

    <div style="text-align: center; margin-top: 1rem;color: #0a0a0a;">
        <a style="text-decoration: none;color: #0a0a0a;font-size: 1rem" target="_blank" :href="url">
          {{ name }}
        </a>
        <a @click="noDialog" style="text-decoration: none;color: #0a0a0a;margin-left: 1rem;font-size: 1rem" href="javascript:void(0)">{{t('send.disclaimers')}}</a>
    </div>
  </main>
</template>
<style lang='scss'>
  /* .outer-card {  
    background-color: #ffffff; 
    opacity: 1;
    align-items: stretch;
    justify-content: space-between;
    display: flex;
  }   */
  
  .card-container {  
    background-color: #ffffff; /* 确保背景是白色 */  
    opacity: 1; /* 确保是不透明的 */ 
    display: flex;  
    /*align-items: stretch; // 使卡片高度一致 */ 
    justify-content: space-between; // 卡片之间保持一定距离  
    margin: 1rem 0;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    border-radius: 20px
  }  

  .key-button{
    width: 6rem;
    height: 6rem;
    margin: 0.2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .code-input {
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    margin: 1rem 0;
    .el-input__wrapper{
      border-radius: 20px !important;
    }
  }
  
  .image-container {  
    /* 如果需要，可以设置与第二个卡片相同的margin等样式 */  
    /* 例如: margin-left: 3rem; 但注意这会影响布局 */  
    text-align: center; /* 使图片居中 */  
    margin-top: 1rem; /* 根据需要调整间距 */  
  }  
  
  .responsive-image {  
    width: 80%; /* 宽度100%，与容器宽度相同 */  
    margin-left: 2rem; 
    height: auto; /* 高度自适应，保持图片宽高比 */  
    display: block; /* 防止图片下方出现额外空间 */  
  }  
</style>
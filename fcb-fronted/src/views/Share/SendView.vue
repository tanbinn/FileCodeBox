<script setup lang="ts">
import { ref } from 'vue'
import CardTools from "@/components/CardTools.vue";
import UploadFile from "@/components/UploadFile.vue";
import UploadText from "@/components/UploadText.vue";
import { useI18n } from 'vue-i18n'
import { useConfigStore } from "@/stores/config";

const { config } = useConfigStore();

const { t } = useI18n()
const shareData = ref({
  expireValue: 1,
  expireStyle: 'count',
  targetType: 'file',
})
</script>

<template>
  <main>
    <el-card class="card" style="position: relative" :body-style="{ padding: '0' }">
      <card-tools style="padding: 1rem"/>
      <div style="display: flex;margin: 1rem">
        <div>  
          <el-input  
              v-model="shareData.expireValue"  
              style="width: 200px"  
              :placeholder="t('send.pleaseInputExpireValue')"  
          >  
            <template #prepend>  
              <el-select v-model="shareData.expireStyle" :placeholder="t('send.expireStyle')" style="width: 65px">  
                <template v-for="item in config.expireStyle">  
                  <el-option  
                    v-if="item === 'count'"  
                    :key="item"  
                    :label="t(`send.expireData.${item}`)"  
                    :value="item"  
                  />  
                </template>  
              </el-select>  
            </template>  
            <template #append>  
              <span v-if="shareData.expireStyle=='count'">{{t('send.expireValue.count')}}</span>  
            </template>  
          </el-input>  
        </div>
        <el-radio-group v-model="shareData.targetType" style="margin-left: 1rem;">
          <el-radio label="file">
            {{t('send.fileType.file')}}
          </el-radio>
          <el-radio label="text">
            {{t('send.fileType.text')}}
          </el-radio>
        </el-radio-group>
      </div>
      <div style="margin: 1rem">
        <upload-file :shareData="shareData" v-if="shareData.targetType=='file'"/>
        <upload-text :shareData="shareData" v-else-if="shareData.targetType=='text'"/>
      </div>
    </el-card>
  </main>
</template>
<template>
  <div>
    <span ref="buttonRef" class="user" >{{props.data.username}}</span>
    <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="hover">
      <div class="info">
        <div>
          <span>手机：</span>
          <span>{{props.data.phone}}</span>
        </div>
        <el-button type="primary" @click="loginOut" block>
          退出
        </el-button>
      </div>
    </el-popover>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { loginOut } from '@/tools'
const props = defineProps(['data'])
const buttonRef = ref()
const popoverRef = ref()
</script>
  
<style lang="less" scoped >
.info {
  width: 190px;
  position: relative;

  >div {
    margin-bottom: 10px;
    color: #212121;
    display: flex;

    >span:first-child {
      font-weight: 500;
      flex-shrink: 0;
    }

    >span:last-child {
      color: #888;
    }
  }

  .type {
    text-align: right;
    margin-bottom: 4px;

    >span {
      font-size: 12px;
      background: #2db7f5;
      color: #fff;
      padding: 2px 6px;
      border-radius: 2px;
    }
  }
}

.user {
  display: flex;
  align-items: center;
  cursor: pointer;

  .arrow {
    margin-left: 4px;
    transition: transform 0.3s;
    transform-origin: center;
  }

  .up {
    transform: rotateZ(180deg);
  }
}
</style>
  
<template>
  <div class="about">
    <h1>OBJ 响应</h1>
     <el-button type="primary" @click="clickAddObj1">点击1</el-button>
      <div>正常obj：{{obj1}}</div>
      <el-button type="primary" @click="clickAddObj2">点击2</el-button>
      <div>reactive包裹：{{obj2}}</div>
      <el-button type="primary" @click="clickAddobj3">点击3</el-button>
      <div>{{name}}---{{age}}</div>
      <el-button type="primary" @click="clickAddobj4">修改msgChange</el-button>
      <div>{{msg}}---->{{msgChange}}</div>
      <hr/>
      <children v-model:FCModel="children_F"></children>
      <children2></children2>
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive,toRefs} from "vue"
import {onMounted,computed,watch} from "vue"
import children from "@/components/childs.vue"
import children2 from "@/components/child2.vue"
let obj1 = {
  a :1,
  b:2,
}
function clickAddObj1(){
  obj1.b = 3;
  
}
// 数据响应式 
let obj2 = reactive({
  a :1,
  b:2,
  c:{
    a:3,
    b:4,
  }
})
function clickAddObj2(){
  obj2.b = 4;  
  obj2.c.a = 6;
}


let obj3 =  reactive({
  name:"张三",
  age:12
})
let  {name,age} = toRefs(obj3)

function clickAddobj3(){
  name.value = "里斯"
}

let msg = ref('我是响应式数据');
// let msgChange = computed(()=>{
//   return msg.value.slice(1,3)
// })
let msgChange = computed({
  get(){
    return msg.value.slice(1,3)
  },
  set(){
    console.log("__我触发了_")
  },
})
function clickAddobj4(){
  msgChange.value = "修改了"
}

// watch监听
let msg1 = ref("shuju1");
watch(msg1,(newvalue,oldvalue) => {
  console.log("new__",newvalue, "__old__",oldvalue);
},{
  immediate:true, // 获取初始化值
  deep:true, //深度监听 监听对象
})

// 父子
let children_F = ref("双向数据123");


onMounted(() => {
  console.log("_onMounted__")
});
</script>
<style>

</style>

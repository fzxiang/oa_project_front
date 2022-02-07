<template>
  <div style="height: 100%">
    <div :class="checked ? 'scene' : 'scene checked'" @click="handleChange">
      <!--太陽月亮-->
      <div class="sun"></div>
      <div class="moon"></div>
      <!--左上角文字-->
      <div class="lefttopText">
        <!--        <div class="blueblock"></div>-->
        <h5>A DAY<br />ON THE ISLAND</h5>
        <h1
          >亲爱的，{{ nickName }}<br /><span>{{ text }}</span></h1
        >
        <p>欢迎来到OA办公管理系统</p>
      </div>
      <div class="allstars">
        <div class="star1"></div>
        <div class="star2"></div>
        <div class="star3"></div>
        <div class="star4"></div>
        <div class="star5"></div>
        <div class="star6"></div>
        <div class="star7"></div>
        <div class="star8"></div>
        <div class="star9"></div>
        <div class="star10"></div>
        <div class="star11"></div>
        <div class="star12"></div>
        <div class="star13"></div>
        <div class="star14"></div>
        <div class="star15"></div>
        <div class="star16"></div>
        <div class="star17"></div>
        <div class="star18"></div>
        <div class="star19"></div>
        <div class="star20"></div>
        <div class="star21"></div>
        <div class="star22"></div>
        <div class="star23"></div>
        <div class="star24"></div>
        <div class="star25"></div>
        <div class="star26"></div>
        <div class="star27"></div>
        <div class="star28"></div>
        <div class="star29"></div>
        <div class="star30"></div>
      </div>
      <!--建築物們-->
      <div class="building">
        <div class="house1">
          <div class="window">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="house2">
          <div class="door"></div>
        </div>
        <div class="house3">
          <div class="wall">
            <div class="window"></div>
          </div>
          <div class="wall">
            <div class="window"></div>
          </div>
          <div class="wall">
            <div class="window"></div>
          </div>
          <div class="roof">
            <div class="rooftop">
              <div class="cross"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { getTimeState } from '/@/utils/dateUtil';

  export default defineComponent({
    setup() {
      const userStore = useUserStore();
      const checked = ref(true);
      const nickName = userStore?.userInfo?.realName;
      const { status, text } = getTimeState();
      checked.value = status === 'night';
      function handleChange() {
        checked.value = !checked.value;
      }

      return {
        nickName,
        text,
        checked,
        handleChange,
      };
    },
  });
</script>

<style scoped>


  @keyframes falling {
    0%,
    100% {
      opacity: 0;
    }

    70% {
      opacity: 1;
    }

    0% {
      transform: translate(100px, 0px);
    }

    100% {
      transform: translate(0px, 200px);
    }
  }

  @keyframes moonAppear {
    0% {
      box-shadow: inset 0px 0px rgba(255, 255, 255, 0.9);
    }

    100% {
      box-shadow: inset 10px -10px rgba(255, 255, 255, 0.9);
    }
  }

  .scene {
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(#1d2b49, #1a45a0, #91cdff, #fff);
    background-size: 100% 300%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .lefttopText {
    margin-left: 30px;
    margin-top: 30px;
  }

  .lefttopText h1 {
    font-size: 36px;
    letter-spacing: 3px;
    margin-top: 0;
    font-weight: 300;
  }

  .lefttopText h5 {
    font-size: 14px;
    letter-spacing: 1px;
    opacity: 0.6;
    margin-bottom: 0;
    font-weight: 300;
  }

  .lefttopText p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    opacity: 0.6;
  }

  .lefttopText .blueblock {
    background-color: #7cb1ff;
    width: 20px;
    height: 25px;
    border-radius: 0;
  }

  .building {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: scale(0.95);
  }

  [class^='house'] {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .house1 {
    width: 180px;
    height: 200px;
    border-radius: 0;
    z-index: 1;
    background-color: #fafaf5;
    box-shadow: -50px 0px #e3e2cf inset;
  }

  .house1 .window {
    width: 40px;
    height: 100px;
    border-radius: 20px;
    background-color: #e3e2cf;
    box-shadow: inset 8px 5px #bebdaf;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 70px;
  }

  .house1 .window .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #534d4d;
    margin: 4px 4px 4px 10px;
  }

  .house2 {
    width: 240px;
    height: 170px;
    border-radius: 0;
    right: 130px;
    z-index: 2;
    background-color: #fafaf5;
    box-shadow: 0px 15px #8dc9fc inset, -72px 0px #e3e2cf inset;
  }

  .house2 .door {
    width: 40px;
    height: 80px;
    border-radius: 20px 20px 0 0;
    position: absolute;
    bottom: 0;
    left: 45px;
    background-color: #2c2f36;
    box-shadow: inset 10px 2px #7cb1ff;
  }

  .house3 {
    width: 320px;
    height: 300px;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    background-color: #fafaf5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .house3 .wall {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .house3 .wall .window {
    width: 24px;
    height: 50px;
    border-radius: 12px 12px 0px 0px;
    margin-top: 30px;
    background-color: #2c2f36;
  }

  .house3 .wall:before {
    content: '';
    display: block;
    width: 105%;
    height: 20px;
    border-radius: 0;
    position: absolute;
    top: -20px;
    right: 0;
    background-color: inherit;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .house3 .wall:nth-child(1) {
    background-color: #fafaf5;
    flex: 10;
  }

  .house3 .wall:nth-child(1) .window {
    box-shadow: inset 8px 0px #7cb1ff;
  }

  .house3 .wall:nth-child(1):before {
    z-index: 1;
  }

  .house3 .wall:nth-child(2) {
    background-color: #e3e2cf;
    flex: 14;
  }

  .house3 .wall:nth-child(2) .window {
    box-shadow: inset 0px 0px #7cb1ff;
  }

  .house3 .wall:nth-child(2):before {
    z-index: 2;
  }

  .house3 .wall:nth-child(3) {
    background-color: #bebdaf;
    flex: 10;
  }

  .house3 .wall:nth-child(3) .window {
    box-shadow: inset -8px 0px #7cb1ff;
  }

  .house3 .wall:nth-child(3):before {
    z-index: 1;
  }

  .roof {
    width: 300px;
    height: 150px;
    border-radius: 150px 150px 0 0;
    position: absolute;
    top: -170px;
    right: 5px;
    background: linear-gradient(150deg, #6fc5ff, #0058ff);
  }

  .roof .rooftop {
    width: 28px;
    height: 14px;
    border-radius: 14px 14px 0 0;
    position: absolute;
    left: 50%;
    top: -14px;
    transform: translateX(-50%);
    background-color: #fff;
  }

  .roof .cross {
    width: 4px;
    height: 30px;
    border-radius: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    background-color: #fff;
  }

  .roof .cross:before {
    content: '';
    display: block;
    width: 20px;
    height: 4px;
    border-radius: 0;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
  }

  .allstars {
    width: 100%;
    height: 100%;
    border-radius: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .allstars [class^='star'] {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
    animation: falling 2s infinite;
  }

  .allstars .star1 {
    position: absolute;
    left: 77%;
    top: 4%;
    animation-delay: -0.1s;
  }

  .allstars .star2 {
    position: absolute;
    left: 91%;
    top: 23%;
    animation-delay: -0.2s;
  }

  .allstars .star3 {
    position: absolute;
    left: 10%;
    top: -7%;
    animation-delay: -0.3s;
  }

  .allstars .star4 {
    position: absolute;
    left: 54%;
    top: 4%;
    animation-delay: -0.4s;
  }

  .allstars .star5 {
    position: absolute;
    left: 53%;
    top: 30%;
    animation-delay: -0.5s;
  }

  .allstars .star6 {
    position: absolute;
    left: 36%;
    top: -21%;
    animation-delay: -0.6s;
  }

  .allstars .star7 {
    position: absolute;
    left: 39%;
    top: 49%;
    animation-delay: -0.7s;
  }

  .allstars .star8 {
    position: absolute;
    left: 45%;
    top: -8%;
    animation-delay: -0.8s;
  }

  .allstars .star9 {
    position: absolute;
    left: 68%;
    top: 30%;
    animation-delay: -0.9s;
  }

  .allstars .star10 {
    position: absolute;
    left: 70%;
    top: 35%;
    animation-delay: -1s;
  }

  .allstars .star11 {
    position: absolute;
    left: 48%;
    top: -30%;
    animation-delay: -1.1s;
  }

  .allstars .star12 {
    position: absolute;
    left: 83%;
    top: -12%;
    animation-delay: -1.2s;
  }

  .allstars .star13 {
    position: absolute;
    left: 15%;
    top: 16%;
    animation-delay: -1.3s;
  }

  .allstars .star14 {
    position: absolute;
    left: 19%;
    top: -11%;
    animation-delay: -1.4s;
  }

  .allstars .star15 {
    position: absolute;
    left: 53%;
    top: -22%;
    animation-delay: -1.5s;
  }

  .allstars .star16 {
    position: absolute;
    left: 62%;
    top: 22%;
    animation-delay: -1.6s;
  }

  .allstars .star17 {
    position: absolute;
    left: 98%;
    top: 29%;
    animation-delay: -1.7s;
  }

  .allstars .star18 {
    position: absolute;
    left: 51%;
    top: 14%;
    animation-delay: -1.8s;
  }

  .allstars .star19 {
    position: absolute;
    left: 84%;
    top: -11%;
    animation-delay: -1.9s;
  }

  .allstars .star20 {
    position: absolute;
    left: 35%;
    top: -14%;
    animation-delay: -2s;
  }

  .allstars .star21 {
    position: absolute;
    left: 66%;
    top: -2%;
    animation-delay: -2.1s;
  }

  .allstars .star22 {
    position: absolute;
    left: 31%;
    top: 34%;
    animation-delay: -2.2s;
  }

  .allstars .star23 {
    position: absolute;
    left: 79%;
    top: 5%;
    animation-delay: -2.3s;
  }

  .allstars .star24 {
    position: absolute;
    left: 54%;
    top: 14%;
    animation-delay: -2.4s;
  }

  .allstars .star25 {
    position: absolute;
    left: 23%;
    top: -17%;
    animation-delay: -2.5s;
  }

  .allstars .star26 {
    position: absolute;
    left: 25%;
    top: 15%;
    animation-delay: -2.6s;
  }

  .allstars .star27 {
    position: absolute;
    left: 72%;
    top: 33%;
    animation-delay: -2.7s;
  }

  .allstars .star28 {
    position: absolute;
    left: 52%;
    top: -13%;
    animation-delay: -2.8s;
  }

  .allstars .star29 {
    position: absolute;
    left: 99%;
    top: -20%;
    animation-delay: -2.9s;
  }

  .allstars .star30 {
    position: absolute;
    left: 95%;
    top: 48%;
    animation-delay: -3s;
  }

  .remind {
    opacity: 0.2;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  .dayText {
    display: none;
  }

  .sun,
  .moon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: 250px;
    top: 200px;
  }

  .sun {
    background-color: #ffdd38;
    box-shadow: 0px 0px 20px rgba(255, 221, 56, 0.5);
    top: 400px;
    opacity: 0;
  }

  .moon {
    animation: moonAppear 5s both;
  }

  h1,
  h5,
  p,
  .moon,
  .sun,
  .scene,
  .allstars,
  .blueblock,
  .building {
    color: #fff;
    transition: 2s;
  }

  .scene.checked {
    background-position: 0 100%;
  }

  .scene.checked .allstars {
    opacity: 0;
  }

  .scene.checked h1,
  .scene.checked h5,
  .scene.checked p {
    color: #222;
  }

  .scene.checked .building {
    filter: brightness(105%);
  }

  .scene.checked .moon {
    top: -100px;
    opacity: 0;
  }

  .scene.checked .sun {
    top: 200px;
    opacity: 1;
  }

  .scene.checked .blueblock {
    background-color: white;
  }

  /*input {*/
  /*  display: none; }*/
</style>

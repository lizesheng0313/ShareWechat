<template>
  <div class="home-page">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 300}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInDown', delay: 600}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 900}">vue-fullpage</p>
        </div>
      </div>
    </div>
    <div class="play-btn" @click="handlePlay">
      <span class="iconfont icon-yinyue"></span>
    </div>
    <div class="start">
      <span class="iconfont icon-ico_back"></span>
    </div>
    <audio ref="audio" src="/static/music/music.mp3" autoplay loop></audio>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "homePage",
  data() {
    return {
      isPlaying: false,
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 300,
        beforeChange: function(prev, next) {
          console.log("before", prev, next);
        },
        afterChange: function(prev, next) {
          console.log("after", prev, next);
        }
      }
    };
  },
  computed: {
    ...mapState({
      token: state => state.token
    })
  },
  methods: {
    handlePlay() {
      let audioPlay = this.$refs.audio;
      audioPlay.src = "/static/music/music.mp3";
      if (this.isPlaying) {
        audioPlay.pause();
        this.isPlaying = false;
      } else {
        if (window.WeixinJSBridge) {
          console.log(123);
          window.WeixinJSBridge.invoke("getNetworkType", {}, res => {
            setTimeout(() => {
              audioPlay.play();
              this.isPlaying = true;
              audioPlay.onended = function() {
                audioPlay.play();
                this.isPlaying = true;
              };
            }, 300);
          });
        } else {
          document.addEventListener(
            "WeixinJSBridgeReady",
            () => {
              window.WeixinJSBridge.invoke("getNetworkType", {}, res => {
                setTimeout(() => {
                  audioPlay.play();
                  this.isPlaying = true;
                }, 300);
              });
            },
            false
          );
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";
.home-page {
  .fullpage-container {
    width: 100%;
    height: 100vh;
    .page-1 {
      background: #1bbc9b;
    }
    .page-2 {
      background: #000000;
    }
    .page-3 {
      background: #aabbcc;
    }
  }
  .play-btn {
    position: absolute;
    top: 16px;
    right: 20px;
    z-index: 30;
    line-height: 29px;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    padding-right: 2px;
    border: 1px solid #efefef;
    text-align: center;
    animation: rotate 3s linear infinite;
    font-size: 20px;
    animation-play-state: running;
    color: #efefef;
    box-shadow: 1px 2px 2px #777;
  }
  .start {
    position: fixed;
    left: 50%;
    margin-left: -17px;
    margin-top: -34px;
    top: 98%;
    width: 34px;
    height: 34px;
    span {
      animation: start 2s infinite ease-in-out;
      color: #fff;
      font-size: 20px;
      top: 10px;
      position: absolute;
    }
  }
}
</style>


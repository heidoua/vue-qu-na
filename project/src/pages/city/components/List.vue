<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        background-color: #eeeeee;
        padding-left: 0.2rem;
        color: #666666;
        font-size: 0.26rem;
    }

    .button-list {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;

        .button-wrapper {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            color: #666666;
            padding-left: 0.2rem;
        }
    }
}
</style>

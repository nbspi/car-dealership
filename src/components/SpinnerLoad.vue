<template>
    <transition>
        <div v-if="show" class="loadingio-spinner-ellipsis-0pbqog48zpcm">
            <div class="ldio-n0rvatz0l1p">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "SpinnerLoad",
    data() {
        return {
            show: true
        }
    },
    mounted() {
        this.showToggle();
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.show = false;
            }, 400);
        }
    }

}
</script>

<style type="text/css" scoped>
@keyframes ldio-n0rvatz0l1p {
    0% {
        transform: translate(12px, 80px) scale(0);
    }

    25% {
        transform: translate(12px, 80px) scale(0);
    }

    50% {
        transform: translate(12px, 80px) scale(1);
    }

    75% {
        transform: translate(80px, 80px) scale(1);
    }

    100% {
        transform: translate(148px, 80px) scale(1);
    }
}

@keyframes ldio-n0rvatz0l1p-r {
    0% {
        transform: translate(148px, 80px) scale(1);
    }

    100% {
        transform: translate(148px, 80px) scale(0);
    }
}

@keyframes ldio-n0rvatz0l1p-c {
    0% {
        background: #292664;
    }

    25% {
        background: #b5ccf1;
    }

    50% {
        background: #94a9ce;
    }

    75% {
        background: #667395;
    }

    100% {
        background: #292664;
    }
}

.ldio-n0rvatz0l1p div {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translate(80px, 80px) scale(1);
    background: #292664;
    animation: ldio-n0rvatz0l1p 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}

.ldio-n0rvatz0l1p div:nth-child(1) {
    background: #667395;
    transform: translate(148px, 80px) scale(1);
    animation: ldio-n0rvatz0l1p-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1),
        ldio-n0rvatz0l1p-c 1s infinite step-start;
}

.ldio-n0rvatz0l1p div:nth-child(2) {
    animation-delay: -0.25s;
    background: #292664;
}

.ldio-n0rvatz0l1p div:nth-child(3) {
    animation-delay: -0.5s;
    background: #667395;
}

.ldio-n0rvatz0l1p div:nth-child(4) {
    animation-delay: -0.75s;
    background: #94a9ce;
}

.ldio-n0rvatz0l1p div:nth-child(5) {
    animation-delay: -1s;
    background: #b5ccf1;
}

.loadingio-spinner-ellipsis-0pbqog48zpcm {
    width: 100%;
    height: 80%;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffffbe;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

.ldio-n0rvatz0l1p {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
}

.ldio-n0rvatz0l1p div {
    box-sizing: content-box;
}

</style>
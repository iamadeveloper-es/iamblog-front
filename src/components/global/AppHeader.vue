<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink} from 'vue-router';
import AppInputField from '../ui/AppInputField.vue';
import { useRouter } from 'vue-router';
import AppButton from '../ui/AppButton.vue';
import { changeColorScheme, setColorScheme } from '@/utils/aplicationUtils';
import { useAppStore } from '@/stores/appStore';

const { appData, updateAppProperty } = useAppStore();
const router = useRouter()
const header = ref(null)
const searchValue = ref('')

const toggleColorScheme = () => {
    const appTheme = changeColorScheme()
    updateAppProperty('theme', appTheme)
    setColorScheme(appTheme)
}

const onSubmit = async () => {
    router.push({ name: 'POSTS', query: { search: searchValue.value} })
}

const configComponent = () => {
    const height = header.value.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', height.toFixed(2) + 'px');
}

onMounted(() => {
    configComponent()
})
</script>

<template>
    <header class="app-header" ref="header">
        <div class="container">
            <div class="row align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-5">
                    <form class="app-header__search" @submit.prevent="onSubmit">
                        <AppInputField v-model="searchValue"></AppInputField>
                        <AppButton :class="['app-button--primary']" btn-type="submit"></AppButton>
                    </form>
                </div>
                <div class="col-md-7 d-flex justify-content-between align-items-center">
                    <nav>
                        <ul class="d-flex">
                            <li>
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/posts">Posts</RouterLink>
                            </li>   
                        </ul>
                    </nav>
                    <nav>
                        <ul class="d-flex align-items-center">
                            <!-- <li>
                                <span @click="toggleColorScheme">{{ appData.theme }}</span>
                            </li> -->
                            <li @click="toggleColorScheme">
                                <div class="icon app-link" v-if="appData.theme === 'dark'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" style="fill: rgba(var(--grey-100));"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                                </div>
                                <div class="icon app-link" v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" style="fill: rgba(var(--dark));"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
.app-header{
    position: fixed;
    width: 100%;
    padding: 1em;
    min-height: var(--header-height);
    background-color: var(--bg-header);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 99;

    ul{
        gap: 1em;
    }

    &__search{
        display: flex;
        gap: .75em;
        margin-top: 1.5em;
    }

    ul li .app-link{
        cursor: pointer;
    }

    .icon{
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover::before{
            background-color: rgba(var(--grey-100), .5);
        }

        &::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            background-color: rgba(var(--grey-100), .3);
            border-radius: 100%;
            z-index: -1;
        }
    }

    @media (min-width: 768px){
        &__search{
            margin-top: 0;
        }
    }
}
</style>
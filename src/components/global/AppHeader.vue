<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink} from 'vue-router';
import AppInputField from '../ui/AppInputField.vue';
import { useRouter } from 'vue-router';
import AppButton from '../ui/AppButton.vue';

const router = useRouter()
const header = ref(null)
const searchValue = ref('')

const toggleColorScheme = () => {
    const localStorage = window.localStorage
    const storedTheme = localStorage.getItem('theme');
    let theme = 'light'

    if(storedTheme){
        theme = storedTheme === 'light' ? 'dark' : 'light'
    }

    localStorage.setItem('theme', theme)
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
            <div class="row align-items-center">
                <div class="col-5">
                    <form class="app-header__search" @submit.prevent="onSubmit">
                        <AppInputField v-model="searchValue"></AppInputField>
                        <AppButton :class="['app-button--primary']" btn-type="submit"></AppButton>
                    </form>
                </div>
                <div class="col-7 d-md-flex justify-content-between">
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
                        <ul class="d-flex">
                            <li>
                                <span @click="toggleColorScheme">scheme</span>
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
    }
}
</style>
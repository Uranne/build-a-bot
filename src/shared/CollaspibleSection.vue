<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open" @keyup="open = open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open" @keyup="open = open">&#x25BC; Expand</span>
        </div>
        <!-- Toggleable Injected Content Here -->
        <slot v-if="open">
            <div>default</div>
        </slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(true);
</script>

<style scoped>
.header{
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
    font-size: 22px;
}
</style>

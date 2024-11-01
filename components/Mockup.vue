<template>
    <div class="border border-base-300 rounded-md shadow-md">
        <div class="flex items-center bg-gray-200 px-3 py-2 rounded-t-md">
            <div class="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div class="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            <div class="h-3 w-3 rounded-full bg-green-500 mr-4"></div>
            <div class="flex-grow">
                <input type="text"
                    class="w-full bg-gray-100 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :value="url" readonly>
            </div>
        </div>
        <div class="border-t border-base-300  text-center">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const prop = defineProps({url : String});
</script>
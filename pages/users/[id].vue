<template>
    <div>
        User id : {{userID}}
    </div>
</template>

<script setup>
    const route = useRoute()
    const userID = computed(() => {
        return route.params.id
    })
</script>

<style >
    
</style>
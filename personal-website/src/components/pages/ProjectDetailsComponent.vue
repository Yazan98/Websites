<template>
    <div class="Project">
        {{ProjectName}}
    </div>
</template>

<script>
export default {
    props: [
        'ProjectName',
        'ProjectDescription',
        'ProjectIcon'
    ]
}
</script>

<style scoped>

</style>
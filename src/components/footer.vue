<template>
<div>
    <footer class="mt-auto py-3">
        <div class="row" style="margin: 0px">
            <div class="col-12">
                <a href="https://serpan23.github.io/landing/" target="_blank" class="link_Led">Разработано DARK_LED</a>
            </div>
        </div>
    </footer>
</div>

</template>


<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
footer {
    background-color: #f8f9fa;
}
.links{
    color: #6C757D;
    cursor: pointer;
    text-decoration: none;
}
.links:hover{
    color: #EF5B65;
    text-decoration: none;
}
.link_Led{
    color: black;
    cursor: pointer;
    text-decoration: none;
}
.link_Led:hover{
    color: #EF5B65;
    text-decoration: none;
}
.router-link{
    text-decoration: none;
}
</style>
<script setup lang="ts">
const router = useRouter()
const data = reactive({ email: "", name: "" })
const save = async () => {
    console.log("save")
    await useFetch("/api/user", {
        method: "post",
        body: data
    })
    router.push("/user")
}
</script>
<template>
    create
    <input v-model="data.name" />
    <input v-model="data.email" />
    <button @click="save">Simpan</button>
</template>
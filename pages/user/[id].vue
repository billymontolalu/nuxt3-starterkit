<script setup lang="ts">
const { id } = useRoute().params
const { data } = await useFetch(`/api/user?id=${id}`)
const user = reactive({ email: "", name: "", id: "" })
user.email = data.value.data.email
user.name = data.value.data.name
user.id = data.value.data.id
const save = async () => {
    await useFetch("/api/user", { method: "PUT", body: user })
}
</script>
<template>
    <h1>Edit</h1>
    <input v-model="user.email" />
    <input v-model="user.name" />
    <button @click="save">Save</button>
</template>
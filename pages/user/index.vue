<script setup lang="ts">
const user = ref([])
const loadData = async () => {
    const { data } = await useFetch("/api/user")
    user.value = data.value.data
}
const deleteData = async (id: any) => {
    await useFetch(`/api/user?id=${id}`, { method: "DELETE" })
    loadData()
}
loadData()
</script>
<template>
    <NuxtLink to="/user/create">Create</NuxtLink>
    <table>
        <tr>
            <td>Nama</td>
            <td>Email</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in user">
            <td>{{ item?.name }}</td>
            <td>{{ item?.email }}</td>
            <td>
                <NuxtLink :to="`/user/${item.id}`">Edit</NuxtLink><button @click="deleteData(item.id)">Hapus</button>
            </td>
        </tr>
    </table>
</template>

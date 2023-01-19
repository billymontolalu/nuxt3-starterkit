<script setup lang="ts">
const { data } = await useFetch("/api/user")
</script>
<template>
    <NuxtLink to="/user/create">Create</NuxtLink>
    <table>
        <tr>
            <td>Nama</td>
            <td>Email</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in data?.data">
            <td>{{ item?.name }}</td>
            <td>{{ item?.email }}</td>
            <td>
                <NuxtLink :to="`/user/${item.id}`">Edit</NuxtLink><button>Hapus</button>
            </td>
        </tr>
    </table>
</template>

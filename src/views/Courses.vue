<template>
  <NavBar @logout="logout" />
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Courses</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <CoursesItem 
          v-for="item in courses.value"
          :key="item.id"
          :data_item="item"
          @click="addOverviews(item)"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/base/NavBar.vue'
import CoursesItem from '../components/home/CoursesItem.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()
const token = ref('')
const courses = reactive([])

const addOverviews = (item) => {
  localStorage.setItem("courses_id", JSON.stringify(item.id));
  router.push({ name: 'overview', params: { id: item.id }})
}

const logout = () => {
  if (localStorage.getItem("token")) {
    axios.post('/logout', {
      headers: {
        Authorization: "bearer " + token.value,
      },
    });
    localStorage.removeItem("token");
    router.push({ name: 'login'})
  }  
}

onMounted(() => {
  token.value = JSON.parse(localStorage.getItem("token"));
  axios
    .get('/courses', {
      headers: {
        Authorization: "Bearer " + token.value,
      },
    })
    .then((res) => {
      courses.value = res.data.data;
    })
})
</script>

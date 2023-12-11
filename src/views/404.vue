<template>
  <div class="container mx-auto flex justify-center text-center">
    <div class="mt-100">
      <img class="mx-auto h-20 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow">
      <h1 class=title>Page Not Found</h1>
      <p class="text">Sorry, we couldn't find the page you're looking for.</p>
      <router-link :to="{ name: 'courses'}" class="btn flex mt-8 justify-center">Go back courses</router-link>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 100px;
}
.title {
  font-size: 3rem;
  font-weight: bold;
}
.text {
  color: #7a7a7a;
}
.btn {
  color: #0000ff;
}
</style>
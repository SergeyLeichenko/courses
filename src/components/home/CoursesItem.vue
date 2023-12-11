<template>
  <div class="group relative">
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ data_item.name }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">students count: {{ data_item.students_count }}</p>
        <p class="mt-1 text-sm text-gray-500">difficulty: {{ data_item.difficulty }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ data_item.price }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data_item: {
        type: Object,
      },
    },
  }
</script>

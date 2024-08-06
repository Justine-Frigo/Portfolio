<template>
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        @input="onInput" 
        placeholder="Search by name or tech..."
        class="w-full p-2 rounded-md shadow-md text-zinc-800"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      onInput() {
        this.$emit('update-search', this.searchQuery);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin-bottom: 20px;
  }
  </style>
  
<template>
    <div class="user-list-container">
      <h1>User List</h1>
      <ul class="user-list">
        <li class="user-item" v-for="user in users" :key="user.id">
          <div class="user-details">
            <span class="user-name">{{ user.firstName }} {{ user.lastName }}</span>
            <span class="user-email">{{ user.email }}</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserList',
    data() {
      return {
        users: [],
      };
    },
    created() {
      axios.get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  
  <style scoped>
  .user-list-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .user-list {
    list-style: none;
    padding: 0;
  }
  
  .user-item {
    background-color: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .user-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .user-name {
    font-weight: bold;
    color: #555;
  }
  
  .user-email {
    color: #888;
    font-size: 0.9em;
  }
  </style>
  
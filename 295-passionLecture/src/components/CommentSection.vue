<script setup>
const AddComment = (comment) => {}
</script>

<template>
  <div class="main">
    <input id="comment" type="text" placeholder="Ajouter un commentaire..." />
    <input id="note" type="text" placeholder="Note (sur 5)" />
    <button @click="AddComment(comment)">PUBLIER</button>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#comment {
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
}
#note {
  width: 70px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
}
button {
  padding: 10px 20px;
  background-color: rgb(37, 68, 65);
  color: #fff;
  border: none;
  cursor: pointer;
  width: 150px;
}
</style>

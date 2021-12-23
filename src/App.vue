<template>
  <div id="nav">
    <div id="link">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/collection">Collection</router-link> | 
      <router-link to="/add">Add To Collection</router-link>
    </div>
    <h1>Owen's Bourbon Collection</h1>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#link {
  background: lightslategrey;
  width: 350px;
  border-radius: 5px;
  margin: auto;
  border: solid maroon 2px;
}

#nav {
  padding: 30px;
  background-image: url("./assets/img/Barrels5.jpg");
  color: lightGrey;
  border: 4px solid maroon;
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: maroon;
}
</style>

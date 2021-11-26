<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div id='template'>
    <div id='title'>
      <h1> AfterWork </h1>
      <p id='slogan'> " It's 5 o'clock somewhere " </p>
    </div>
    <div id='content'>
      <div id='generator-box'>
        <div id='generator-title'>
          <h2>What to drink...?</h2>
        </div>
        <div id='generator-content'>
          <img src='https://github.com/FrankZiWANG-dev/AfterWork/blob/main/AfterWork/src/assets/images/drink-placeholder.jpg?raw=true' alt='' id='drink'>
          <p id='name'></p>
          <p id='ingredients'></p>
          <div id='intro'>
            <p>Long day at work?<br>
            Don't know what to get?</p>
            <p>Click the button to get an idea!</p>
          </div>
          <div id='button'>Inspire me!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body{
  margin:0;
}
#app {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  background-color: #80190b;
}
#content{
  background-image: url("https://github.com/FrankZiWANG-dev/AfterWork/blob/main/AfterWork/src/assets/images/bar-table.jpg?raw=true");
  background-size:cover;
  background-position-x: 70%;
  background-position-y: 20%;
  height: 100vh;
}
#title{
  padding-top: 10px;
  text-shadow: 2px 2px #1E1E1E;
}
  h1{
    margin: 10px 0px 0px 35px;
  }
  #slogan{
    font-size: 0.9em;
    margin-top: 2px;
    margin-left: 35px;
    color: #dbd6d6;
  }
#generator-box{
  padding: 20px;
  text-align: center;  
}
  #generator-title{
    text-shadow: 2px 2px #1E1E1E;
    margin: 30px;
  }
  #generator-content{
    background-color: #dbd6d6;
    color:#1E1E1E;
    
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    height: 430px;
    width: 300px;
    border-radius: 10px;  
  }
  #drink{
    margin: 0;
    padding: 0;
    height: 200px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  #button{
      background-color: #1e1e1e;
      color:white;
      margin-left: auto;
      margin-right: auto;
      margin-top: 40px;
      width: 40%;
      padding: 2px;
      border-radius: 10px;
  }
</style>

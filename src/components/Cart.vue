 <template>
  <div class="hello">
  
  <ul id="Cart">
  <li v-for="prod in Products" :key="prod.id">

     
      <div class="prod-laptop"> <img :src="prod.image" alt="prod.image" /> </div>
      <div class="prod-details">
      <h3>{{prod.title}}</h3>
     <h4>price: ${{prod.price}}</h4> 
 
   <h4>Find at:{{prod.city}}</h4>
         <h5>personal #{{prod.id}}</h5>

 <button class="add-button"> <router-link to="/Add">Add to cart</router-link></button>
</div>
  </li>
</ul>
    

 
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue } from 'vue-property-decorator';
import Product from '@/models/product.ts';
@Component
export default class Cart extends Vue {
  @Prop() private msg!: string;

  getImage(src:string){
    return require(src);
  }
  Products: Array<Product>=[
    // {
    //   image: '@/assets/2.jpg'
    // } 
    //  { id: '0', image: require('@/assets/1.jpg'),title:'lenovo',price:'500',city:'Kiev',raiting:'3' },
    //   { id: '1', image: require('@/assets/2.jpg'),title:'lg',price:'500',city:'Kirovograd',raiting:'6' } ,
    //   { id: '2', image: require('@/assets/3.jpg'),title:'xiaomi',price:'500',city:'Odessa',raiting:'7' },
    //    { id: '3', image: require('@/assets/4.jpg'),title:'macbook',price:'500',city:'Los-Angeles',raiting:'9' },
    //     { id: '4', image: require('@/assets/5.jpg'),title:'samsung',price:'500',city:'Vashington',raiting:'10' },
    //      { id: '5', image: require('@/assets/6.png'),title:'blabla',price:'500',city:'New-York',raiting:'10' },
    new Product(0,  require('@/assets/1.jpg'),'LG',56,'Kiev'),
      new Product(1,require('@/assets/2.jpg'),'MACBOOK',56,'Kirovograd'), 
      new Product(2,require('@/assets/3.jpg'),'ACER',56,'Odessa'),
    new Product(3,require('@/assets/4.jpg'),'ASUS',56,'New-York'),
      new Product(4,require('@/assets/5.jpg'),'lenovo',56,'Los-Angeles'), 
     new Product(5,require('@/assets/3.jpg'),'lenovo',56,'Vashington')
  ];

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin flex{
  display:inline-flex;
flex-direction:row;
justify-content: space-around;
}
@mixin flex-column{
display:inline-flex;
flex-direction:column;
justify-content: space-between;
}
body{
  background:#e1e1e1;
  height: 100%;
  
  }
  .hello{
    height: 100%;
   
  }
  #cart{height: 100%;
  }
h3 {
  margin:  0;
}
h4 {
  margin:  0;
}h5 {
  margin:  0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin:0 auto;
  width:80%;
   background:#e1e1e1;
 
 @include flex;
 align-items: stretch;
 flex-wrap: wrap;
}
li {
  
  @include flex-column;

background: #ffffff;
  width:25%;

 margin:2%;
  overflow: hidden;
  text-align: left;
  border-radius:2%;
}
p {
  margin:  0;
}
a {
  color: #ffffff;
  text-decoration: none;
}
img{
 width:100%;
 height: 100%;
}
.prod{
   
&-laptop{
  width:100%;
  height: 60%;
}
&-details{
  width:80%;
  height: 40%;
  @include flex-column;
  margin:0 auto;
}
}
.add-button{
  background: #42b983;
  margin:2%;
  border:none;
  padding:6% 10%;
}
</style>

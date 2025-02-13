//仓鼠吃饱了问题
let hamster = {
    // stomach: [],    //---修复
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: [],    //---修复
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: [],    //---修复
  };
  
  // 这只仓鼠找到了食物
  speedy.eat("apple");
  console.log( "speedy eat-----",speedy.stomach ); 
  
  // 这只仓鼠也找到了食物，为什么？请修复它。
  console.log( "lazy eat-------",lazy.stomach ); 
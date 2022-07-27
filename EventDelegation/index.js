class Calculator{
  constructor(element){
    this._element=element;
    element.onclick=this.onClick.bind(this);
  }

  add(num1,num2){
    return num1+num2;
  }
  subtract(num1,num2){
    return num1-num2;
  }
  multiply(num1,num2){
    return num1*num2;
  }
  divide(num1,num2){
    let ans=num1*1.0/num2;
    return ans.toFixed(2);
  }

  onClick(event){
    let action=event.target.dataset.action;
    console.log(action)
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    if(action){
      const result=this[action](num1,num2);
      document.getElementById("result").innerText=result;
    }
  }
}

new Calculator(calculator);
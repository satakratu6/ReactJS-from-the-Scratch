function Hello(){
  let myName='Satakratu';
  let number=456;
  let fullName=()=>{
    return 'Satakratu Chakraborty'
  }
  return <p>
    MessageNo: {number} I am {fullName()}
  </p>
}
export default Hello;
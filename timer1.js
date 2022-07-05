const args = process.argv.slice(2);

const timer1 = (sum) => { 
  if (!isNaN(sum) && sum > 0)  {
    process.stdout.write('Timer Started!');
    let time = sum * 1000;
    setTimeout(() => {
      console.log('Beep! \x07')
      process.stdout.write('Beep! \x07');}, time);
   }
  }
  for (let num of args) {
    timer1(parseInt(num))
  }

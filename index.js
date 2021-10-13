const promise = (num) =>
   new Promise((resolve, reject) => {
   
    if (num) {

      setTimeout(()=> {
           console.log(num);
           document.querySelector('.promise').innerText = num;
           resolve(num);
      },1000)

    } else {
      reject("error");
    }
  });
promise(10)
  .then(n1=> promise(--n1))
   .then(n2 => promise(--n2))
   .then(n3 => promise(--n3))
   .then(n4 => promise(--n4))
   .then(n5 => promise(--n5))
   .then(n6 => promise(--n6))
   .then(n7 => promise(--n7))
   .then(n8 => promise(--n8))
   .then(n9=> promise(--n9))
  .then(n10=> promise('Happy Independence day!!!'));
   
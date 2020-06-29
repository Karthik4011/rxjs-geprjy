import { Observable, Subscriber } from 'rxjs';


const observable = new Observable(
  subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(()=>{
      subscriber.next(4);
      subscriber.complete();
    },2000)
  }
)


console.log("I am about to subscribe");

const subscriber = observable.subscribe({
  next(x){console.log(`we got: ${x}`)},
  error(err){console.log("error is : "+err)},
  complete(){ console.log("completed")}
})

subscriber.unsubscribe()

console.log("all Done")
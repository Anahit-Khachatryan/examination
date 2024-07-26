function toPromise(data: any) {
    return sleep(3_000).then(() => Promise.resolve(data));
 }

 function sleep(ms: any) {
    return  new Promise(resolve => setTimeout(() => resolve(5), ms))
   }

async function handleData( ) {
   try {
    const response = await toPromise(7); // sa hnaravorutyun e talis chgrel callback, grel enpes inchpes synrone code es grum, bayc spasum e, sa syntatic sugar e, takic ashxatum e lriv callbackov toPriomise(7).then(res => console.log(res))
    console.log(response)
   } catch(error) {

   } finally {

   }
}


handleData();
 

function check() {
    setTimeout(() => {
        console.log(15)
    },3_000)
    toPromise(7).then(res => console.log(res))
}

check()

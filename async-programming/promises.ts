// function callApi() {
//     return {
//         then() {}
//     }
// }

// callApi().then(res => callApi(res.data)) //then-y veradardznum e res.datayi promise
// .then(res => callApi(res.data))
// .then(res => callApi(res.data)) // u espes sharunak, ete nuynisk return 6 anes, inky 6 wrap kani promise-i mej


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 3_000)
});
promise.then(console.log);

function sleep(ms: any) {
 return  new Promise(resolve => setTimeout(() => resolve(5), ms))
}

sleep(5_000).then(() => console.log('executed'))


Promise.resolve(5).then(console.log) // shat ogtakara e Promise.resolve testeri depkum


function toPromise(data: any) {
   return sleep(3_000).then(() => Promise.resolve(data));
}

function reject() {
    return sleep(4_000).then(() => Promise.reject('Error'))
}

Promise.all([
    toPromise(1),
    toPromise(2),
    toPromise(3),
    toPromise(4),
    reject(), // es depkum arden kta error
]).then(console.log)

// Promise.allSettled([  // ughaki es es versionum typescripti chka, tarav browserum  [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}...{status: 'rejected', reason: 'Error'}]
//     toPromise(1),
//     toPromise(2),
//     toPromise(3),
//     toPromise(4),
//     reject(), // es depkum arden kta error
// ]).then(console.log)

Promise.race([
    sleep(5_000).then(() => toPromise(9)),
    sleep(7_000).then(() => toPromise(2)),
    sleep(6_000).then(() => toPromise(3)),
    sleep(4_000).then(() => toPromise(4)),
    reject(), // nayats kani varkyan enk talis, ete minchev ed resolve voch mi ban cheghav uremn reject kta
]).then(console.log)  // 

// Promise.any([
//     sleep(5_000).then(() => toPromise(9)),
//     sleep(7_000).then(() => toPromise(2)),
//     sleep(6_000).then(() => toPromise(3)),
//     sleep(4_000).then(() => toPromise(4)),
//     reject(), // rejecty ignore e anum, bayc ete bolory reject eghan error kgci
// ]).then(console.log)  // racy nman berum e arajin resolve eghatsy





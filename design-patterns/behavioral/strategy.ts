
// class HTTPClient {
//     get(url: string, token){
//        return xhr.get(url, {auth: token}).then().catch(error => {
//           if(error.status === 401) {
//              // hangler logic
//              //throw error
//              //redirect to login page
//           }
//        })
//     } // es catchu pahy amen angam petka gres
//     post() {

//     }

//     patch() {

//     }

//     //etc
// }

class HTTPClient {

    constructor(private authStrategy: AuthorizationStrategy) {
    }

    get(url: string){
       return xhr.get(url, {auth: this.authStrategy.getToken()}).then().catch(error => {
          if(error.status === 401) {
            this.authStrategy.onUnauthorized();
          }
       })
    } // es catchu pahy amen angam petka gres
    post(url: string, body: any) {
        return xhr.get(url, {auth: this.authStrategy.getToken()}, body).then().catch(error => {
            if(error.status === 401) {
              this.authStrategy.onUnauthorized();
            }
         })
    }

    patch() {

    }

    //etc
}

interface AuthorizationStrategy {
    getToken(): string;
    onUnauthorized(): void;
}

class MyBackendStrategy implements AuthorizationStrategy {
  getToken() {
    return localStorage.getItem('token') || ''
  }

  onUnauthorized() {
    //redirect to login page
  }
}

class GoogleCloudStrategy implements AuthorizationStrategy {
    getToken() {
      return localStorage.getItem('token') || ''
    }
  
    onUnauthorized() {
      //refresh token
    }
  }

const myHttp = new HTTPClient(new MyBackendStrategy);
const googleHttp = new HTTPClient(new GoogleCloudStrategy);

myHttp.get('url')
googleHttp.get('cloud.google.com')
//Ka mets algoritm, u ete menk ed algoritmy grenk hskayakan bana darnum, menk uzum enk mi hat classi instance unenank(da strategyna), menk da kkanchenk, bacatri vor strategyin vor depkum ogtagortsel
// kara lini interface, kara lini class ...
//strategy - e bacatrum e vor depkum inky vonc iran pahi
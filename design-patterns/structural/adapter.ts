
class Dialog {

}

//primeng u angular material,  
//unenk service anum e dialog.open, bayc primeng urish dzeva anum, angular materialy urish. 

class MyDialog {
    open(component: any) {}
}

//myusy orinak authentication unenk, vory ogtagortsum e thirdPartyApi vori methodi anuny urisha

class JWTAuthentication {
    authorize() {}
}

class Authentication {
    authenticate() {}
}

class ThirdPartyApi {
    authenticate(auth: Authentication) {}
}

const thirdParty = new ThirdPartyApi();
// thirdParty.authenticate(new JWTAuthentication()) //espes chi toghi anel, vorovhetev anunnery tarbervum e

// dra hamar grum enk adapter

class AuthenticationAdapter implements Authentication {
    authenticate(): void {
        return new JWTAuthentication().authorize();
    }
}

thirdParty.authenticate(new AuthenticationAdapter())


//tuyl e talis tarber classner irar het xosecnel. Unenk tarber classner nuyn ban en anum, bayc interface-y tarbera(anunnery orinak methodi  tarbera).Cankacats api het ashxately kara petk lini adapter
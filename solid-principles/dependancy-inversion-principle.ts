interface IReceiptSender {
    sendReceipt(product: string, user: string): void
}

class SmsReceiptSender implements IReceiptSender {
    sendReceipt(product: any, user: string): void {
        
    }
}

class EmailReceiptSender implements IReceiptSender {
    sendReceipt(product: string, user: string): void {
        
    }
}

class ProductDependancy {
  private receiptSender: IReceiptSender; 

  constructor(receiptSender: IReceiptSender) {
    this.receiptSender = receiptSender
  }

//   setReceiptSender(receiptSender: IReceiptSender) {
//     this.receiptSender = receiptSender
//   } // inky es tarberakov er anum

//    purchase(user: string) {
//     //purchase logic goes here
//     //after that send receipt
//    this.receiptSender.sendReceipt(product, user)
//    }
}

let test = new ProductDependancy(new EmailReceiptSender)
console.log('test', test)
//loose coupling apahoveln e
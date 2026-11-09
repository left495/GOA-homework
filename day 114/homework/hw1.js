// ================ პირველი დავალება ==================




let bankAccount = {
    _owner:'Goga',
    _pin:'1234',
    _balance:2500,
    _isBlocked:false,
    get owner(){
        return this._owner
    },
    set owner(keyWord){
        if(keyWord){
            this._owner = keyWord
        }else{
            console.log( "Invalid owner name!");
        }
    },
    get balance(){
        return this._balance
    },
    set balance(keyNum){
        if(typeof keyNum == "number" && keyNum>0){
            this._balance = keyNum
        }else{
            console.log("Invalid balance!");
        }
    },
    get pin(){
        return 'PIN is hidden'
    },
    set pin(pin){
        if(pin.length==4){
            this._pin = keyWord
        }else{
            console.log("PIN must contain exactly 4 digits!");
        }
    },
    get accaontStatus(){
        if(this._isBlocked == true){
            return 'Blocked'
        }else{
            return 'Active'
        }
    },
    set deposit(num){
        if(this._isBlocked == true){
            if(num>0){
                this._balance+=num
            }else{
                console.log("Invalid deposit amount!")
            }
        }else{
            console.log("Account is blocked!")
        }
    },
    set withDraw(num){
        if(this._isBlocked == true){
            if(num>0 && num<=this._balance){
                this._balance-=num
            }else{
                console.log("Insufficient balance!")
            }
        }
    }
}



bankAccount.owner = 'tsotne'
console.log(bankAccount.owner);


bankAccount.balance = 3000
console.log(bankAccount.balance);

bankAccount.pin = '444'
console.log(bankAccount.pin);

console.log(bankAccount.accaontStatus);


bankAccount.deposit = 123
console.log(bankAccount.balance);


// 1)შექმენი ობიექტი bankAccount, რომელსაც ექნება შემდეგი თვისებები:
// - _owner — "Goga"
// - _balance — 2500
// - _pin — "1234"
// - _isBlocked — false
// შექმენი შემდეგი getter-ები და setter-ები:
// 1. owner
// - Getter-მა უნდა დააბრუნოს ანგარიშის მფლობელის სახელი.
// - Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ ახალი მნიშვნელობა სტრიქონია და ცარიელი არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე შეტყობინება: "Invalid owner name!"
// 2. balance
// - Getter-მა უნდა დააბრუნოს მიმდინარე ბალანსი.
// - Setter-მა უნდა მიიღოს ახალი ბალანსი, მაგრამ ცვლილება დაუშვას მხოლოდ მაშინ, თუ ახალი მნიშვნელობა რიცხვია და 0-ზე ნაკლები არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე "Invalid balance!"
// 3. pin
// - Getter-მა არასოდეს უნდა დააბრუნოს PIN-ის ნამდვილი მნიშვნელობა. მან უნდა დააბრუნოს "PIN is hidden".
// - Setter-მა ახალი PIN უნდა მიიღოს მხოლოდ მაშინ, თუ ის ოთხნიშნა სტრიქონია.
// - სხვა შემთხვევაში გამოიტანე "PIN must contain exactly 4 digits!"
// 4. accountStatus — მხოლოდ Getter
// - თუ _isBlocked არის true, დააბრუნოს "Blocked".
// - სხვა შემთხვევაში დააბრუნოს "Active".
// 5. deposit — მხოლოდ Setter
// - Setter-მა მიიღოს თანხა და დაამატოს ბალანსს.
// - თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
// - თუ ანგარიში დაბლოკილია, თანხის დამატება არ უნდა მოხდეს.
// - არასწორი თანხის შემთხვევაში გამოიტანე "Invalid deposit amount!"
// - დაბლოკილი ანგარიშის შემთხვევაში გამოიტანე "Account is blocked!"
// 6. withdraw — მხოლოდ Setter
// - Setter-მა მიიღოს გასატანი თანხა.
// - თანხა უნდა იყოს 0-ზე მეტი და ბალანსზე ნაკლები ან მისი ტოლი.
// - დაბლოკილი ანგარიშიდან თანხის გატანა არ უნდა შეიძლებოდეს.
// - არასაკმარისი თანხის შემთხვევაში გამოიტანე "Insufficient balance!"
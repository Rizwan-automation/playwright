const base = require('@playwright/test');

exports.customTest = base.test.extend(
    {
        testDataForOrder:{
            email : "rizwandummyemail1@gmail.com",
            password : "Learning1!",
            productName : "iphone 13 pro",
            country : " Pakistan",
            quantity : " Quantity: 1 ",
            cvv : "655",
            name : "Rizwan Iqbal",
            coupon : "rahulshettyacademy",
            couponApplied : "Coupon Applied",
            confirmationMsg : " Thankyou for the order. ",
            orderSummary : " order summary "
        }
    }
)
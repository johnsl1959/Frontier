var myData = new Vue({
    el: '#myData',
    data: {
        info: []
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            this.$http.get("https://frontiercodingtests.azurewebsites.net/api/accounts/getall").then(function (data, status, response) {
                if (status == 200) {
                    this.info = data;
                }
            });
        }
    }
});
/*    methods: {
        fetchData: function () {
            var id = 0;
            var fName = '';
            var lName = '';
            var email = '';
            var phoneNumber = '';
            var amountDue = 0.00;
            var paymentDueDate = new Date();
            var accountStatusId = 0;
            var data = [{ "Id": 1, "FirstName": "Emma", "LastName": "Smith", "Email": "emma.smith@email.com", "PhoneNumber": "5555559483", "AmountDue": 84.22, "PaymentDueDate": "2021-08-15T00:00:00+00:00", "AccountStatusId": 0 },
            { "Id": 2, "FirstName": "Noah", "LastName": "Johnson", "Email": "noah.johnson@email.com", "PhoneNumber": "5555557383", "AmountDue": 123.76, "PaymentDueDate": "2021-08-30T00:00:00+00:00", "AccountStatusId": 0 },
            { "Id": 3, "FirstName": "Abigail", "LastName": "Williams", "Email": "abigail.williams@email.com", "PhoneNumber": "5555553928", "AmountDue": 42.45, "PaymentDueDate": "2021-08-27T00:00:00+00:00", "AccountStatusId": 0 },
            { "Id": 4, "FirstName": "Mason", "LastName": "Brown", "Email": "mason.brown@email.com", "PhoneNumber": "5555550394", "AmountDue": 0.0, "PaymentDueDate": null, "AccountStatusId": 1 },
            { "Id": 5, "FirstName": "Emily", "LastName": "Miller", "Email": "emily.miller@email.com", "PhoneNumber": "5555556958", "AmountDue": 355.67, "PaymentDueDate": "2021-07-25T00:00:00+00:00", "AccountStatusId": 2 },
            { "Id": 6, "FirstName": "Michael", "LastName": "Davis", "Email": "michael.davis@email.com", "PhoneNumber": "5555550394", "AmountDue": 0.0, "PaymentDueDate": null, "AccountStatusId": 1 },
            { "Id": 7, "FirstName": "Joshua", "LastName": "Garcia", "Email": "joshua.garcia@email.com", "PhoneNumber": "5555559283", "AmountDue": 98.35, "PaymentDueDate": "2021-08-02T00:00:00+00:00", "AccountStatusId": 2 }];
            this.$http.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall',
                function (data, status) {
                    if (status == 200) {
                        //<do something>
                    }
                    else {
                        //<do something>
                    }
                });
            for (let i = 0; i < data.length; i++) {
                id = data[i].Id;
                fName = data[i].FirstName;
                lName = data[i].LastName;
                email = data[i].Email;
                phoneNumber = data[i].PhoneNumber;
                amountDue = data[i].AmountDue;
                paymentDueDate = data[i].PaymentDueDate
                accountStatusId = data[i].AccountStatusId;
            }
        }
    }*/